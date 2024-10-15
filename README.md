# unicode-script.js [![[ci]](https://github.com/janlelis/unicode-script.js/workflows/Test/badge.svg)](https://github.com/janlelis/unicode-script.js/actions?query=workflow%3ATest)

Retrieve all [Unicode script(s)](https://en.wikipedia.org/wiki/Script_%28Unicode%29) used in a string.

Can also return the *Script_Extension* property which is defined as characters which are "commonly used with more than one script, but with a limited number of scripts".

Unicode version: **16.0.0** (September 2024)

## Install

Use npm or your favorite package manager to install this module:

```sh
npm install unicode-script
```

Or use ESM module directly from the browser.

## Usage - Script

### `unicodeScript(char)` / `unicodeScriptCode(char)`

```js
// Single character

import { unicodeScript } from "unicode-script";
unicodeScript("ᴦ") // "Greek"
```

### `unicodeScripts(string)` / `unicodeScriptCodes(string)`

```js
import { unicodeScripts, unicodeScriptCodes } from "unicode-script";

// Set of all scripts of a string
unicodeScripts("СC") // Set(2) { 'Cyrillic', 'Latin' }
unicodeScripts("𐱐") // Set(1) { 'Unknown' }

// Get all scripts of string in ISO 15924 four-letter codes
unicodeScriptCodes("СC") // Set(2) { 'Cyrl', 'Latn' }
```

## Usage - Script Extensions

### `unicodeScriptExtensions(string)` / `unicodeScriptExtensionCodes(string)`

```js
import { unicodeScriptExtensions } from "unicode-script";
unicodeScriptExtensions("॥")
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

### More Examples / JSDoc

See [SPECS](/test/unicode-script.test.js) and [DOCS](/docs/unicode-script.md).

### List of All Scripts

Script names and short names can be retrieved like this:

```js
import { listUnicodeScripts } from "unicode-script"
listUnicodeScripts() // Set(172) { 'Adlam', 'Ahom', 'Anatolian_Hieroglyphs', …

import { listUnicodeScriptCodes } from "unicode-script"
listUnicodeScriptCodes() // Set(172) { 'Adlm', 'Aghb', 'Ahom', …
```

You can find a list of all scripts in Unicode, with links to Wikipedia on [character.construction/scripts](https://character.construction/scripts)

## Also See

- Get the Unicode blocks of a string: [unicode-block.js](https://github.com/janlelis/unicode-block.js)
- Get the name of a character: [unicode-name.js](https://github.com/janlelis/unicode-name.js)
- Index created with: [unicoder](https://github.com/janlelis/unicoder)

## MIT License

- Copyright (C) 2024 Jan Lelis <https://janlelis.com>. Released under the MIT license.
- Unicode data: https://www.unicode.org/copyright.html#Exhibit1
