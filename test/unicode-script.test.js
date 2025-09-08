import { describe, it, expect } from "vitest";
import {
  unicodeScripts,
  unicodeScriptCodes,
  unicodeScript,
  unicodeScriptCode,
  unicodeScriptExtensions,
  unicodeScriptExtensionCodes,
  unicodeAugmentedScriptCodes,
  unicodeResolvedScriptCodes,
  isMixedScript,
  isSingleScript,
  listUnicodeScripts,
  listUnicodeScriptCodes,
  listUnicodeAugmentedScriptCodes,
} from "../src/index.js";

describe("unicodeScripts(string)", () => {
  it("will always return a Set", () => {
    expect(unicodeScripts("")).toEqual(new Set());
    expect(unicodeScripts("A")).toContain("Latin");
  });

  it("will return all scripts that characters in the string belong to", () => {
    expect(unicodeScripts("СC")).toEqual(new Set(["Cyrillic", "Latin"]));
  });

  it("will return all scripts in sorted order", () => {
    expect(unicodeScripts("СA")).toEqual(new Set(["Cyrillic", "Latin"]));
    expect(unicodeScripts("AС")).toEqual(new Set(["Cyrillic", "Latin"]));
  });
});

describe("unicodeScript(char)", () => {
  it("will return script for that character", () => {
    expect(unicodeScript("ᴦ")).toEqual("Greek");
    expect(unicodeScript("�")).toEqual("Common");
  });

  it("will return Unknown for characters not in any script (unassigned, invalid, etc.)", () => {
    expect(unicodeScript("𐱐")).toEqual("Unknown");
  });

  it("will return undefined for strings that are not string length 1", () => {
    expect(unicodeScript("")).toBe(undefined);
    expect(unicodeScript("ab")).toBe(undefined);
  });

  describe("[unicode versions]", () => {
    it("works for scripts introduced in Unicode 17", () => {
      expect(unicodeScript("𞛀")).toEqual("Tai_Yo");
    });
  })
});

describe("unicodeScriptCodes(string)", () => {
  it("will return four letter script codes (ISO 15924)", () => {
    expect(unicodeScriptCodes("СC")).toEqual(new Set(["Cyrl", "Latn"]));
  });
});

describe("unicodeScriptCode(char)", () => {
  it("will return four letter script code (ISO 15924)", () => {
    expect(unicodeScriptCode("𐱐")).toEqual("Zzzz");
  });
});

describe("listUnicodeScripts()", () => {
  it("will return a list of all script names", () => {
    expect(listUnicodeScripts()).toContain("Inscriptional_Parthian");
    expect(listUnicodeScripts()).toContain("Unknown");
  });
});

describe("listUnicodeScriptCodes()", () => {
  it("will return a list of all script codes", () => {
    expect(listUnicodeScriptCodes()).toContain("Egyp");
    expect(listUnicodeScriptCodes()).toContain("Zzzz");
  });
});

describe("listUnicodeAugmentedScriptCodes()", () => {
  it("will return a list of all augmented script codes", () => {
    expect(listUnicodeAugmentedScriptCodes()).toEqual(
      new Set(["Hanb", "Jpan", "Kore"])
    );
  });
});

describe("unicodeScriptExtensions(string)", () => {
  it("will always return a Set", () => {
    expect(unicodeScriptExtensions("")).toEqual(new Set());
  });

  it("will return all extended scripts that characters in the string belong to", () => {
    expect(unicodeScriptExtensions("॥")).toEqual(
      new Set([
        "Bengali",
        "Devanagari",
        "Dogra",
        "Grantha",
        "Gujarati",
        "Gunjala_Gondi",
        "Gurmukhi",
        "Gurung_Khema",
        "Kannada",
        "Khudawadi",
        "Limbu",
        "Mahajani",
        "Malayalam",
        "Masaram_Gondi",
        "Nandinagari",
        "Ol_Onal",
        "Oriya",
        "Sinhala",
        "Syloti_Nagri",
        "Takri",
        "Tamil",
        "Telugu",
        "Tirhuta",
      ])
    );
  });
});

describe("unicodeScriptExtensionCodes(string)", () => {
  it("will return all extended scripts that characters in the string belong to", () => {
    expect(unicodeScriptExtensionCodes("॥")).toEqual(
      new Set([
        "Beng",
        "Deva",
        "Dogr",
        "Gong",
        "Gonm",
        "Gran",
        "Gujr",
        "Gukh",
        "Guru",
        "Knda",
        "Limb",
        "Mahj",
        "Mlym",
        "Nand",
        "Onao",
        "Orya",
        "Sind",
        "Sinh",
        "Sylo",
        "Takr",
        "Taml",
        "Telu",
        "Tirh",
      ])
    );
  });
});

describe("unicodeAugmentedScriptCodes(string)", () => {
  it("will return all extended scripts that characters in the string belong to + augmented", () => {
    expect(unicodeAugmentedScriptCodes("ねガ")).toEqual(
      new Set(["Hira", "Kana", "Jpan"])
    );
  });

  it("will replace Common with all scripts", () => {
    expect(unicodeAugmentedScriptCodes("1")).toEqual(
      new Set([
        ...listUnicodeScriptCodes(),
        ...listUnicodeAugmentedScriptCodes(),
      ])
    );
  });
});

describe("unicodeResolvedScriptCodes(string)", () => {
  it("return intersection of augmented scripts per character", () => {
    expect(unicodeResolvedScriptCodes("СігсӀе")).toEqual(new Set(["Cyrl"]));

    expect(unicodeResolvedScriptCodes("Сirсlе")).toEqual(new Set());

    expect(unicodeResolvedScriptCodes("𝖢𝗂𝗋𝖼𝗅𝖾")).toEqual(
      new Set([
        ...listUnicodeScriptCodes(),
        ...listUnicodeAugmentedScriptCodes(),
      ])
    );
  });
});

describe("isMixedScript(string)", () => {
  it("return true if unicodeResolvedScriptCodes(string) is empty", () => {
    expect(isMixedScript("СігсӀе")).toEqual(false)
    expect(isMixedScript("Сirсlе")).toEqual(true)
    expect(isMixedScript("𝖢𝗂𝗋𝖼𝗅𝖾")).toEqual(false)
    expect(isMixedScript("1")).toEqual(false)
    expect(isMixedScript("ねガ")).toEqual(false)
  });
});

describe("isSingleScript(string)", () => {
  it("return true if unicodeResolvedScriptCodes(string) is not empty", () => {
    expect(isSingleScript("СігсӀе")).toEqual(true)
    expect(isSingleScript("Сirсlе")).toEqual(false)
    expect(isSingleScript("𝖢𝗂𝗋𝖼𝗅𝖾")).toEqual(true)
    expect(isSingleScript("1")).toEqual(true)
    expect(isSingleScript("ねガ")).toEqual(true)
  });
});
