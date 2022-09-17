[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

<img style="border-radius: 5%" src="https://github.com/Xpos587/Canvas-markup/blob/master/logo.png?raw=true" alt></img>
<br>
<br>
<br>

Canvas-markup
=============
Canvas-markup - It lib is used to render html to image

#### **Example**
```javascript
// index.js:

const { Markup } = require('canvas-markup');

const markup = new Markup();

/* Rendering the file index.ejs and saving it as a png. */
markup.renderFile(`${__dirname}\\index.ejs`, { title: 'Markup', description: 'Made with Canvas-Markup©' });
/* Setting the viewport of the display to 1920x1080. */
markup.setViewport(1920, 1080);
markup.save();
```

<details>
    <summary>index.ejs</summary>
    <pre>
        <code>
            <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);"><span class="xml"><span class="hljs-meta" style="color: rgb(117, 113, 94);">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"ru"</span>&gt;</span>
<span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">head</span>&gt;</span>
    <span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"X-UA-Compatible"</span> <span class="hljs-attr">content</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"IE=edge"</span>&gt;</span>
    <span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"width=device-width, initial-scale=1.0"</span>&gt;</span>
    <span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"../reset.css"</span>&gt;</span>
    <span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"../style.css"</span>&gt;</span>
<span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">head</span>&gt;</span>
<span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">body</span>&gt;</span>
    <span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"title"</span>&gt;</span><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">%=</span></span></span><span class="ruby">title </span><span class="xml"><span class="hljs-tag" style="color: rgb(249, 38, 114);">%&gt;</span><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">span</span>&gt;</span>
    <span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"description"</span>&gt;</span><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">%=</span></span></span><span class="ruby">description </span><span class="xml"><span class="hljs-tag" style="color: rgb(249, 38, 114);">%&gt;</span><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">span</span>&gt;</span>
<span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">body</span>&gt;</span>
<span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">html</span>&gt;</span></span></pre>
        </code>
    </pre>
</details>

<details>
    <summary>reset.css</summary>
    <pre>
        <code>
            <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);">* {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">padding</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">border</span>: <span class="hljs-number">0</span>;
}

*,
*<span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:before</span>,
*<span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:after</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">-webkit-box-sizing</span>: border-box;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">box-sizing</span>: border-box;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">cursor</span>: default;
}

 <span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:focus</span>,
 <span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:active</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">outline</span>: none;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">a</span><span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:focus</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">a</span><span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:active</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">outline</span>: none;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">nav</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">footer</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">header</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">aside</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">display</span>: block;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">html</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">body</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">height</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-size</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">line-height</span>: <span class="hljs-number">1</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-size</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">-ms-text-size-adjust</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">-moz-text-size-adjust</span>: <span class="hljs-number">100%</span>;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">input</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">button</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">textarea</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-family</span>: inherit;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">background-color</span>: unset;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">input</span><span class="hljs-selector-attr" style="color: rgb(166, 226, 46);">[type=range]</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">-webkit-appearance</span>: none;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">appearance</span>: none;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">input</span><span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">::-ms-clear</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">display</span>: none;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">button</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">cursor</span>: pointer;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">button</span><span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">::-moz-focus-inner</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">padding</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">border</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">a</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">a</span><span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:visited</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">text-decoration</span>: none;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">color</span>: unset;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">a</span><span class="hljs-selector-pseudo" style="color: rgb(166, 226, 46);">:hover</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">text-decoration</span>: none;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">ul</span> <span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">li</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">list-style</span>: none;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">img</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">vertical-align</span>: top;
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">h1</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">h2</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">h3</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">h4</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">h5</span>,
<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">h6</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-size</span>: inherit;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-weight</span>: <span class="hljs-number">400</span>;
}

<span class="hljs-selector-class">.outline</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">outline</span>: <span class="hljs-number">1px</span> solid black;
}</pre>
        </code>
    </pre>
</details>

<details>
    <summary>style.css</summary>
    <pre>
        <code>
            <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);">@<span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">import</span> url(<span class="hljs-string" style="color: rgb(166, 226, 46);">'https://fonts.googleapis.com/css2?family=Nabla&amp;display=swap'</span>);

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">body</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-size</span>: <span class="hljs-number">280px</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-weight</span>: bold;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-family</span>: <span class="hljs-string" style="color: rgb(166, 226, 46);">'Nabla'</span>, cursive;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">display</span>: flex;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">align-items</span>: center;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">justify-content</span>: center;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">flex-direction</span>: column;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">background-image</span>: <span class="hljs-built_in" style="color: rgb(166, 226, 46);">linear-gradient</span>( 135deg, #FEC163 10%, #DE4313 100%);
}

<span class="hljs-selector-tag" style="color: rgb(249, 38, 114); font-weight: 700;">span</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">position</span>: absolute;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">padding</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">text-shadow</span>: <span class="hljs-number">#00000079</span> <span class="hljs-number">15px</span> <span class="hljs-number">10px</span>;
}

<span class="hljs-selector-class">.description</span> {
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">font-size</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">position</span>: absolute;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">left</span>: <span class="hljs-number">5%</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute" style="color: rgb(191, 121, 219);">padding</span>: <span class="hljs-number">10px</span>;
}</pre>
        </code>
    </pre>
</details>

<style>
    * {
        font-family: arial;
    }
</style>