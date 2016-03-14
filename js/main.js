 $(document).ready(function() {

	// Transiciones CSS
	$('.scrolldown').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounce', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	
	$('.post').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInBox', // Class to add to the elements when they are visible
		offset: 100    
		}); 
		
	$('.post_bounce').viewportChecker({
		classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
		offset: 100    
		});  


	
	var int_rayo = setInterval(stop,4000);

	function stop(){
		$('.post_rayo').removeClass('animated');
		$('.post_rayo').removeClass('shake_rayo_1');
		$('.post_rayo_light').removeClass('animated');
		$('.post_rayo_light').removeClass('shake_rayo_2');
		var start_again = setTimeout(start,500);
		function start(){
			$('.post_rayo').addClass('visible');
			$('.post_rayo').addClass('animated');
			$('.post_rayo').addClass('shake_rayo_1');
			$('.post_rayo_light').addClass('animated');
			$('.post_rayo_light').addClass('shake_rayo_2');
		}

	}
	
	
	$('.estrella').viewportChecker({
		classToAdd: 'animated pulse', // Class to add to the elements when they are visible
		offset: 200  
		}); 
	
	$('.llama').viewportChecker({
		classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	
	$('.nave').viewportChecker({
		classToAdd: 'animated nave', // Class to add to the elements when they are visible
		offset: 100    
		}); 
		
	$('.nave-sombra').viewportChecker({
		classToAdd: 'animated nave_sombra', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	
	
	$('.yellow-bubbles .first').viewportChecker({
		classToAdd: 'animated yellow_first', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	$('.yellow-bubbles .second').viewportChecker({
		classToAdd: 'animated yellow_second', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	$('.yellow-bubbles .third').viewportChecker({
		classToAdd: 'animated yellow_third', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	
	
	$('.pink-bubbles .first').viewportChecker({
		classToAdd: 'animated pink_first', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	$('.pink-bubbles .second').viewportChecker({
		classToAdd: 'animated pink_second', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	$('.pink-bubbles .third').viewportChecker({
		classToAdd: 'animated pink_third', // Class to add to the elements when they are visible
		offset: 100    
		}); 


	
	$('.purple-bubbles .first').viewportChecker({
		classToAdd: 'animated purple_first', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	$('.purple-bubbles .second').viewportChecker({
		classToAdd: 'animated purple_second', // Class to add to the elements when they are visible
		offset: 100    
		}); 
	$('.purple-bubbles .third').viewportChecker({
		classToAdd: 'animated purple_third', // Class to add to the elements when they are visible
		offset: 100    
		}); 
		
		
		
	// Smooth Scrolling para el menú supeior
	$(function () {
		$('a[href*=#]:not([href=#])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	
	// Carrusel
	// $('.carrusel_who').slick({
	// infinite: true,
	// pauseOnHover:true,        
	// slidesToShow: 3,
	// slidesToScroll: 1
	// });
	
	
	// RATÓN INDICADOR DE SCROLL
	$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	// Do something
	if(scroll > 0){
		$('.scrolldown').hide();
	}
	else{
		$('.scrolldown').show();
	}
	});
	
	
	// QUITAR ANIMACIONES DESPUES DE IPAD
	if ( $(window).width()<768)
	{
		$('.scrollme').removeClass('scrollme');
	}
	
	// MEDIA QUERYS
	if ( $(window).width()<1250)
	{
		menos1250();
	}
	
	if ( $(window).width()<900)
	{
		menos900();
	}
	
	if ( $(window).width()<767)
	{
		$('.buho').attr('data-translatex',0);
		$('img.observatorio').attr('src','img/discover/observatorio_movil.png');
		$('.telescopio').css('display','none');
	}
	
	function menos1250(){
		$('.robot_sup_cont .animateme').attr('data-translatey',32);
		$('.robot_inf_cont .animateme').attr('data-translatex',-151);
	}
	
	function menos900(){
		$('.robot_sup_cont .animateme').attr('data-translatex',-178);
		$('.robot_inf_cont .animateme').attr('data-translatex',-176);
	}
	
	
	$( window ).resize(function() {
		
		// MEDIA QUERYS
		if ( $(window).width()<1250)
		{
			menos1250();
			$('.steps').load('.robot_sup_cont');
		}
		
		if ( $(window).width()<900)
		{
			menos900();
		}

		
		// QUITAR ANIMACIONES DESPUES DE IPAD
		if ( $(window).width()<767)
		{
			$('.scrollme').removeClass('scrollme');
			$('.buho').attr('data-translatex',0);
			$('img.observatorio').attr('src','img/discover/observatorio_movil.png');
			$('.telescopio').css('display','none');
		}
		else{
			$('.scrollme').addClass('scrollme');
			$('.buho').attr('data-translatex',0);
			$('img.observatorio').attr('src','img/discover/observatorio.png');
			$('.telescopio').css('display','block');
		}
	});

	//Block using cookies
  if (document.cookie.indexOf("DisplayDivasCookiesBanner") >= 0) {
  } else {
    $(document).ready(function() {
      $.DivasCookies({
        bannerText              : "This website uses cookies in order to improve your web experience.", // text for the Divas Cookies banner
        cookiePolicyLink        : "legal.html", // link to the extended cookie policy
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
        pageReload              : false, // if true reloads the actual page after opt-in to show the previuosly blocked scripts (default false)
        acceptOnScroll          : false, // if true sets the Divas Cookie technical cookie on page scroll for cookies agreement (default false)
        acceptOnClick           : false, // if true sets the Divas Cookie technical cookie on click on any <a> in the page except that on Divas Cookies banner for cookies agreement (default false)
        excludePolicyPage       : true // if true excludes the cookie policy page from acceptOnScroll and acceptOnClick (default false)
      });
    });
  }

});
