/*--------------------------------------------------------------------*/
/*-------------------------MENU HEADER MOBILE-------------------------*/
document.getElementById("bars").addEventListener("click", function(){
	openNav();
});
document.getElementById("remove").addEventListener("click", function(){
	closeNav();
});
function openNav(){
	document.getElementById("menu_header_mobile").style = "display: none" ;
	document.getElementById("menu_mobile").style = "display:block";
}
function closeNav(){
	document.getElementById("menu_header_mobile").style = "display: flex";
	document.getElementById("menu_mobile").style = "display:none";
}
/*--------------------------------------------------------------------*/
/*-------------------------SLIDE SHOW---------------------------------*/
var swiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});