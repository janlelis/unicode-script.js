# unicode-script.js [![[ci]](https://github.com/janlelis/unicode-script.js/workflows/Test/badge.svg)](https://github.com/janlelis/unicode-script.js/actions?query=workflow%3ATest)

Retrieve all [Unicode script(s)](https://en.wikipedia.org/wiki/Script_%28Unicode%29) used in a string.

Includes support for the _Script_Extension_ (scx) property which is defined as characters which are "commonly used with more than one script, but with a limited number of scripts".

Based on the _Script_Extension_, this library can also return the [augmented script set](https://www.unicode.org/reports/tr39/#def-augmented-script-set) to figure out if a string is **mixed-script** or **single-script**. Mixed scripts can be an indicator of suspicious user inputs.

Unicode version: **18.0.0** (September 2026)

## Install

Use npm or your favorite package manager to install this module:

```sh
npm install --save unicode-script
```

Or use the ESM module directly from the browser.

## Usage - Script

Each codepoint belongs to one script, which might be one of the three special scripts _Common_, _Inherited_, _Unknown_.

### `unicodeScript(char)` / `unicodeScriptCode(char)`

```js
// Single character

import { unicodeScript } from "unicode-script";
unicodeScript("ᴦ"); // "Greek"
```

### `unicodeScripts(string)` / `unicodeScriptCodes(string)`

```js
import { unicodeScripts, unicodeScriptCodes } from "unicode-script";

// Set of all scripts of a string
unicodeScripts("СC"); // Set(2) { 'Cyrillic', 'Latin' }
unicodeScripts("𐱐"); // Set(1) { 'Unknown' }

// Get all scripts of string in ISO 15924 four-letter codes
unicodeScriptCodes("СC"); // Set(2) { 'Cyrl', 'Latn' }
```

## Usage - Script Extensions

Each codepoint can belong to mutliple script extensions.

### `unicodeScriptExtensions(string)` / `unicodeScriptExtensionCodes(string)`

```js
import { unicodeScriptExtensions } from "unicode-script";
unicodeScriptExtensions("॥");
// Set(23) {
//   'Bengali',
//   'Devanagari',
//   'Dogra',
//   'Grantha',
//   'Gujarati',
//   'Gunjala_Gondi',
//   'Gurmukhi',
//   'Gurung_Khema',
//   'Kannada',
//   'Khudawadi',
//   'Limbu',
//   'Mahajani',
//   'Malayalam',
//   'Masaram_Gondi',
//   'Nandinagari',
//   'Ol_Onal',
//   'Oriya',
//   'Sinhala',
//   'Syloti_Nagri',
//   'Takri',
//   'Tamil',
//   'Telugu',
//   'Tirhuta'
// }
```

## Usage - Augmented Scripts

Like script extensions, but adds meta scripts for Asian languages and treats _Common_/_Inherited_ values as ALL scripts.

### `unicodeAugmentedScriptCodes(char)`

```js
import { unicodeAugmentedScriptCodes } from "unicode-script";

unicodeAugmentedScriptCodes("ねガ"); // Set(3) { 'Hira', 'Kana', 'Jpan' }
unicodeAugmentedScriptCodes("1"); // Set(175) { 'Adlm',  'Aghb', , 'Ahom', … }
```

## Usage - Resolved Script

Intersection of all augmented scripts per character.

### `unicodeResolvedScriptCodes(string)`

```js
import { unicodeResolvedScriptCodes } from "unicode-script";

unicodeResolvedScriptCodes("СігсӀе"); // Set(1) { 'Cyrl' }
unicodeResolvedScriptCodes("Сirсlе"); // Set(0) {}
unicodeResolvedScriptCodes("𝖢𝗂𝗋𝖼𝗅𝖾"); // Set(175) { 'Adlm',  'Aghb', , 'Ahom', … }
unicodeResolvedScriptCodes("1"); // Set(175) { 'Adlm',  'Aghb', , 'Ahom', … }
unicodeResolvedScriptCodes("ねガ"); // Set(3) { 'Hira', 'Kana', 'Jpan' }
```

Please note that the **resolved script** can contain multiple scripts, as per standard.

## Usage - Mixed-Script Detection

Mixed-script if resolved script set is empty, single-script otherwise.

### `isMixedScript(string)` / `isSingleScript(string)`

```js
import { isMixedScript, isSingleScript } from "unicode-script";

isMixedScript("СігсӀе"); // false
isMixedScript("Сirсlе"); // true
isMixedScript("𝖢𝗂𝗋𝖼𝗅𝖾"); // false
isMixedScript("1"); // false
isMixedScript("ねガ"); // false

isSingleScript("СігсӀе"); // true
isSingleScript("Сirсlе"); // false
isSingleScript("𝖢𝗂𝗋𝖼𝗅𝖾"); // true
isSingleScript("1"); // true
isSingleScript("ねガ"); // true
```

Please note that a **single-script** string might actually contain multiple scripts, as per standard (e.g. for Asian languages)

### List of All Scripts

Script names and short names can be retrieved like this:

```js
import { listUnicodeScripts } from "unicode-script";
listUnicodeScripts(); // Set(176) { 'Adlam', 'Ahom', 'Anatolian_Hieroglyphs', …

import { listUnicodeScriptCodes } from "unicode-script";
listUnicodeScriptCodes(); // Set(176) { 'Adlm', 'Aghb', 'Ahom', …

import { listUnicodeAugmentedScriptCodes } from "unicode-script";
listUnicodeAugmentedScriptCodes(); // Set(3) { 'Hanb', 'Jpan', 'Kore' }
```

You can find a list of all scripts in Unicode, with links to Wikipedia on [character.construction/scripts](https://character.construction/scripts)

### More Examples / JSDoc

See [SPECS](/test/unicode-script.test.js) and [DOCS](/docs/unicode-script.md).

## Unicode Standards

- [UAX24](https://www.unicode.org/reports/tr24/)
- [UTS39](https://www.unicode.org/reports/tr39/#Detection_Mechanisms) - Mixed-Script Detection

## Also See

- Get the Unicode blocks of a string: [unicode-block.js](https://github.com/janlelis/unicode-block.js)
- Get the name of a character: [unicode-name.js](https://github.com/janlelis/unicode-name.js)
- Index created with: [unicoder](https://github.com/janlelis/unicoder)
- Ruby implementation (same data & algorithms): [unicode-scripts gem](https://github.com/janlelis/unicode-scripts)

## MIT License

- Copyright (C) 2024-2026 Jan Lelis <https://janlelis.com>. Released under the MIT license.
- Unicode data: https://www.unicode.org/copyright.html#Exhibit1
