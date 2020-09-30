Latin to cyrillic
========

Translation of Latin letters into Cyrillic

Example use
```html
<script src='src/javascripts/Latins_to_Cyrillic.js'></script>
<script src='src/javascripts/TranslitJS.js'></script>
```

```js
const latin = 'Ghbdtn'; // Привет
const xTranslitJS = new TranslitJS(latin);

console.log(xTranslitJS.latin_to_cyrillic()); // Our answer
```