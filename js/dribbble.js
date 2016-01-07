(function() {
	"use strict";
	// Side Nav
	function sideNav() {
		function turnOffNavDimmer() {
			function removeNavDimmer() {
				var navDimmer = document.getElementById("nav-dimmer");
				navDimmer.removeEventListener("transitionend", removeNavDimmer, false);
				navDimmer.remove();
			}

			var navDimmer = document.getElementById("nav-dimmer");
			navDimmer.removeEventListener("click", turnOffNavDimmer, false);
			navDimmer.classList.remove("on");
			navDimmer.addEventListener("transitionend", removeNavDimmer, false);
			document.getElementById("sidenav").classList.remove("open");
		}

		document.getElementById("sidenav").classList.add("open");
		var navDimmer = document.createElement("div");
		navDimmer.id = "nav-dimmer";
		document.body.appendChild(navDimmer);
		navDimmer.classList.add("on");
		navDimmer.addEventListener("click", turnOffNavDimmer, false);
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

		// Load Material Icons
		var link = document.createElement("link");
		link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);

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
		var sidenav = document.createElement("div");
		sidenav.id = "sidenav";
		var profile = document.getElementById('t-profile');
		var name = profile.children[0].children[1].textContent;
		var username = profile.children[0].href.replace(/https:\/\/dribbble\.com\//i, "");
		var profileImg = profile.children[0].children[0].src.replace(/\/mini\//i, "\/normal\/");
		sidenav.innerHTML = "<div id=\"sidenav-header\"><img src=\"" + profileImg + "\" id=\"sidenav-profile-img\"></img><div id=\"sidenav-profile\"><span id=\"sidenav-name\">" + name + "</span><span id=\"sidenav-username\">" + username + "</span></div><i class=\"material-icons\">&#xE5C5;</i></div><div class=\"sidenav-item\"><a href=\"/\"><i class=\"material-icons\">&#xE88A;</i>Home</a></div><div class=\"sidenav-item\"><a href=\"/shots\"><i class=\"material-icons\">&#xE3B6;</i>Shots</a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/shots\">Popular</a><a href=\"/shots?sort=recent\">Recent</a><a href=\"/shots?list=teams\">Teams</a><a href=\"/shots?list=debuts\">Debuts</a><a href=\"/shots?list=playoffs\">Playoffs</a><a href=\"/shots?list=animated\">Animated GIFs</a></div></div><div class=\"sidenav-item\"><a href=\"/designers\"><i class=\"material-icons\">&#xE7FD;</i>Designers</a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/designers\">All</a><a href=\"/designers?for_hire=true\">For Hire</a><a href=\"/designers/overview\">Top Skills &amp; Locations</a><a href=\"/skills\">Skills</a><a href=\"/cities\">Cities</a><a href=\"/countries\">Countries</a><a href=\"/designers/prospects\">Prospects</a></div></div><div class=\"sidenav-item\"><a href=\"/teams\"><i class=\"material-icons\">&#xE7FB;</i>Teams</a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/teams\">All</a><a href=\"/teams?hiring=on\">Now Hiring</a><a href=\"/teams/info\">Create a Team</a></div></div><div class=\"sidenav-item\"><a href=\"/stories\"><i class=\"material-icons\">&#xE865;</i>Stories</a></div><div class=\"sidenav-item\"><a href=\"/meetups\"><i class=\"material-icons\">&#xE56A;</i>Meetups</a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/meetups\">Meetups</a><a href=\"/meetups/new\">Host a Meetup</a></div></div><div class=\"sidenav-item\"><a href=\"/goods\"><i class=\"material-icons\">&#xE8CC;</i>Shop</a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/goods\">Goods by Designers</a><a href=\"/deals\">Deals for Designers</a><a href=\"http://shop.dribbble.com/\">Dribbble Shop</a></div></div><div class=\"sidenav-item\"><a href=\"/jobs\"><i class=\"material-icons\">&#xE8F9;</i>Jobs</a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/jobs\">All</a><a href=\"/jobs?location=Anywhere\">Remote \/ Anywhere</a><a href=\"/jobs?teams_only=true\">@ Teams</a><a href=\"/jobs/info\">Post a Job</a></div></div><div class=\"sidenav-item\"><span><i class=\"material-icons\">&#xE5D3;</i>More</span><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/highlights\">Highlights</a><a href=\"/projects\">Projects</a><a href=\"/buckets\">Buckets</a><a href=\"/colors\">Colors</a><a href=\"/tags\">Tags</a><a href=\"/about\">About</a><a href=\"/integrations\">Integrations</a></div></div>";
		document.body.appendChild(sidenav);

		// Side Nav Sub Items
		var subItemTriggers = document.querySelectorAll(".sidenav-item > i.material-icons");
		for (var i = subItemTriggers.length - 1; i >= 0; i--) {
			subItemTriggers[i].addEventListener('click', function(event) {
				if (event.target.classList.contains("active")) {
					event.target.classList.remove("active");
					event.target.parentElement.children[2].classList.remove("active");
				} else {
					event.target.classList.add("active");
					event.target.parentElement.children[2].classList.add("active");
				}
			}, false);
		}

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
