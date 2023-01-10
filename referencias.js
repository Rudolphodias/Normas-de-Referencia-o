$(document).ready(function (){

  $('.accordion-estilos').click(function() {
    $(this).parent().find('.accordion-parent').toggle(500);
    $(this).find("> .plus") .toggleClass("hide");
    $(this).find("> .minus") .toggleClass("show");  
});

  $('.accordion-parent .accordion-header').click(function() {
    $(this).parent().find('.accordion-body').toggle(500);
    $(this).parent().find("> .accordion-header > .plus") .toggleClass("hide");
    $(this).parent().find("> .accordion-header > .minus") .toggleClass("show");  
});

$(".accordion-child .accordion-child-header").click(function(){
 
  $(this).parent().find("> .accordion-child-body") .toggle(500);
  $(this).parent().find("> .accordion-child-header > .plus-child") .toggleClass("hide");
  $(this).parent().find("> .accordion-child-header > .minus-child") .toggleClass("show");
}); 

      
});