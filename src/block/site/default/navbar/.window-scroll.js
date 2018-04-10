var topPos = $(document).scrollTop();		
var snb = $('.navbar-site.scroll');	
var snbi = $('.navbar-site.index');
if(snbi.hasClass('abs')) {
	if(topPos > 600) {
		snbi.removeClass('abs');
	}
} else {
	if(topPos <= 600) {
		snbi.addClass('abs');
	}	
}
if(snb.hasClass('opacity')) {
	if(topPos <= 600) {
		snb.removeClass('opacity');
	}
} else {
	if(topPos > 600) {
		snb.addClass('opacity');
	}
}	
if(snb.hasClass('fixed')) {
	if(topPos <= 800) {
		snb.removeClass('fixed');
	}
} else {
	if(topPos > 800) {
		snb.addClass('fixed'); 
	}
} 
if(snb.hasClass('scroll-navbar')) {
	if(topPos <= 900) {
		snb.removeClass('scroll-navbar');
	} 
} else {
	if(topPos > 900) {
		snb.addClass('scroll-navbar');
	} 
}