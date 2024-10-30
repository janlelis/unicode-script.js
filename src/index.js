import UNICODE_DATA_SCRIPTS from "./scripts.js";

const { SCRIPTS, SCRIPT_NAMES, SCRIPT_ALIASES, SCRIPT_EXTENSIONS, OFFSETS } =
  UNICODE_DATA_SCRIPTS;

const SCRIPT_ALIASES_FLAT = Object.keys(SCRIPT_ALIASES).filter((s) => {
  return s[0] !== "Q";
});

const ALL_UNICODE_SCRIPTS = new Set([...SCRIPT_NAMES, "Unknown"].sort());
const ALL_UNICODE_SCRIPT_CODES = new Set(
  [...SCRIPT_ALIASES_FLAT, "Zzzz"].sort()
);
const AUGMENTED_SCRIPT_CODES = new Set(["Hanb", "Jpan", "Kore"]);
const ALL_SCRIPT_CODES = new Set(
  [...ALL_UNICODE_SCRIPT_CODES, ...AUGMENTED_SCRIPT_CODES].sort()
);

/**
 * Use codepoints instead of characters if preferred
 * @private
 */
function codepointToChar(codepoinOrNot) {
  if (Number.isInteger(codepoinOrNot)) {
    return String.fromCodePoint(codepoinOrNot);
  } else {
    return codepoinOrNot;
  }
}

/**
 * Use codepoints instead of characters if preferred
 * @private
 */
function setIntersection(setA, setB) {
  if (typeof setA.intersection === "function") {
    return setA.intersection(setB);
  } else {
    return new Set([...setA].filter((v) => setB.has(v)));
  }
}

/**
 * Queries the SCRIPTS index and returns an index to be used in the
 * SCRIPT_NAMES or SCRIPT_ALIASES_FLAT arrays
 * @private
 */
function unicodeScriptIndex(char) {
  let codepoint_depth_offset = char.codePointAt(0);
  let index_or_value = SCRIPTS;
  for (const depth of OFFSETS) {
    index_or_value = index_or_value[Math.floor(codepoint_depth_offset / depth)];
    codepoint_depth_offset = codepoint_depth_offset % depth;
    if (!Array.isArray(index_or_value)) {
      return index_or_value;
    }
  }
  return index_or_value[codepoint_depth_offset];
}

/**
 * Queries the SCRIPT_EXTENSIONS index and returns an index to be used in the
 * SCRIPT_NAMES or SCRIPT_ALIASES_FLAT arrays
 * @private
 */
function unicodeScriptExtensionIndexes(string) {
  const res = new Set();

  [...string].forEach((char) => {
    (SCRIPT_EXTENSIONS[char] || [unicodeScriptIndex(char)]).forEach(
      (scriptIndex) => {
        res.add(scriptIndex);
      }
    );
  });

  return res;
}

/**
 * Returns the Unicode script name of a single character
 *
 * @param {string|number} char Single character string or codepoint
 * @returns {string|undefined} Script name
 */

export function unicodeScript(char) {
  char = codepointToChar(char);

  if ((typeof char !== "string" && !(char instanceof String)) || char === "") {
    return undefined;
  } else if ([...char][1]) {
    return undefined;
  }

  return SCRIPT_NAMES[unicodeScriptIndex(char)] || "Unknown";
}

/**
 * Returns the Unicode script alias (ISO 15924) of a single character
 *
 * @param {string|number} char Single character string or codepoint
 * @returns {string|undefined} Script name (ISO 15924)
 */
export function unicodeScriptCode(char) {
  char = codepointToChar(char);

  if ((typeof char !== "string" && !(char instanceof String)) || char === "") {
    return undefined;
  } else if ([...char][1]) {
    return undefined;
  }

  return SCRIPT_ALIASES_FLAT[unicodeScriptIndex(char)] || "Zzzz";
}

/**
 * Returns a Set of all scripts used in the string
 *
 * @param {string} string Input string
 * @returns {Set} Set of script names
 */
export function unicodeScripts(string) {
  const res = new Set();

  [...string].forEach((char) => {
    const scriptName = unicodeScript(char);
    res.add(scriptName);
  });

  return new Set([...res].sort());
}

/**
 * Returns a Set of all scripts used in the string (ISO 15924)
 *
 * @param {string} string Input string
 * @returns {Set} Set of script names (ISO 15924)
 */
export function unicodeScriptCodes(string) {
  const res = new Set();

  [...string].forEach((char) => {
    const scriptName = unicodeScriptCode(char);
    res.add(scriptName);
  });

  return new Set([...res].sort());
}

/**
 * Returns a Set of all scripts extensions used in the string
 * See https://www.unicode.org/reports/tr24/#Script_Extensions
 *
 * @param {string} string Input string
 * @returns {Set} Set of script extensions
 */
export function unicodeScriptExtensions(string) {
  return new Set(
    [...unicodeScriptExtensionIndexes(string)]
      .map((scriptIndex) => SCRIPT_NAMES[scriptIndex])
      .sort()
  );
}

/**
 * Returns a Set of all scripts extensions used in the string (ISO 15924)
 * See https://www.unicode.org/reports/tr24/#Script_Extensions
 *
 * @param {string} string Input string
 * @returns {Set} Set of script extensions (ISO 15924)
 */
export function unicodeScriptExtensionCodes(string) {
  return new Set(
    [...unicodeScriptExtensionIndexes(string)]
      .map((scriptIndex) => SCRIPT_ALIASES_FLAT[scriptIndex])
      .sort()
  );
}

/**
 * Returns the augmented script set as described in
 * https://www.unicode.org/reports/tr39/#def-augmented-script-set
 *
 * @param {string} string Input string (single char)
 * @returns {Set} Set of script extensions + augmented scripts (ISO 15924)
 */
export function unicodeAugmentedScriptCodes(string) {
  let augmented = unicodeScriptExtensionCodes(string);
  if (augmented.has("Hani")) {
    augmented.add("Hanb");
    augmented.add("Jpan");
    augmented.add("Kore");
  }
  if (augmented.has("Hira")) {
    augmented.add("Jpan");
  }
  if (augmented.has("Kana")) {
    augmented.add("Jpan");
  }
  if (augmented.has("Hang")) {
    augmented.add("Kore");
  }
  if (augmented.has("Bopo")) {
    augmented.add("Hanb");
  }
  if (augmented.has("Zyyy") || augmented.has("Zinh")) {
    augmented = new Set(ALL_SCRIPT_CODES);
  }

  return augmented;
}

/**
 * Returns the resolved script set as described in
 * https://www.unicode.org/reports/tr39/#def-resolved-script-set
 *
 * @param {string} string Input string
 * @returns {Set} Set of resolved scripts (ISO 15924)
 */
export function unicodeResolvedScriptCodes(string) {
  return [...string].reduce((acc, char) => {
    return setIntersection(acc, unicodeAugmentedScriptCodes(char));
  }, ALL_SCRIPT_CODES);
}

/**
 * Returns the mixed-script status of a string as per
 * https://www.unicode.org/reports/tr39/#def-mixed-script
 *
 * @param {string} string Input string
 * @returns {boolean} true if mixed-script, false if single-script
 */
export function isMixedScript(string) {
  return unicodeResolvedScriptCodes(string).size === 0;
}

/**
 * Returns the single-script status of a string as per
 * https://www.unicode.org/reports/tr39/#def-single-script
 *
 * @param {string} string Input string
 * @returns {boolean} false if mixed-script, true if single-script
 */
export function isSingleScript(string) {
  return unicodeResolvedScriptCodes(string).size !== 0;
}

/**
 * Lists all known Unicode scripts
 *
 * @returns {Set} All script names
 */
export function listUnicodeScripts() {
  return new Set(ALL_UNICODE_SCRIPTS);
}

/**
 * Lists all known Unicode scripts (ISO 15924)
 *
 * @returns {Set} All script names (ISO 15924)
 */
export function listUnicodeScriptCodes() {
  return new Set(ALL_UNICODE_SCRIPT_CODES);
}

/**
 * Lists augmented scripts (ISO 15924)
 *
 * @returns {Set} Augmented scripts as described in UAX24
 */
export function listUnicodeAugmentedScriptCodes() {
  return new Set(AUGMENTED_SCRIPT_CODES);
}
