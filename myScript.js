function main () {

    var operationString = ""

  $(".keys .numButton").on('click', function() {
    var keyValue = $(this).text();
      $(".screen").append(keyValue);
      operationString += keyValue;
    });
  
  $(".keys .operator").on('click', function() {
    try {
      if (operationString.length === 0) {
        throw "Missing number"
      } else {
          var operatorValue = $(this).text();
          $(".screen").append(operatorValue);
          operationString += operatorValue;
      }
    }
    catch(err) {
          alert(err)
    }
  });

  $(".keys .eval").on('click', function() {
    try {
      var isNumWhole = /^\d+$/.test(operationString)
      var isNumEnd = /^\d+$/.test(operationString.slice(-1))
      if (isNumWhole === true) {
        throw "Missing operator"
      } else if(operationString === "" || operationString === undefined) {
        throw "Missing input"
      } else if (isNumEnd === false) {
        throw "Missing number"
      } else {
        var replacedDivide = operationString.replace(/÷/g, "/");
        var replacedMultiply = replacedDivide.replace(/x/g, "*");
        var evaledString = eval(replacedMultiply);
        $(".screen").empty();
        $(".screen").append(evaledString);
        operationString = evaledString.toString();
      }
    }
    catch(err) {
      alert(err)
      

    }
  });

  $(".top .clear").on('click', function() {
    $(".screen").empty();
    operationString = "";
  });

  $(".keys .decimal").on('click', function() {
      try {
        var isNumEnd = /^\d+$/.test(operationString.slice(-1))
        if (operationString.slice(-1) === ".") {
          throw "You can't use decimal notation after another";
        } else if (operationString.length === 0) {
          throw "Missing number";
        } else if (isNumEnd === false) {
          throw "Can't use decimal notation after an operator";
        } else {
          var decimalValue = $(this).text();
          $(".screen").append(decimalValue);
          operationString += decimalValue;
        }
      }
      catch(err) {
        alert(err)
      }
  });
 
}
$(document).ready(main);