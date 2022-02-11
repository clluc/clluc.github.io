$(".full img").on("click", function() {
  $(this).toggleClass("zoom");
});

//Block using cookies
if (document.cookie.indexOf("DisplayDivasCookiesBanner") >= 0) {
  installCookies();
} else {
  $(document).ready(function() {
    $.DivasCookies({
      bannerText              : "This website uses cookies in order to improve your web experience.", // text for the Divas Cookies banner
      cookiePolicyLink        : "https://clluc.com/legal.html", // link to the extended cookie policy
      cookiePolicyLinkText    : "More info", // text for the link to the extended cookie policy
      thirdPartyPolicyWidget  : "", // if set to "iubenda" tries to use the Iubenda widget
      acceptButtonText        : "OK", // text for the close button
      acceptButtonSrc         : "", // source for the close button image
      openEffect              : "slideDown", // opening effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
      openEffectDuration      : 600, // duration of the opening effect (msec)
      openEffectEasing        : "swing", // easing for the opening effect
      closeEffect             : "slideUp", // closing effect for Divas Cookies banner ["fade", "slideUp", "slideDown", "slideLeft", "slideRight"]
      closeEffectDuration     : 600, // duration of the closing effect (msec)
      closeEffectEasing       : "swing", // easing for the closing effect
      debugMode               : false, // if true, the options are checked and warnings are shown
      saveUserPreferences     : true, // if true, sets a cookie after the Divas Cookies is closed the first time and never shows it again
      cookieDuration          : 30, // number of days after which the Divas Cookie technical cookie will expire (default 365 days)
      blockScripts            : false, // set this to true if you blocked scripts by wrapping them with if($.DivasCookies.optedIn()){**script to be blocked**} (default false)
      pageReload              : true, // if true reloads the actual page after opt-in to show the previuosly blocked scripts (default false)
      acceptOnScroll          : false, // if true sets the Divas Cookie technical cookie on page scroll for cookies agreement (default false)
      acceptOnClick           : false, // if true sets the Divas Cookie technical cookie on click on any <a> in the page except that on Divas Cookies banner for cookies agreement (default false)
      excludePolicyPage       : true // if true excludes the cookie policy page from acceptOnScroll and acceptOnClick (default false)
    });
  });
}

function installCookies() {
  installTwitterCookies();
  installFacebookCookies();
  installGPlusCookies();
}

function installTwitterCookies() {!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');}

function installFacebookCookies() {
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=253595308025739";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

function installGPlusCookies() {
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
}

