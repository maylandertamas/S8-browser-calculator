/* function main () {
  $('.keys').hide()
  $('.keys').fadeIn(1000)

} */
function main () {
var final = "";
var operator = "";
running = true
    if ($(".keys .numButton").data('clicked')) )
        $(".keys .numButton").on('click', function() {
        var value = $(this).text();
        $( ".screen" ).append(value);
        final += value;
        /*
        switch ($(".keys .operators").text()) {
          case "-":
            code block
            break;
          case "+":
            code block
            break;
          case "X":
            code block
            break;
          case "÷":
            code block
            break;
          default:
            alert("invalid");
} */ alert("Lol");
    } else if ($(".keys .operators").data('clicked')) ) {
        $( ".keys .operators" ).click(function() {
        $( ".screen" ).empty();});
        $(".screen").empty()
    });
}


/* tárolja a számokat stringként, aztán átváltani számmá akkor ha operatorra klikkel
   ezután másik számot is ugyanúgy majd ha az egyenlőségre kattint akkor kettőt osztani az operatortól függően
   amit szintén kimenteni egy varablebe */
 
}
$(document).ready(main);