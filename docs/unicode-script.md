## Functions

<dl>
<dt><a href="#unicodeScript">unicodeScript(char)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Returns the Unicode script name of a single character</p>
</dd>
<dt><a href="#unicodeScriptCode">unicodeScriptCode(char)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Returns the Unicode script alias (ISO 15924) of a single character</p>
</dd>
<dt><a href="#unicodeScripts">unicodeScripts(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all scripts used in the string</p>
</dd>
<dt><a href="#unicodeScriptCodes">unicodeScriptCodes(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all scripts used in the string (ISO 15924)</p>
</dd>
<dt><a href="#unicodeScriptExtensions">unicodeScriptExtensions(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all scripts extensions used in the string
See <a href="https://www.unicode.org/reports/tr24/#Script_Extensions">https://www.unicode.org/reports/tr24/#Script_Extensions</a></p>
</dd>
<dt><a href="#unicodeScriptExtensionCodes">unicodeScriptExtensionCodes(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all scripts extensions used in the string (ISO 15924)
See <a href="https://www.unicode.org/reports/tr24/#Script_Extensions">https://www.unicode.org/reports/tr24/#Script_Extensions</a></p>
</dd>
<dt><a href="#unicodeAugmentedScriptCodes">unicodeAugmentedScriptCodes(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the augmented script set as described in
<a href="https://www.unicode.org/reports/tr39/#def-augmented-script-set">https://www.unicode.org/reports/tr39/#def-augmented-script-set</a></p>
</dd>
<dt><a href="#unicodeResolvedScriptCodes">unicodeResolvedScriptCodes(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns the resolved script set as described in
<a href="https://www.unicode.org/reports/tr39/#def-resolved-script-set">https://www.unicode.org/reports/tr39/#def-resolved-script-set</a></p>
</dd>
<dt><a href="#isMixedScript">isMixedScript(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns the mixed-script status of a string as per
<a href="https://www.unicode.org/reports/tr39/#def-mixed-script">https://www.unicode.org/reports/tr39/#def-mixed-script</a></p>
</dd>
<dt><a href="#isSingleScript">isSingleScript(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns the single-script status of a string as per
<a href="https://www.unicode.org/reports/tr39/#def-single-script">https://www.unicode.org/reports/tr39/#def-single-script</a></p>
</dd>
<dt><a href="#listUnicodeScripts">listUnicodeScripts()</a> ⇒ <code>Set</code></dt>
<dd><p>Lists all known Unicode scripts</p>
</dd>
<dt><a href="#listUnicodeScriptCodes">listUnicodeScriptCodes()</a> ⇒ <code>Set</code></dt>
<dd><p>Lists all known Unicode scripts (ISO 15924)</p>
</dd>
<dt><a href="#listUnicodeAugmentedScriptCodes">listUnicodeAugmentedScriptCodes()</a> ⇒ <code>Set</code></dt>
<dd><p>Lists augmented scripts (ISO 15924)</p>
</dd>
</dl>

<a name="unicodeScript"></a>

## unicodeScript(char) ⇒ <code>string</code> \| <code>undefined</code>
Returns the Unicode script name of a single character

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - Script name  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>string</code> \| <code>number</code> | Single character string or codepoint |

<a name="unicodeScriptCode"></a>

## unicodeScriptCode(char) ⇒ <code>string</code> \| <code>undefined</code>
Returns the Unicode script alias (ISO 15924) of a single character

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - Script name (ISO 15924)  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>string</code> \| <code>number</code> | Single character string or codepoint |

<a name="unicodeScripts"></a>

## unicodeScripts(string) ⇒ <code>Set</code>
Returns a Set of all scripts used in the string

**Kind**: global function  
**Returns**: <code>Set</code> - Set of script names  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="unicodeScriptCodes"></a>

## unicodeScriptCodes(string) ⇒ <code>Set</code>
Returns a Set of all scripts used in the string (ISO 15924)

**Kind**: global function  
**Returns**: <code>Set</code> - Set of script names (ISO 15924)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="unicodeScriptExtensions"></a>

## unicodeScriptExtensions(string) ⇒ <code>Set</code>
Returns a Set of all scripts extensions used in the string
See https://www.unicode.org/reports/tr24/#Script_Extensions

**Kind**: global function  
**Returns**: <code>Set</code> - Set of script extensions  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="unicodeScriptExtensionCodes"></a>

## unicodeScriptExtensionCodes(string) ⇒ <code>Set</code>
Returns a Set of all scripts extensions used in the string (ISO 15924)
See https://www.unicode.org/reports/tr24/#Script_Extensions

**Kind**: global function  
**Returns**: <code>Set</code> - Set of script extensions (ISO 15924)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="unicodeAugmentedScriptCodes"></a>

## unicodeAugmentedScriptCodes(string) ⇒ <code>Set</code>
Returns the augmented script set as described in
https://www.unicode.org/reports/tr39/#def-augmented-script-set

**Kind**: global function  
**Returns**: <code>Set</code> - Set of script extensions + augmented scripts (ISO 15924)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string (single char) |

<a name="unicodeResolvedScriptCodes"></a>

## unicodeResolvedScriptCodes(string) ⇒ <code>Set</code>
Returns the resolved script set as described in
https://www.unicode.org/reports/tr39/#def-resolved-script-set

**Kind**: global function  
**Returns**: <code>Set</code> - Set of resolved scripts (ISO 15924)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="isMixedScript"></a>

## isMixedScript(string) ⇒ <code>boolean</code>
Returns the mixed-script status of a string as per
https://www.unicode.org/reports/tr39/#def-mixed-script

**Kind**: global function  
**Returns**: <code>boolean</code> - true if mixed-script, false if single-script  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="isSingleScript"></a>

## isSingleScript(string) ⇒ <code>boolean</code>
Returns the single-script status of a string as per
https://www.unicode.org/reports/tr39/#def-single-script

**Kind**: global function  
**Returns**: <code>boolean</code> - false if mixed-script, true if single-script  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="listUnicodeScripts"></a>

## listUnicodeScripts() ⇒ <code>Set</code>
Lists all known Unicode scripts

**Kind**: global function  
**Returns**: <code>Set</code> - All script names  
<a name="listUnicodeScriptCodes"></a>

## listUnicodeScriptCodes() ⇒ <code>Set</code>
Lists all known Unicode scripts (ISO 15924)

**Kind**: global function  
**Returns**: <code>Set</code> - All script names (ISO 15924)  
<a name="listUnicodeAugmentedScriptCodes"></a>

## listUnicodeAugmentedScriptCodes() ⇒ <code>Set</code>
Lists augmented scripts (ISO 15924)

**Kind**: global function  
**Returns**: <code>Set</code> - Augmented scripts as described in UAX24  
