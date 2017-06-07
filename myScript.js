function main () {

    var operationString = ""

  $(".keys .numButton").on('click', function() {
    var keyValue = $(this).text();
      $(".screen").append(keyValue);
      operationString += keyValue;
    });
  
  $(".keys .operator").one('click', function() {
    if (operationString.length !== 0) {
      var operatorValue = $(this).text();
      $(".screen").append(operatorValue);
      operationString += operatorValue;
    }
    });

      $(".keys .eval").on('click', function() {
        try {
          var isnum = /^\d+$/.test(operationString)
          if (isnum === true) throw "Missing operator";
          if(operationString === "" || operationString === undefined) throw "Missing input";
        }
        catch(err) {
          alert(err)
        }
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
 
}
$(document).ready(main);