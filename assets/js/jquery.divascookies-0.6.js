/*!
 * Title: Divas Cookies jQuery plugin - jquery.divascookies-0.6.js
 * Author: Federica Sibella (@musingspuntoit) and Michela Chiucini (@webislove) - Coding Divas (@CodingDivas)
 * Author URI: http://www.musings.it - http://www.colazionedamichy.it - http://www.codingdivas.net/divascookies
 * Version: 0.6
 * Date: 2015.06.17
 * License: MIT (http://opensource.org/licenses/MIT)
 * 
 * Changelog:
 * 2015.06.17: removed acceptButtonSrc from debug option; no scroll + anchor click for privacy page; technical cookie name as an hidden option (for WP multisite in folder); check on window.scrollTop for compatibility
 * 2015.06.03: added accept on anchor click as an option (anchor on Divas Cookies banner is excluded)
 * 2015.06.01: added accept on scroll as an option and block iframes, img and input if necessary
 * 2015.05.29: added function to activate scripts previously blocked with divascookies-remove class
 * 2015.05.21: added function to control opt-in, added function to reload page, added duration of the Divas Cookies cookie as a parameter 
 * 2015.05.07: path control added to the set cookie function (whole domain)
 * 2014.10.02: minor changes to default options (no image and acceptButtontext)
 * 2014.09.15: minor debug + code check and optimization
 * 2014.09.12: added open effects, easing options, third party policy widget (iubenda only), debug mode and save user preferences option
 * 2014.09.11: initial development
 */

;(function($) {
	var divas_blockScripts = false,
		divas_cookieName = "DisplayDivasCookiesBanner";
	
	/**
	 * Divas Cookies starter function to set options 
	 * to be called outside document ready function
	 * and as early as possible if we want to use block scripts
	 * functionality (always before the scripts we want to block)
	 */
	$.DivasCookies = function(options) {
		var defaults = {
					bannerText				: "[Divas Cookies Demo] This website uses cookies.",		// text for the Divas Cookies banner
					cookiePolicyLink		: "",								// link to the extended cookie policy
					cookiePolicyLinkText	: "[Divas Cookies Demo] Read our cookie policy.",		// text for the link to the extended cookie policy
					thirdPartyPolicyWidget	: "",								// if set to "iubenda" tries to use the Iubenda widget
					acceptButtonText		: "[Divas Cookies Demo] Ok",		// text for the accept/close button
					acceptButtonSrc			: "",								// source for the accept/close button image
					declineButtonText		: "No cookies, please",				// text for the decline/close button (to be used in future releases)
					declineButtonSrc		: "",								// source for the decline/close button image (to be used in future releases)
					openEffect				: "",								// opening effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
					openEffectDuration		: 600,								// duration of the opening effect (msec)
					openEffectEasing		: "swing",							// easing for the opening effect
					closeEffect				: "",								// closing effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
					closeEffectDuration		: 600,								// duration of the closing effect (msec)
					closeEffectEasing		: "swing",							// easing for the closing effect
					debugMode				: false,							// if true, the options are checked and warnings are shown
					saveUserPreferences		: true,								// if true, sets a cookie after the Divas Cookies is closed the first time and never shows it again
					cookieDuration			: 365,								// sets the number of days after the Divas Cookies cookie will expire (default 365 days)
					blockScripts			: false,							// set this to true if you blocked scripts by wrapping them with if($.DivasCookies.optedIn()){**script to be blocked**} (default false)
					pageReload				: false,							// if true reloads the actual page after opt-in to show the previuosly blocked scripts (default false)
					acceptOnScroll			: false,							// if true sets the Divas Cookie technical cookie on page scroll for cookies agreement (default false)
					acceptOnClick			: false,							// if true sets the Divas Cookie technical cookie on click on any <a> in the page except that on Divas Cookies banner for cookies agreement (default false)
					cookieName				: "DisplayDivasCookiesBanner",		// name of the technical cookie set by Divas Cookies upon cookie acceptance (only for WP multisite in folder usage!)
					excludePolicyPage		: false								// if true excludes the cookie policy page from acceptOnScroll and acceptOnClick (default false)
				},
		settings = $.extend({}, defaults, options);
		
		// set global block scripts variable immediately
		divas_blockScripts = settings.blockScripts;
		
		// set global cookie name variable immediately
		divas_cookieName = settings.cookieName;
		
		// start Divas Cookies main function on document ready
		$(document).ready(function() {
			$.DivasCookiesCore(settings);
		});
	}; 
	
	/**
	 * check if Divas Cookie technical cookie has been set (user has opted in)
	 * or if we do not have to block scripts 
	 */
	$.DivasCookies.optedIn = function() {
		return document.cookie.match(new RegExp(divas_cookieName+'=([^;]+)')) || !divas_blockScripts;
	};
	
	/**
	 * Divas Cookies main function to create banner
	 */
    $.DivasCookiesCore = function(options) {
    	var defaults = {
					bannerText				: "[Divas Cookies Demo] This website uses cookies.",		// text for the Divas Cookies banner
					cookiePolicyLink		: "",								// link to the extended cookie policy
					cookiePolicyLinkText	: "[Divas Cookies Demo] Read our cookie policy.",		// text for the link to the extended cookie policy
					thirdPartyPolicyWidget	: "",								// if set to "iubenda" tries to use the Iubenda widget
					acceptButtonText		: "[Divas Cookies Demo] Ok",		// text for the accept/close button
					acceptButtonSrc			: "",								// source for the accept/close button image
					declineButtonText		: "No cookies, please",				// text for the decline/close button (to be used in future releases)
					declineButtonSrc		: "",								// source for the decline/close button image (to be used in future releases)
					openEffect				: "",								// opening effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
					openEffectDuration		: 600,								// duration of the opening effect (msec)
					openEffectEasing		: "swing",							// easing for the opening effect
					closeEffect				: "",								// closing effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
					closeEffectDuration		: 600,								// duration of the closing effect (msec)
					closeEffectEasing		: "swing",							// easing for the closing effect
					debugMode				: false,							// if true, the options are checked and warnings are shown
					saveUserPreferences		: true,								// if true, sets a cookie after the Divas Cookies is closed the first time and never shows it again
					cookieDuration			: 365,								// sets the number of days after the Divas Cookies cookie will expire (default 365 days)
					blockScripts			: false,							// set this to true if you blocked scripts by wrapping them with if($.DivasCookies.optedIn()){**script to be blocked**} (default false)
					pageReload				: false,							// if true reloads the actual page after technical cookie has been set (opted-in) (default false)
					acceptOnScroll			: false,							// if true sets the Divas Cookie technical cookie on page scroll for cookies agreement (default false)
					acceptOnClick			: false,							// if true sets the Divas Cookie technical cookie on click on any <a> in the page except that on Divas Cookies banner for cookies agreement (default false)
					cookieName				: "DisplayDivasCookiesBanner",		// name of the technical cookie set by Divas Cookies upon cookie acceptance (only for WP multisite in folder usage!)
					excludePolicyPage		: false								// if true excludes the cookie policy page from acceptOnScroll and acceptOnClick (default false)
				},
		settings = $.extend({}, defaults, options),
		// internal variables
		$divascookies		= $(),
		$bannerContainer	= $(),
		cookiePolicyLink	= "",
		$bannerText			= $(),
		$acceptButton		= $(),
		$acceptButtonContent	= $(),
		cookieName			= "DisplayDivasCookiesBanner",
		activatorClass		= "divascookies-remove",
		bufferingClass		= "divascookies-buffering",
		sandboxingClass		= "divascookies-sandboxing",
		divasCookiesActivationDone		= false,
		divasCookiesOutputBuffer		= "";
		
		// check the name of the technical cookie
		if(settings.cookieName !== "" && settings.cookieName !== "DisplayDivasCookiesBanner") {
			cookieName = settings.cookieName;
		}
		
		// create Divas Cookies container & data
		$divascookies = $("<div class='divascookies'></div>");
		$divascookies.data("divascookies", {
			cookieName : cookieName,
			activatorClass : activatorClass
		});
		
		// checking input values if debugMode is true
		if(settings.debugMode === true) {
			// bannerText check
			if(settings.bannerText === "")
				alert("Divas Cookies plugin warning!\nNo text for the banner: please check bannerText value");
			// cookiePolicyLink check
			if(settings.cookiePolicyLink === "")
				alert("Divas Cookies plugin warning!\nNo link to the extended cookie policy: please check cookiePolicyLink value");
			// cookiePolicyLinkText check
			if(settings.cookiePolicyLinkText === "")
				alert("Divas Cookies plugin warning!\nNo text for extended cookie policy link: please check cookiePolicyLinkText value");
			// acceptButtonText check
			if(settings.acceptButtonText === "")
				alert("Divas Cookies plugin warning!\nNo text for accept button: please check acceptButtonText value");
		}
		
		// create banner container
		$bannerContainer = $("<div class='divascookies-banner-container'></div>");
		// create extended policy link
		cookiePolicyLink = "<span class='divascookies-policy-link'><a href='" + settings.cookiePolicyLink + "' data-toggle='modal'>" + settings.cookiePolicyLinkText + "</a></span>";
		// iubenda?
		if(settings.thirdPartyPolicyWidget === "iubenda")
		{
			cookiePolicyLink = "<span class='divascookies-policy-link'><a href='" + settings.cookiePolicyLink + "' data-toggle='modal' class='btn btn-outline-light iubenda-white iubenda-embed'>" + settings.cookiePolicyLinkText + "</a></span>";
		}
		
		// create banner text
		$bannerText = $("<p class='divascookies-banner-text'>" + settings.bannerText + " " + cookiePolicyLink + "</p>");
		// create close button container
		$acceptButton = $("<div class='divascookies-accept-button-container'></div>");
		
		// if there is an image for the accept/close button use it
		if(settings.acceptButtonSrc !== "") {
			$acceptButtonContent = $("<img class='divascookies-accept-button-img' src='" + settings.acceptButtonSrc + "' alt='" + settings.acceptButtonText + "' title='" + settings.acceptButtonText + "' />");
		}
		else { // else use the text
			$acceptButtonContent = $("<p class='divascookies-accept-button-text'>" + settings.acceptButtonText + "</p>");	
		}
		
		// build Divas Cookies banner with all its elements
		$divascookies.append($bannerContainer);
		$bannerContainer.append($bannerText);
		$bannerContainer.append($acceptButton);
		$acceptButton.append($acceptButtonContent);
		
		// if we don't have to save cookies or the preference cookie has not been set yet: show the banner
		if(!settings.saveUserPreferences || !_checkCookie(cookieName)) {
			$("body").append($divascookies);
			
			// switching open effects
			switch(settings.openEffect) {
				case "fade":
					$divascookies.fadeIn(settings.openEffectDuration, settings.openEffectEasing);
					break;
				case "slideUp":
					$divascookies.css({"bottom": "-100%", "top": "auto"}).show(function() {
						$divascookies.animate({"bottom": 0}, settings.openEffectDuration, settings.openEffectEasing);
					});
					break;
				case "slideDown":
					$divascookies.css({"top": "-100%", "bottom": "auto"}).show(function() {
						$divascookies.animate({"top": 0}, settings.openEffectDuration, settings.openEffectEasing);
					});
					break;	
				case "slideLeft":
					$divascookies.css({"left": "-100%", "right": "auto"}).show(function() {
						$divascookies.animate({"left": 0}, settings.openEffectDuration, settings.openEffectEasing);
					});
					break;
				case "slideRight":
					$divascookies.css({"left": "100%", "right": "auto"}).show(function() {
						$divascookies.animate({"left": 0}, settings.openEffectDuration, settings.openEffectEasing);
					});
					break;
				default:
					$divascookies.show();
					break;	
			}
		}
		
		// if we don't want to block scripts or there is the cookie already -> activate the scripts!
		if(!settings.blockScripts || _checkCookie(cookieName)) {
			_divasActivator(activatorClass, bufferingClass, sandboxingClass);
		}
		
		// add click action to the accept/close button
		$acceptButton.on("click", function() {
			// things to do after cookies has been accepted
			_divasAccept();
		}); 
		
		// action to accept on page scroll
		if(settings.acceptOnScroll && !_checkCookie(cookieName)) {
			// check if we have to exclude the policy page and we are on the policy page
			if(document.location.href.indexOf(settings.cookiePolicyLink) !== -1  && settings.excludePolicyPage) {
				//console.log("exclude!");
			}
			else {
				// check original scrollbar position (not necessarily 0, if page was reloaded!)
				var positionY = $(window).scrollTop(),
					scrollDelta = 10;
				$(window).on("scroll.divascookies", function() {
					// check if the page has been scrolled at least 10px otherwise could be some responsive adjustment
					if($(window).scrollTop() - positionY >= scrollDelta) {
						// things to do after cookies has been accepted
						_divasAccept();
						// remove bind on document scroll
						$(window).off("scroll.divascookies");
					}
				});
			}
		}
		
		// action to accept on click on any anchor in the page (except that on Divas Cookies banner)
		if(settings.acceptOnClick && !_checkCookie(cookieName)) {
			// check if we have to exclude the policy page and we are on the policy page
			if(document.location.href.indexOf(settings.cookiePolicyLink) !== -1  && settings.excludePolicyPage) {
				//console.log("exclude!");
			}
			else {
				$(document).on("click.divascookies", "a", function() {
					if(!$(this).parent().hasClass("divascookies-policy-link")) {
						// things to do after cookies has been accepted
						_divasAccept();
						// remove bind on document click
						$(document).off("click.divascookies", "a");
					}
				});
			}
		}
		
		return $divascookies;
		
		/*----------------------------------------
		 * Divas Cookies service functions 
		 -----------------------------------------*/
		
		/**
		 * function to set a cookie after the accept/close
		 * button is clicked (not to show the banner again)
		 * expires in 1 year (from Google cookiechoices)
		 */
		function _setCookie(cookieName,cookieDuration) {
			var expiryDate = new Date();
			if(cookieDuration) {
				expiryDate.setTime(expiryDate.getTime()+(parseInt(cookieDuration)*24*60*60*1000));
			}
			else {
				// Set the cookie expiry to one year after today.
				expiryDate.setFullYear(expiryDate.getFullYear() + 1);
			}
	    	document.cookie = cookieName + '=yes; expires=' + expiryDate.toGMTString() + "; path=/";
	    }
		
		/**
		 * function that checks if the cookie has already been set
		 * by its name
		 */
	    function _checkCookie(cookieName) {
	      // check if the cookie has been set
	      return document.cookie.match(new RegExp(cookieName + '=([^;]+)'));
	    }
		
		/**
		 * function that deletes the cookies based on their names
		 * (if we want to add a function that resets cookies)
		 */
		function _deleteCookie(cookieName) {
			if(_checkCookie(cookieName)) {
				document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			}
		}
		
		/**
		 * function that reloads the page after the technical cookie has been set 
		 */
		function _divasReload() {
			document.location.reload();
		}
		
		/**
		 * Divas Cookie activator: rewrites scripts that were blocked using a specific class
		 * and changing text/javascript to text/plain to re-activate them
		 * works both for asyncronous scripts (src) and syncronous (instead of the .optedIn 
		 * function above). This is to be used if blockScripts is true, after accept button is clicked
		 */
		function _divasActivator(activatorClass, bufferingClass, sandboxingClass) {
			
			if(!divasCookiesActivationDone) {
				
				$("iframe." + activatorClass + ", img." + activatorClass + ", input." + activatorClass).each(function() {
					$(this).attr("src", $(this).attr("data-src"));
				});
				
				$("script." + activatorClass).each(function(index) {
					var src = $(this).attr("src");
					
					if($(this).hasClass(sandboxingClass)) {
						
						$(this).attr("id","dcSndbxdPlain" + index);
						
						var divascookiesScriptSandbox = document.createElement("iframe");
						
						divascookiesScriptSandbox.style.width = 0 + "px";
	   					divascookiesScriptSandbox.style.height = 0 + "px"; 
	   					divascookiesScriptSandbox.style.display = "none";
	   					divascookiesScriptSandbox.setAttribute("id", "dcSndbxd" + index);
	   					divascookiesScriptSandbox.setAttribute("data-jsid", "dcSndbxdJS" + index);
	   					divascookiesScriptSandbox.setAttribute("data-jsplain", "dcSndbxdPlain" + index);
	   					
	   					document.body.appendChild(divascookiesScriptSandbox);
	   						
	   					divascookiesScriptSandbox.contentWindow.document.open();
	   					if(src === undefined) {
							divascookiesScriptSandbox.contentWindow.document.write("<scr" + "ipt id=\"dcSndbxdJS\"" + index +" type=\"text/javascript\">" + $( this ).html() + "</scr" + "ipt>");
						}
						else {
							divascookiesScriptSandbox.contentWindow.document.write("<scr" + "ipt id=\"dcSndbxdJS\"" + index +" type=\"text/javascript\" src=\"" + src + "\"></scr" + "ipt>");
						}
						divascookiesScriptSandbox.contentWindow.document.close();
					
						divascookiesScriptSandbox.onload = function() {
							$("#" + $(this).attr('data-jsplain')).after(divascookiesScriptSandbox.contentWindow.document.body.innerHTML);
							$(this).remove();
						};
					}
					else if($(this).hasClass(bufferingClass)) {
							var code,
								prevCode,
								regex1,
								regex2,
								res1,
								res2;
						
							if(src === undefined) {
								code = $(this).html();
							
								prevCode = "";
								regex1 = /(document\.write(\(.+?\)))/mi;
								regex2 = /(document\.writeln(\(.+?\)))/mi;
									
								while(code != prevCode) {
									prevCode = code;
									res1 = code.match(regex1);
									res2 = code.match(regex2);
									code = code.replace(regex1, "divasCookiesOutputBuffer += $2");
									code = code.replace(regex2, "divasCookiesOutputBuffer += $2\n");
								}								
								
								divasCookiesOutputBuffer = "";
								$(this).after("<scr" + "ipt type=\"text/javascript\">" + code + "</scr" + "ipt>");
								$(this).next().after(divasCookiesOutputBuffer);
							}
							else {
								// ajax load and filtering or only iframe for loading filtering and adding?
								// if header Access-Control-Allow-Origin is set correctly than everything ok
								$.ajax({
						        	async: false,
						        	dataType: "text",
						        	cache: false,
						        	url: src,
						        	success: function(response) {
						            	code = response;
						            }
						        });
						        
						        prevCode = "";
								regex1 = /(document\.write(\(.+?\)))/mi;
								regex2 = /(document\.writeln(\(.+?\)))/mi;
									
								while(code != prevCode) {
									prevCode = code;
									res1 = code.match(regex1);
									res2 = code.match(regex2);
									code = code.replace(regex1, "divasCookiesOutputBuffer += $2");
									code = code.replace(regex2, "divasCookiesOutputBuffer += $2\n");
								}								
								
								divasCookiesOutputBuffer = "";
								$(this).after("<scr" + "ipt type=\"text/javascript\">" + code + "</scr" + "ipt>");
								$(this).next().after(divasCookiesOutputBuffer);
							}
					}
					else {
						if(src === undefined) {
							$(this).after("<scr" + "ipt type=\"text/javascript\">" + $( this ).html() + "</scr" + "ipt>");
						}
						else {
							$(this).after("<scr" + "ipt type=\"text/javascript\" src=\"" + src + "\"></scr" + "ipt>");
						}
					}
				});
				
				divasCookiesActivationDone = true;
			}
		}
		
		/**
		 * function that sets the Divas Cookies technical cookie if user preferences
		 * have to be saved; reloads the page if it is the case; activates scripts if it is 
		 * the case and closes the Divas Cookies banner
		 */
		function _divasAccept() {
			// set cookie to remember user preferences if we have to save them
			$().cookieManager.installCookies();
			if(settings.saveUserPreferences) {
				_setCookie(cookieName, settings.cookieDuration);
				// check if we have to reload the page independently from scripts blocking
				if(settings.pageReload)
					_divasReload();
			}
			
			// user clicked to accept cookies thus previously blocked scripts have to be loaded
			_divasActivator(activatorClass, bufferingClass, sandboxingClass);
			
			// switch close effects
			switch(settings.closeEffect) {
				case "fade":
					$divascookies.fadeOut(settings.closeEffectDuration, settings.closeEffectEasing);
					break;
				case "slideUp":
					$divascookies.animate({"top": "-100%"}, settings.closeEffectDuration, settings.closeEffectEasing, function() {
						$divascookies.hide();
					});
					break;
				case "slideDown":
					$divascookies.animate({"bottom": "-100%"}, settings.closeEffectDuration, settings.closeEffectEasing, function() {
						$divascookies.hide();
					});
					break;	
				case "slideLeft":
					$divascookies.animate({"left": "-100%"}, settings.closeEffectDuration, settings.closeEffectEasing, function() {
						$divascookies.hide();
					});
					break;
				case "slideRight":
					$divascookies.animate({"left": "100%"}, settings.closeEffectDuration, settings.closeEffectEasing, function() {
						$divascookies.hide();
					});		
					break;
				default:
					$divascookies.hide();
					break;	
			}
		}
    };
}(jQuery));