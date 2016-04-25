$('.title').text( lang.title );
$('.text').text( lang.text );
$('.ui-btn.accept span').text( lang.button );

$('.ui-btn.accept').on('click',function(){

  var x = function(){
    console.log(this);
    this.location.href = "https://www.inevio.com/register"
  }
  x();

});
