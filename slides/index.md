- title : HTML & JavaScript Ecosystem
- description : A brief introduction into HTML5 and the JavaScript ecosystem
- author : Matthias Dittrich, Johannes Baeurle
- theme : league
- transition : default

***

## Javascript Ecosystem

<img style="border-style: none" border="0" src="images/AIT-Logo_small.jpg" />

### **Matthias Dittrich & Johannes Baeurle**, AIT GmbH <br /> [@matthi\_\_d](http://twitter.com/matthi__d) [@JoBaeurle](http://twitter.com/JoBaeurle) | [github matthid](https://github.com/matthid) [github JohBa](https://github.com/JohBa) | [aitgmbh.de](http://www.aitgmbh.de/)

***

### Roadmap

 - **HTML**
 - JavaScript

---

### Under the hood

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Beispiel</title>
  </head>
  <body>
    <h1>Beispiel</h1>
    <p>Das ist ein <a href="demo.html">einfaches</a> Beispiel.</p>
    <!-- dies ist ein Kommentar -->
  </body>
</html>
```

' xml
' elemente, attribute
' kein styling bis auf wenige ausnahmen

---

### Der DOM
<img src="images/html_dom.gif" alt="Der DOM" />

Document Object Model

' Browser analysiert HTML
' Erstellen DOM im Arbeitsspeicher
' DOM Zugriff über bspw. javascript

---

###Head
```html
<head>
  <title>HTML head Elements</title>
  <meta charset="utf-8">
  <meta name="Keywords" content="HTML,...">
  <meta name="Description" content="Well...">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="/w3css/4/w3.css">
  <script async="async" type="text/javascript" src="w3schools.min.js"></script>
</head>
```
The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.

HTML metadata is data about the HTML document. Metadata is not displayed.

---

###Body

The `<body>` tag defines the document's body.

The `<body>` element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.

---

```html
<input placeholder="foo" id="test" type="text">
<button type="button">Button</button>
```
<input placeholder="foo" id="test" type="text">
<button type="button">Button</button>

---

```html
<h1>Header</h1>
<h2>Subheader</h2>
```
<h1>Header</h1>
<h2>Subheader</h2>

---

```html
<a href="http://google.com">Hyperlink</a>
<img src="images/html_dom.gif" title="Der DOM" alt="Der DOM" />
```
<a href="http://google.com">Hyperlink</a>
<img src="images/html_dom.gif" alt="Der DOM" />

---

```html
<input type="date" name="bday">
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
<input type="date" name="bday">
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

---

```html
<div>Hier könnte Ihre Werbung stehen!</div>
```
The `<div>` tag defines a division or a section in an HTML document.

The `<div>` element is often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScript.

' styling mit divs
' html dokument voller divs
' kaum lesbar
' früher table hell, dann div hell
' html5 macht (fast) alles besser

---

```html
<div id="header">
  Header
  <div id="nav">Menu</div>
</div>
<div id="wrapper">
  <div id="content">
    Inhalt
  </div>
  <div id="sidebar">
    Sidebar
  </div>
</div>
<div id="footer">Footer</div>
```

---

### HTML5 Semantic Web!
`<header>` `<nav>` `<section>` `<article>` `<aside>` `<footer>`

---

```html
<header>
  Header
  <nav>Menu</nav>
</header>
<section>
  <article>
    Inhalt
  </article>
  <aside>
    Sidebar
  </aside>
</section>
<footer>Footer</footer>
```

---

### Styling?!
Cascading Style Sheets!

```css
body {
    background-color: lightblue;
}
h1 {
    color: white;
    text-align: center;
}
p {
    font-family: verdana;
    font-size: 20px;
}
```

' HTML nur Formattierung, wie dann Styling?
' CSS für styles, hintergrundfarbe, textfarbe, etc.!

---

### More?!
https://www.w3schools.com/html/default.asp
https://www.w3schools.com/css

---

### Demo!

---

***


### Roadmap

 - HTML
 - **JavaScript**

---

### Managing dependencies?

- Referencing other servers?
- Downloading and adding .js files by hand?
- Scale?

<img src="images/dependency_hell.jpg" style="background: white;" width=400 />

---

### NPM (node package manager)!

- Part of a nodejs installation
- **No longer required to manually download `*.js` files**
- `packages.json`, `node_modules`

<img src="images/nodejs_npm.png" style="background: white;" width=700 />

---

### Growing ecosystem?

- Lots of small javascript files
- Speed issues (loading lots of javascript files)

---

### Webpack!

"bundle" the javascript application into a single file an minimize download.

tree shaking

"build system"

<img src="images/what-is-webpack.png" style="background: white;" width=600 />

---

### Managing code bases?

- No compiler, no types
- no refactoring

-> Not possible to manage huge code bases

---

### TypeScript!

- Superset of JavaScript
- Typed, feels like working with C#
- Refactoring
- Transpiles to plain JavaScript in the version you choose (ES5 is compatible with most browsers)

<img src="images/typescript.png" style="background: white;" width=200 />

---

### Modern UI Development: React and redux.js

- Separate application state from drawing
- all parts of the application are testable
- not a lot of hidden "magic"
- prevent side-effects

<img src="images/react_redux.png" style="background: white;" width=700 />

' just look at the state

---

### Demo (simple-client):

- npm
- webpack
- typescript
- React & redux.js

***

### Thank you!

* Too many sources, see Sources.txt
* Johannes, Matthias
