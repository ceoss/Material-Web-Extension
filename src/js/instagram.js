(function() {
	"use strict";
	function initSearchBar() {
		// Search
		var searchIcon = document.createElement("i");
		searchIcon.classList.add("material-icons");
		searchIcon.innerHTML = "&#xE8B6;";
		document.querySelector("._9pxkq._icv3j").appendChild(searchIcon);
	}

	// Triggers
	var onBodyDefined = (function() {
		var documentLoadedResolve;

		function checkDocumentLoaded() {
			if (document.querySelector("._9pxkq._icv3j")) {
				documentLoadedResolve();
			} else {
				setTimeout(checkDocumentLoaded, 10);
			}
		}
		return new Promise(function(resolve) {
			documentLoadedResolve = resolve;
			checkDocumentLoaded();
		});
	})();
	onBodyDefined.then(function() {
		initSearchBar();
	});
})();
