# Using Files From The Chrome Extension

## CSS
This snippet can be used in background, background-image, and cursor (couldn't find evidence that it worked with @import, even with web_accessible_resources on).

- `url("` - How to get an image by URI in CSS
- `chrome-extension://__MSG_@@extension_id__` - Add the protocol and extension id.
- `/img/image.png` - Your image, with the extension root as the root directory.
- `")` End of url() function.

```css
#selector {
	background: url("chrome-extension://__MSG_@@extension_id__/img/sideNav.png") 50% 50%/cover;
}
```

## JavaScript
This snippet can be used in setting markup, styles, materialWeb functions, and pretty much any local interactions.

- `chrome.extension.getURL` - Add the protocol and extension id.
- `/img/sideNav.png` - Your image, with the extension root as the root directory.

```js
var img = chrome.extension.getURL("/img/sideNav.png");
```

## Manifest
This snippet can be used in adding stylesheets and scripts. This should be done for each site to include you code, the materialWeb functions, and other scripts we add. You can find more information on adding content scripts to the manifest [on the Chrome Developer page](https://developer.chrome.com/extensions/content_scripts).

- `"matches": ["http://example.com/*"]` - Which pages the script shall be added to.
- `"css" : ["/css/component/sidenav.css", "/css/font/roboto.css", "/css/library/waves.min.css", "/css/example.css"]` - Array of comma separated stylesheets.
- `"js" : ["/js/library/waves.min.js", "/js/component/sidenav.js", "/js/component/material-icons.js", "/js/dribbble.js"]` - Array of comma separated scripts.
- `"run_at": "document_start"` - When the scripts will be injected to the DOM.

```json
"content_scripts": [
	{
		"matches": ["http://example.com/*"],
		"css" : ["/css/component/sidenav.css", "/css/font/roboto.css", "/css/library/waves.min.css", "/css/example.css"],
		"js" : ["/js/library/waves.min.js", "/js/component/sidenav.js", "/js/component/material-icons.js", "/js/dribbble.js"],
		"run_at": "document_start"
	}
]
```

## Note About Which Rescources Can Be Used
Any files listed in `manifest.json` > web_accessible_resources will be avaiable on the web. As of 1/10/2016, the only directory (and it's subdirectories and files) is `/img/`. (This isn't required to load content scripts)

```json
"web_accessible_resources": [
	"/img/*"
]
```