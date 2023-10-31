function slideSwitch() {
    var $active = $('#slideshow img.active');
    if ( $active.length == 0 ) $active = $('#slideshow img:last');
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow img:first');
  
    var $sibs  = $active.siblings();
    var rndNum = Math.floor(Math.random() * $sibs.length );
    var $next  = $( $sibs[ rndNum ] );
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 2000, function() {
            $active.removeClass('active last-active');
        });
}
$(function() {
      setInterval( "slideSwitch()",5000 );
});
;(function()
{
       $(function () {
          $('#professional').typeahead({
              source:proList
          })
      });
})()  
;(function()
{
       $('.bd_nav').find('span').click(function(){
           $('.bd_nav').find('span').removeClass('active').eq($(this).index()).addClass('active');
           $('.container').find('.agileits').hide().eq($(this).index()).show()
       })
})() 
;(function()
{      
       $('.direction_close').click(function(){
           $('.zg_direction').hide();
           $('.zg_cover').hide();
       })
       $('.direction_know').click(function(){
           $('.zg_direction').hide();
           $('.zg_cover').hide();
       })
})() 



function assignment(nowindex){
   var htmls=' <option value="">工作区县</option>';
   $.each(ds_list[nowindex-1], function(idx, obj) {
        htmls+='<option value="'+obj+'">'+obj+'</option>' 
   });
   htmls+='<option value="不限">不限</option>' 
   $('#dixian').html(htmls)
	// if(nowindex==22){
	//    htmls =' <option value="不限" selected>不限</option>';
	//    $('#dixian').html(htmls)
	//    $('#dixian').val('不限')
	// }
	   if(nowindex==1){
		  htmls =' <option value="省属" selected>省属</option>';
		  $('#dixian').html(htmls)
		  $('#dixian').val('省属')
	   }
// 	if(nowindex==2){
// 	   htmls =' <option value="不限" selected>不限</option>'; 

// 	   $('#dixian').html(htmls)
// 	   $('#dixian').val('不限')
// }
}
$('#address').change(function(event) {
   var nowIndex=$(this).get(0).selectedIndex;
   assignment(nowIndex)
});
//$('.xjt').click(function(){
//	var tlii = $(".xjt").index(this);
//	$(".user-item").eq(tlii).find('select').click();
//})







