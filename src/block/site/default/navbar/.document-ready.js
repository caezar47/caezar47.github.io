var url = window.location.pathname;
//var url = window.location.href;
$('.navbar__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.tabs__nav a[href="'+url+'"]').parent().addClass('is--active'); 

	
$('[data-azbn-toggle="dropdown"]').on('click', function(e) {
	$(".azbn-dropdown").toggleClass('open');
});
$(function(){
	
	$(document.body).on('click', '.navbar__collapse.is--open .navbar__nav-link.scrollto', {}, function(event){
		
		if(screenJS.isXS() || screenJS.isSM()) {
			event.preventDefault();
			
			$('.navbar-site .navbar__hamburger-btn').trigger('click');
			
		}
		
	});
	
})