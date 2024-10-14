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
<dt><a href="#listUnicodeScripts">listUnicodeScripts()</a> ⇒ <code>Set</code></dt>
<dd><p>Lists all known Unicode scripts</p>
</dd>
<dt><a href="#listUnicodeScriptCodes">listUnicodeScriptCodes()</a> ⇒ <code>Set</code></dt>
<dd><p>Lists all known Unicode scripts (ISO 15924)</p>
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
