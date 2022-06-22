(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider({
      "indicators": false
    });
    $('.materialboxed').materialbox();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Set the date we're counting down to
var countDownDate = new Date("Jul 16, 2022 08:00:00").getTime();
    
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
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + " Hari " + hours + " Jam "
  + minutes + " Menit " + seconds + " Detik ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }, 1000);

  var url_string = window.location.href; // www.test.com?name=test
  var url = new URL(url_string);
  var paramValue = url.searchParams.get("name");
  if (paramValue == null) {
    document.getElementById("name").innerHTML = "Save our date";
  } else {
    // document.getElementById("name").innerHTML = "Hi " + paramValue + "<br> We invite you to celebrate our wedding";
    document.getElementById("name").innerHTML = "Hi " + paramValue + ", please save our date";
  }