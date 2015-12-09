
//page init
jQuery(function(){
	/*initDerechos();*/
	
	initSkrollr();
	initMagnificPopUp();
	initSlick();
	tabButton();
	imageSize();
	fitVid();
	infinite();
	initFilterYears();
	

	//initFilterCategories();
});

/* remove right click from images */
function initDerechos() {
	if(($("body").length > 0)){
		$("body").on("contextmenu",function(){  
	       return false;
	    }); 
	}
}



// init skrollr
function initSkrollr() {
	// var s = skrollr.init();
}

//ADD CLASSES FOR PORTRAIT OR LANDSCAPE IMAGES
function imageSize() {
	if(($(".slick-track").length > 0)){
		
		$('img').each(function() {
			var imgWidth = this.naturalWidth;
			var imgHeight = this.naturalHeight;
			console.log('' + imgWidth + '\u00A0x\u00A0' + imgHeight);

			if(imgWidth > imgHeight) {
				$(this).addClass('landscape');
			} else {
				$(this).addClass('portrait');
			}
		});

	}
}

//init initSlick
function initSlick() {
	
	
if(($(".slider").length > 0)){
		$(".slider").slick({
			slide:'.slide-item',
		    slidesToShow: 1,
			//slidesToScroll: 1,
			 //variableWidth: true,
			 arrows: false,
			 dots: true,
			 // centerMode: true,
			 //centerPadding: 10,
			 // slide: 'item',
			 //focusOnSelect: true,
			 autoplay: false,
			 //autoplaySpeed: 3000
			 //adaptiveHeight: true
			 //variableWidth: true,
			 //adaptiveHeight: true
			 infinite: false
		 //  slidesToShow: 3,
		 //  slidesToScroll: 1,
		 	  
		});
	}
	
	
}

function initFilterYears() {
	if(($(".filter-years").length > 0)){
		$('.filter-years ul li a').on('click', function(event){
	        event.preventDefault();
	        var vlink = $(this).attr('href');
	        $('.filter-years ul li a').removeClass('active');
	        $(this).addClass('active');
	        $("#search").load( vlink );
	    });
	}
}

function fitVid() {
	if(($(".load-video").length > 0)){
		$(".load-video").fitVids();
	}

	if(($(".expo-video").length > 0)){
		$(".expo-video").fitVids();
	}
}


function infinite() {
	if(($(".infinite").length > 0)){
		$('.infinite').infinitescroll({
		      //behavior: 'twitter', //#use manual trigger link, remove behaviour line to revert to automatic scroll
		      navSelector : ".actions", //#set to paging element wrapping next link
		      nextSelector : "a.next", //#set to next link selector
		      itemSelector : ".item-selector", //#set to selector for an item being listed
		      loading: {
		            finishedMsg: "", //#text you want to appear when you reach the end of the list
		            msgText: "", //#text to appear while loading more items
		            img: '/images/uploads/generales/ajax-loader.gif' //#image to display while loading
		      },
		      extractLink: true //#this line is vital for this to work in EE
		  }, 
		  function(newElements,data) { 
		     //#this callback function is called after each set of items are loaded in
		     //#it's used to hide the view more link when we are at the end
		     //#in EE template we put a class of end on the last item, so if we find that item, hide the trigger link

		     

		     if($('.infinite .end').length)
		     {$('a.next').remove();}
		});
	}
}

function tabButton() { 
	$(".tab-btn").click(function(){

		var a = $(this).attr('data-block');
		// alert(a);
		if(($(".slider-spaces").length > 0)){
			$('.slider-spaces').resize();
		}
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.data-content').find('.inner-tab').removeClass('show');
			$('.extract-expo').show();
		} else {
			$(".tab-btn").removeClass('active');
			$(this).addClass('active');
			$('.extract-expo').hide();
			$('.data-content').find('.inner-tab').removeClass('show');
			$('.data-content').find('.'+a).addClass('show');
		}

		// $('.tabs-container').find('.show').removeClass('show');
		// $(this).next().addClass("show");
		// $(this).next().children().toggleClass("show");

	});
}

function initMagnificPopUp() {
	$(".open-popup").magnificPopup({
	    type: "image",
	    closeBtnInside: true, /* No effect in comparison to not setting it when set to true */
	});
}

/*
function initFilterCategories() {
	if(($(".filter-years").length > 0)){
		$('.filter-years ul li a').on('click', function(event){
	        event.preventDefault();
	        var vlink = $(this).attr('href');
	        $('.filter-years ul li a').removeClass('active');
	        $(this).addClass('active');
	        $("#search").load( vlink );
	    });
	}
}
*/

$(".share-btn").click(function(e){
	e.preventDefault();
	$(this).parent().toggleClass("open");
});

$(".small-tab-btn").click(function(e){
	e.preventDefault();
	$(this).next()
	.toggleClass("open");
	$(this).next().children().toggleClass("open");
	//$(this).slideToggle("release");
});

$(".has-childs").on('click', function(e){
	e.preventDefault();
	$(this).parent().toggleClass("open");
});

$('.by-artist').on('click', function(e){
	e.preventDefault();
	$('.nav-artists').toggleClass("open");
});

$(".menu-btn").click(function(e){
	e.preventDefault();
	$(this).next().toggleClass("open");
});

var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
if (x <= 768) {
	$('.main-tab-item').on('click', function(e) {
		e.preventDefault();
		if ( $(this).children(".sub_tabs").hasClass("open") &&  $(this).children(".sub_tabs").length > 0) {
    		    $(".sub_tabs").removeClass('open');
		} else if ( $(this).children(".sub_tabs").length > 0 ) {
			$(".sub_tabs").removeClass('open');

		    $(this).children(".sub_tabs").addClass('open');
		} else {
		        window.location.href = $(this).children("a").attr('href');
		}
 	});
}

$('.sub_tabs li').on('click', function(e) {
  	e.preventDefault();
  	window.location.href = $(this).children().attr('href');
 });


