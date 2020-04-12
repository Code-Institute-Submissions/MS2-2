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
    $('#lightswitch').on ("click", function(){
          if 
          ($("body").hasClass("DayTime")){
          $('body').removeClass("DayTime").addClass("afterDark");
          $('#lightswitch').removeClass("btn-dark").addClass("btn-light");
          $('#lightswitch').text("After Dark");
          $("body").attr('id', 'dark');
          }
        else{
          $('body').removeClass("afterDark",).addClass("DayTime");
          $('#lightswitch').removeClass("btn-light").addClass("btn-dark");
          $('#lightswitch').text("Day Time");
          $("body").attr('id', 'light');
    }
    })});