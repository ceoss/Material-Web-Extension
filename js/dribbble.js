(function() {
	"use strict";
	// Side Nav
	function sideNav() {
		materialWeb.sideNav.toggle();
	}
	function setSubtitle() {
		var subtitle;
		var id = document.body.id;
		var url = document.URL;

		// By Page Type
		if (id === "upld") {
			subtitle = "New Shot";
		} else if (id === "rates") {
			subtitle = "Advertise";
		} else if (id === "brand") {
			subtitle = "Branding";
		} else if (id === "incoming-activity") {
			subtitle = "Activity";
		} else if (id === "user-profile") {
			subtitle = "Your Profile";
		} else if (id === "blog-index") {
			subtitle = "Stories";
		} else if (id === "tags-index") {
			subtitle = "Tags";
		} else if (id === "tags-show") {
			subtitle = "Tag";
		} else if (id === "account-pro") {
			subtitle = "Pro";
		} else if (id === "meetups-faq") {
			subtitle = "Meetups FAQ";
		} else if (id === "profile-secondary") {
			subtitle = "Profile";
		} else if (id === "details") {
			subtitle = "Shot";
		} else {
			// Readable ID
			subtitle = id.replace(/[-_]+/g, " ").replace(/\w\S*/g, function(txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		}

		// By URL Override
		if (url === "https://dribbble.com/suggestions") {
			subtitle = "Suggestions";
		} else if (url === "https://dribbble.com/integrations") {
			subtitle = "Integrations";
		} else if (url === "https://dribbble.com/privacy") {
			subtitle = "Privacy";
		} else if (url === "https://dribbble.com/terms") {
			subtitle = "Terms";
		} else if (url === "https://dribbble.com/designers/overview") {
			subtitle = "Players Overview";
		} else if (url === "https://dribbble.com/meetups/new") {
			subtitle = "New Meetup";
		} else if (url === "https://dribbble.com/goods") {
			subtitle = "Shop";
		}
		return subtitle;
	}

	function initBody() {
		var header = document.getElementById("header");

		// FAB
		var fab = document.createElement("a");
		fab.classList.add("fab");
		fab.innerHTML = "<span class=\"waves-effect waves-light waves-circle\"></span><i class=\"material-icons\">&#xE145;</i>";
		fab.href = "https://dribbble.com/shots/new";
		document.body.appendChild(fab);

		// Hamburger
		var hamburger = document.createElement("span");
		hamburger.classList.add("hamburger");
		hamburger.innerHTML = "<i class=\"material-icons\">&#xE5D2;</i>";
		hamburger.addEventListener("click", sideNav, false);
		header.insertBefore(hamburger, document.getElementById("header-inner"));

		// Waves
		Waves.init({
			duration: 250
		});
		Waves.attach(".hamburger", ["waves-circle", "waves-light"]);
		Waves.attach(".full-tabs-links > li > a", ["waves-light"]);
		document.addEventListener("dragstart", function() {
			Waves.calm(".waves-effect");
		});

		// Subtitle
		var subtitle = document.createElement("span");
		subtitle.id = "subtitle";
		subtitle.textContent = setSubtitle();
		document.getElementById("header-inner").insertBefore(subtitle, document.getElementById("toggle-nav"));

		// Search
		var search = document.createElement("form");
		search.action = "https://dribbble.com/search";
		search.classList.add("search");
		search.innerHTML = "<i class=\"material-icons\">&#xE8B6;</i><input type=\"text\" name=\"q\" placeholder=\"Search\" value=\"\">"
		header.insertBefore(search, document.getElementById("header-inner"));
	}

	function initWrap() {
		// Side Nav
		var profile = document.getElementById("t-profile");
		var name = profile.children[0].children[1].textContent;
		var username = profile.children[0].href.replace(/https:\/\/dribbble\.com\//i, "");
		var profileImg = profile.children[0].children[0].src.replace(/\/mini\//i, "\/normal\/");
		materialWeb.sideNav.add(null, profileImg, name, username);

		// Waves
		Waves.attach(".infinite", ["waves-block", "waves-light"]);
		Waves.attach(".full-tabs-links > li > a", ["waves-light"]);
		// Waves Infinate
		var target = document.getElementsByClassName("dribbbles")[0];
		if (target) {
			var observer = new MutationObserver(function(mutations) {
				Waves.attach(".dribbble", ["waves-block"]);
			});
			var config = {
				childList: true
			};
			observer.observe(target, config);
			// observer.disconnect();
		}
	}

	function initBoth() {
		// Appbar Waterfall
		if (document.getElementsByClassName("hero")[0] || document.getElementsByClassName("full-tabs")[0]) {
			header.classList.remove("shadow");
			window.onscroll = function() {
				if (document.body.scrollTop === 0) {
					header.classList.remove("shadow");
				} else {
					header.classList.add("shadow");
				}
			};
		} else {
			header.classList.add("shadow");
		}

		// Grid Member Actions
		if (document.getElementsByClassName("grid")[0]) {
			var grid = document.getElementsByClassName("grid")[0];
			grid.innerHTML = "<i class=\"material-icons\">&#xE3EC;</i>";
		}
	}


	// Triggers
	var onBodyDefined = (function() {
		var documentLoadedResolve;

		function checkDocumentLoaded() {
			if (document.body) {
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
		initBody();
		initBoth();
	});

	var onWrapElementDefined = (function() {
		var wrapLoadedResolve;

		function checkWrapLoaded() {
			if (document.getElementById("wrap")) {
				wrapLoadedResolve();
			} else {
				setTimeout(checkWrapLoaded, 10);
			}
		}
		return new Promise(function(resolve) {
			wrapLoadedResolve = resolve;
			checkWrapLoaded();
		});
	})();
	onWrapElementDefined.then(function() {
		initWrap();
		initBoth();
	});
})();
