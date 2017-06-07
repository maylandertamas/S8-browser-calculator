function main () {

    var operationString = ""
  $(".keys .numButton").on('click', function() {
    var keyValue = $(this).text();
      $(".screen").append(keyValue);
      operationString += keyValue;
    });
  $(".keys .operator").on('click', function() {
    if (operationString.length > 0) {
      alert(operationString.length);
    var operatorValue = $(this).text();
      $(".screen").append(operatorValue);
      operationString += operatorValue;
      }
    });
      $(".keys .eval").on('click', function() {
        if(operationString !== "" || operationString !== undefined) {
          var replacedDivide = operationString.replace(/÷/g, "/");
          var replacedMultiply = replacedDivide.replace(/x/g, "*");
          var evaledString = eval(replacedMultiply);
          $(".screen").empty();
          $(".screen").append(evaledString);
          operationString = evaledString;
        }
    });

      $(".top .clear").on('click', function() {
        $(".screen").empty();
        operationString = "";

    });
 
}
$(document).ready(main);