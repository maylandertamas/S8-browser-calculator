function main () {

    var operationString = ""

  $(".keys .numButton").on('click', function() {
    var keyValue = $(this).text();
      $(".screen").append(keyValue);
      operationString += keyValue;
    });
  
  $(".keys .operator").one('click', function() {
      var operatorValue = $(this).text();
      $(".screen").append(operatorValue);
      operationString += operatorValue;
    });

      $(".keys .eval").on('click', function() {
          var replacedDivide = operationString.replace(/÷/g, "/");
          var replacedMultiply = replacedDivide.replace(/x/g, "*");
          var evaledString = eval(replacedMultiply);
          $(".screen").empty();
          $(".screen").append(evaledString);
          operationString = evaledString;
    });

      $(".top .clear").on('click', function() {
        $(".screen").empty();
        operationString = "";
      });

      $(".keys .decimal").on('click', function() {
        var decimalValue = $(this).text();
        $(".screen").append(decimalValue);
        operationString += decimalValue;
      });
 
}
$(document).ready(main);