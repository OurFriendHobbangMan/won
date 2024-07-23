$(".sub").hide();

$(".gnb>li>a, .sub").hover(function(){

  $(this).parents().children(".sub").stop().slideToggle();
});
