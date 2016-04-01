(function() {
	"use strict";
	// Side Nav
	function sideNav() {
		materialWeb.sideNav.toggle();
	}

	function titleCase(text) {
		return text.replace(/\w\S*/g, function(match) {return match.charAt(0).toUpperCase() + match.substr(1).toLowerCase();});
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
			subtitle = titleCase(id.replace(/[-_]+/g, " "));
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
		search.innerHTML = "<i class=\"material-icons\">&#xE8B6;</i><input type=\"text\" name=\"q\" placeholder=\"Search\">"
		header.insertBefore(search, document.getElementById("header-inner"));
		var searchInput = search.children[1];
		// searchInput onfocus and onchange add event listener for suggestions

		var searchRegex = /(https?:\/\/)?dribbble.com\/search\?q=(.+)/i;
		if (searchRegex.test(document.URL)) {
			var searchQuery = titleCase(decodeURIComponent(searchRegex.exec(document.URL)[2]).replace(/\+/g, " "));

			// Cookie
			var searchCookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)mw-searches\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			if (searchCookieValue.length > 0) {
				var searchedBefore =  searchCookieValue.split(", ").indexOf(searchQuery);
				if (searchedBefore === -1) {
					document.cookie = "mw-searches=" + searchCookieValue + ", " + searchQuery + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
				}
			} else {
				document.cookie = "mw-searches=" + searchQuery + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
			}

			// Show in Search Bar
			searchInput.value = searchQuery;
		}
	}

	function initWrap() {
		// Side Nav
		var profile = document.getElementById("t-profile");
		var name = profile.children[0].children[1].textContent;
		var username = profile.children[0].href.replace(/https:\/\/dribbble\.com\//i, "");
		var profileImg = profile.children[0].children[0].src.replace(/\/mini\//i, "\/normal\/");
		materialWeb.sideNav.add({
			"type": "temporary",
			"header": {
				"enable": true,
				"text": {
					"enable": true,
					"title": name,
					"subtitle": username
				}
			},
			"account": {
				"enable": true,
				"img": profileImg
			},
			"navigation": {
				"enable": true,
				"items": [
					{
						"title": "Home",
						"icon": "&#xE88A;",
						"href": "/"
					},
					{
						"title": "Shots",
						"icon": "&#xE3B6;",
						"href": "/shots",
						"sub": [
							{
								"title": "Popular",
								"href": "https://dribbble.com/shots"
							},
							{
								"title": "Recent",
								"href": "/shots?sort=recent"
							},
							{
								"title": "Teams",
								"href": "/shots?list=teams"
							},
							{
								"title": "Debuts",
								"href": "/shots?list=debuts"
							},
							{
								"title": "Playoffs",
								"href": "/shots?list=playoffs"
							},
							{
								"title": "Animated GIFs",
								"href": "/shots?list=animated"
							}
						]
					},
					{
						"title": "Designers",
						"icon": "&#xE7FD;",
						"href": "/designers",
						"sub": [
							{
								"title": "All",
								"href": "/designers"
							},
							{
								"title": "For Hire",
								"href": "/designers?for_hire=true"
							},
							{
								"title": "Top Skills &amp; Locations",
								"href": "/designers/overview"
							},
							{
								"title": "Skills",
								"href": "/skills"
							},
							{
								"title": "Cities",
								"href": "/cities"
							},
							{
								"title": "Countries",
								"href": "/countries"
							},
							{
								"title": "Prospects",
								"href": "/designers/prospects"
							}
						]
					},
					{
						"title": "Teams",
						"icon": "&#xE7FB;",
						"href": "/teams",
						"sub": [
							{
								"title": "All",
								"href": "/teams"
							},
							{
								"title": "Now Hiring",
								"href": "/teams?hiring=on"
							},
							{
								"title": "Create a Team",
								"href": "/teams/info"
							}
						]
					},
					{
						"title": "Stories",
						"icon": "&#xE865;",
						"href": "/stories",
					},
					{
						"title": "Meetups",
						"icon": "&#xE56A;",
						"href": "/meetups",
						"sub": [
							{
								"title": "Meetups",
								"href": "/meetups"
							},
							{
								"title": "Host a Meetup",
								"href": "/meetups/new"
							}
						]
					},
					{
						"title": "Shop",
						"icon": "&#xE8CC;",
						"href": "/goods",
						"sub": [
							{
								"title": "Goods by Designers",
								"href": "/goods"
							},
							{
								"title": "Deals for Designers",
								"href": "/deals"
							},
							{
								"title": "Dribbble Shop",
								"href": "http://shop.dribbble.com/"
							}
						]
					},
					{
						"title": "Jobs",
						"icon": "&#xE8F9;",
						"href": "/jobs",
						"sub": [
							{
								"title": "All",
								"href": "/jobs"
							},
							{
								"title": "Remote / Anywhere",
								"href": "/jobs?location=Anywhere"
							},
							{
								"title": "@ Teams",
								"href": "/jobs?teams_only=true"
							},
							{
								"title": "Post a Job",
								"href": "/jobs/info"
							}
						]
					},
					{
						"title": "More",
						"icon": "&#xE5D3;",
						"subOnly": true,
						"sub": [
							{
								"title": "Highlights",
								"href": "/highlights"
							},
							{
								"title": "Projects",
								"href": "/projects"
							},
							{
								"title": "Buckets",
								"href": "/buckets"
							},
							{
								"title": "Colors",
								"href": "/colors"
							},
							{
								"title": "Tags",
								"href": "/tags"
							},
							{
								"title": "About",
								"href": "/about"
							},
							{
								"title": "Integrations",
								"href": "/integrations"
							}
						]
					},
				]
			}
		});

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
		}
	}

	function initBoth() {
		// Appbar Waterfall
		if (document.getElementsByClassName("hero")[0] || document.getElementsByClassName("full-tabs")[0]) {
			header.classList.remove("shadow");
			window.onscroll = function() {
				if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
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
