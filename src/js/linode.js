// var onBodyDefined = (function() {
// 	var documentLoadedResolve;

// 	function checkDocumentLoaded() {
// 		if (document.body) {
// 			documentLoadedResolve();
// 		} else {
// 			setTimeout(checkDocumentLoaded, 10);
// 		}
// 	}
// 	return new Promise(function(resolve) {
// 		documentLoadedResolve = resolve;
// 		checkDocumentLoaded();
// 	});
// })();
// onBodyDefined.then(function() {
// 	materialWeb.sideNav.add({
// 		"type": "temporary",
// 		"header": {
// 			"enable": true,
// 			"text": {
// 				"enable": true,
// 				"title": "name",
// 				"subtitle": "username"
// 			}
// 		},
// 		"navigation": {
// 			"enable": true,
// 			"items": [
// 				{
// 					"title": "Home",
// 					"icon": "&#xE88A;",
// 					"href": "/"
// 				}
// 			]
// 		}
// 	});
// 	materialWeb.sideNav.toggle();
// });