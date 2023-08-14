# Igloo
Single Page Application (SPA) router for static site.

# Install via CDN
```html
```

# Setup
1. In the root of your project directory, create an <code>index.html</code><br>
2. In the root of your project directory, in <code>index.html</code>, inside the head tag, <br>
add the script to include <code>igloo.js</code>
```html
<script src="igloo.js"></script>
```
3. In the root of your project directory, create a <code>views</code> folder<br>
4. Create these files inside the <code>views</code> folder:
- index.html <br>
- page1.html <br>
- page2.html <br>
- page3.html <br>
- error.html <br>
5. In the root of your project directory, in <code>index.html</code>, inside the body tag, paste these codes:
```html
<div id="_igloo"></div>

<script>
// Igloo router configuration
$Igloo({
    folder: "views", // specifies the folder that stores all the pages
    default_path: "index", // default page, / slash route
    scope: ["index", "page1", "page2", "page3"], // pages constraints
    error: "error" // if page visited is outside above scope, render this page
 })
</script>
```