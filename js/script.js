$('.about-slider').slick({
  dots:true,
  infinite:false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    prevArrow:false,
   nextArrow:false,
    autoplay:true,
    
});

$('.gallery-slider').slick({
  dots:false,
  infinite:false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
    prevArrow:false,
  nextArrow:false,
   
    
});



$('.feedback-slider').slick({
  dots:false,
  infinite:false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    
});

$('.price-slider').slick({
  dots:false,
  infinite:false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
   autoplay:true,
});











$(function() {  
    $(".event").niceScroll({
         cursorcolor: "#ffae1b",
       cursorwidth: "24px",
        cursorborder: "1px solid transparent",
        cursorborderradius: "50px",
        scrollspeed:6,
        mousescrollstep:1,
        background: "#000",
    });
});





var countDownDate = new Date("june1 , 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("bday").innerHTML = days 
document.getElementById("bhour").innerHTML = hours 
document.getElementById("bmin").innerHTML = minutes
document.getElementById("bsec").innerHTML = seconds 


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


 $('.venobox').venobox(); 






















