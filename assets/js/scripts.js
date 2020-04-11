$(document).ready(function(){
    $('#greeting').modal('show');
    });
$('#greeting').fadeOut(2000,function() {
  $(this).modal('hide');
});
//$( "#greeting" ).click(function() {
  //$( "#greeting" ).fadeOut( "slow" );
//});
$(document).ready(function(){
    $('#day').on ("click", function(){
    $('body').removeClass("DayTime");
    $('#dark').removeClass("btn-dark");
    $('body').addClass("afterDark");
    $('#dark').addClass("btn-light");
    $('#dark').text("After Dark");
    $("body").attr('id', 'dark');
    $("button").attr('id', 'night');  
    });
});
 $('#night').on ("click", function(){
    $('body').removeClass("afterDark");
    $('#dark').removeClass("btn-light");
    $('body').addClass("DayTime");
    $('#dark').addClass("btn-dark");
    $('#dark').text("Day Time");
    $("body").attr('id', 'light');
    $("button").attr('id', 'day');  
    });