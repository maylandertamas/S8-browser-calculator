/* function main () {
  $('.keys').hide()
  $('.keys').fadeIn(1000)

} */
function main () {
  var num1 = "";
  var num_array = [];
  var final = 0;
  var operator = "";
  alert(3-2);
  $(".keys .numButton").on('click', function() {
      var value = $(this).text();
      $( ".screen" ).append(value);
      num_array.push(parseFloat(value));
      value = ""
      });
      $(".keys .operator").on('click', function() {
      $( ".screen" ).empty();
      alert($(".keys .operators").text());
       switch ($(".keys .operators").text()) {
        case "-":
          num_array[3] = num_array[0] - num_array[1];
          alert(num_array);
          final += num_array[3]
          num_array.splice(0, 3);
          break;
        case "+":
          num_array[3] = num_array[0] + num_array[1];
          final += num_array[3]
          num_array.splice(0, 1);
          break;
        case "X":
          num_array[3] = num_array[0] * num_array[1];
          final += num_array[3]
          num_array.splice(0, 1);
          break;
        case "÷":
          num_array[3] = num_array[0] / num_array[1];
          final += num_array[3]
          num_array.splice(0, 1);
          break;
        }
      });
      $(".keys .eval").on('click', function() {
      $( ".screen" ).append(final)
      final = 0
           });
      $(".keys .clear").on('click', function() {
        $( ".screen" ).empty()
        });
      
  
  
  
          
          
          /*
          
  } */ 


/* tárolja a számokat stringként, aztán átváltani számmá akkor ha operatorra klikkel
   ezután másik számot is ugyanúgy majd ha az egyenlőségre kattint akkor kettőt osztani az operatortól függően
   amit szintén kimenteni egy varablebe */
 
}
$(document).ready(main);