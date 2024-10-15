import { describe, it, expect } from "vitest";
import {
  unicodeScripts,
  unicodeScriptCodes,
  unicodeScript,
  unicodeScriptCode,
  unicodeScriptExtensions,
  unicodeScriptExtensionCodes,
  listUnicodeScripts,
  listUnicodeScriptCodes,
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
  it("will return a list of all script names", () => {
    expect(listUnicodeScriptCodes()).toContain("Egyp");
    expect(listUnicodeScriptCodes()).toContain("Zzzz");
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

describe("unicodeScriptExtensions(string)", () => {
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
