# Igloo
Single Page Application (SPA) router for static site. [View demo](https://igloo-spa.netlify.app/).

# Install via CDN
```html
<script src="https://cdn.jsdelivr.net/gh/kevin-lem0n/Igloo/src/igloo.1.1.2.js"></script>
```

# Pretty URL
Only available in igloo.2.js and above version

When <code>prettyUrl</code> is set to true, the url will be:
<code>localhost:3000/#/page1</code> instead of <code>localhost:3000/#/page1</code>

```html
<script src="https://cdn.jsdelivr.net/gh/kevin-lem0n/Igloo/src/igloo.2.js"></script>
<script>
// Igloo router configuration
$Igloo({
    root: "#root" 
    folder: "views",
    default_path: "index",
    scope: ["index", "page1", "page2", "page3"],
    error: "error"
    prettyUrl: true;
})
</script>
```

# Manual setup template
1. In the root of your project directory, create an <code>index.html</code><br>
2. In the root of your project directory, in <code>index.html</code>, inside the head tag, <br>
add the script to include <code>igloo.1.1.js</code>
```html
<script src="igloo.1.1.js"></script>
```
3. In the root of your project directory, create a <code>views</code> folder<br>
4. Create these files inside the <code>views</code> folder:
- index.html <br>
- page1.html <br>
- page2.html <br>
- page3.html <br>
- error.html <br>
5. Copy the contents of each file form this repo <code>views</code> folder and paste them to your own code correspondingly.
6. In the root of your project directory, in <code>index.html</code>, inside the body tag, paste these codes:
```html
<br>
<a route="#index">Homepage</a>
<a route="#page1">Page 1</a>
<a route="#page2">Page 2</a>
<a route="#page3">Page 3</a>
    
<div id="root"></div>

<script>
// Igloo router configuration
$Igloo({
    root: "#root" // this is the id of the div to inject the content to
    folder: "views",
    default_path: "index",
    scope: ["index", "page1", "page2", "page3"],
    error: "error"
    prettyUrl: true;
})
</script>

<style>
#root{
    margin-top: 20px;
}
a{
    padding: 10px;
    margin-right: 5px;
    border: 1px solid darkgrey;
    text-decoration: none;
    color: black;
}
</style>
```
7. You are done with the sample template.