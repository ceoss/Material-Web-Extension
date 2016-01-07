var materialWeb = materialWeb || {};
materialWeb.sideNav = {
	"toggle": function toggle(ele) {
		ele = ele || document.getElementById("sidenav");
		function turnOffNavDimmer() {
			function removeNavDimmer() {
				sideNavDimmer.removeEventListener("transitionend", removeNavDimmer, false);
				sideNavDimmer.remove();
			}

			sideNavDimmer.removeEventListener("click", turnOffNavDimmer, false);
			sideNavDimmer.classList.remove("on");
			sideNavDimmer.addEventListener("transitionend", removeNavDimmer, false);
			ele.classList.remove("open");
		}

		ele.classList.add("open");
		var sideNavDimmer = document.createElement("div");
		sideNavDimmer.id = "materialWeb-sideNavDimmer";
		document.body.appendChild(sideNavDimmer);
		setTimeout(function() {sideNavDimmer.classList.add("on");}, 0);
		sideNavDimmer.addEventListener("click", turnOffNavDimmer, false);
	},
	"add": function add(navItems, profileImg, name, username) {
		var sidenav = document.createElement("div");
		sidenav.id = "sidenav";
		sidenav.innerHTML = "<div id=\"sidenav-header\"><img src=\"" + profileImg + "\" id=\"sidenav-profile-img\"></img><div id=\"sidenav-profile\"><span id=\"sidenav-name\">" + name + "</span><span id=\"sidenav-username\">" + username + "</span></div><i class=\"material-icons\">&#xE5C5;</i></div><div class=\"sidenav-item\"><a href=\"/\"><i class=\"material-icons\">&#xE88A;</i><span>Home</span></a></div><div class=\"sidenav-item\"><a href=\"/shots\"><i class=\"material-icons\">&#xE3B6;</i><span>Shots</span></a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/shots\">Popular</a><a href=\"/shots?sort=recent\">Recent</a><a href=\"/shots?list=teams\">Teams</a><a href=\"/shots?list=debuts\">Debuts</a><a href=\"/shots?list=playoffs\">Playoffs</a><a href=\"/shots?list=animated\">Animated GIFs</a></div></div><div class=\"sidenav-item\"><a href=\"/designers\"><i class=\"material-icons\">&#xE7FD;</i><span>Designers</span></a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/designers\">All</a><a href=\"/designers?for_hire=true\">For Hire</a><a href=\"/designers/overview\">Top Skills &amp; Locations</a><a href=\"/skills\">Skills</a><a href=\"/cities\">Cities</a><a href=\"/countries\">Countries</a><a href=\"/designers/prospects\">Prospects</a></div></div><div class=\"sidenav-item\"><a href=\"/teams\"><i class=\"material-icons\">&#xE7FB;</i><span>Teams</span></a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/teams\">All</a><a href=\"/teams?hiring=on\">Now Hiring</a><a href=\"/teams/info\">Create a Team</a></div></div><div class=\"sidenav-item\"><a href=\"/stories\"><i class=\"material-icons\">&#xE865;</i><span>Stories</span></a></div><div class=\"sidenav-item\"><a href=\"/meetups\"><i class=\"material-icons\">&#xE56A;</i><span>Meetups</span></a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/meetups\">Meetups</a><a href=\"/meetups/new\">Host a Meetup</a></div></div><div class=\"sidenav-item\"><a href=\"/goods\"><i class=\"material-icons\">&#xE8CC;</i><span>Shop</span></a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/goods\">Goods by Designers</a><a href=\"/deals\">Deals for Designers</a><a href=\"http://shop.dribbble.com/\">Dribbble Shop</a></div></div><div class=\"sidenav-item\"><a href=\"/jobs\"><i class=\"material-icons\">&#xE8F9;</i><span>Jobs</span></a><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/jobs\">All</a><a href=\"/jobs?location=Anywhere\">Remote \/ Anywhere</a><a href=\"/jobs?teams_only=true\">@ Teams</a><a href=\"/jobs/info\">Post a Job</a></div></div><div class=\"sidenav-item\"><span><i class=\"material-icons\">&#xE5D3;</i><span>More</span></span><i class=\"material-icons\">&#xE5CF;</i><div class=\"sidenav-item-sub\"><a href=\"/highlights\">Highlights</a><a href=\"/projects\">Projects</a><a href=\"/buckets\">Buckets</a><a href=\"/colors\">Colors</a><a href=\"/tags\">Tags</a><a href=\"/about\">About</a><a href=\"/integrations\">Integrations</a></div></div>";
		document.body.appendChild(sidenav);

		// Side Nav Sub Items
		var subItemTriggers = document.querySelectorAll(".sidenav-item > i.material-icons");
		for (var i = subItemTriggers.length - 1; i >= 0; i--) {
			subItemTriggers[i].addEventListener("click", function(event) {
				if (event.target.classList.contains("active")) {
					event.target.classList.remove("active");
					event.target.parentElement.children[2].classList.remove("active");
				} else {
					event.target.classList.add("active");
					event.target.parentElement.children[2].classList.add("active");
				}
			}, false);
		}
	}
}
