function alertbox (errorMessage) {
    $(document).ready(function(){
      $(".error-box").removeAttr('style');
        $(".error-box").fadeIn(400);
          $( "#error-message" ).text(errorMessage);
          $(".error-box").animate({
            bottom: '555px',
            opacity: '1',
            height: '80px',
            width: '280px'
    });
    $(".error-box").delay(1200).fadeOut(1000);
    });
}

function main () {

    var operationString = ""

  $(".keys .numButton").on('click', function() {
    var keyValue = $(this).text();
      $(".screen").append(keyValue);
      operationString += keyValue;
    });
  
  $(".keys .operator").on('click', function() {
    try {
      var isNumEndOperator = /^\d+$/.test(operationString.slice(-1))
      if (operationString.length === 0) {
        throw "Missing number"
      } else if (isNumEndOperator === false) { 
        throw "Can't insert operators next to each other"
      } else {
          var operatorValue = $(this).text();
          $(".screen").append(operatorValue);
          operationString += operatorValue;
      }
    }
    catch(err) {
          alertbox(err);
    }
  });

  $(".keys .eval").on('click', function() {
    try {
      var isNumEndEval = /^\d+$/.test(operationString.slice(-1))
      var isNumWholeEval = /^\d+$/.test(operationString)
      if (isNumWholeEval === true) {
        throw "Missing operator"
      } else if(operationString === "" || operationString === undefined) {
        throw "Missing input"
      } else if (isNumEndEval === false) {
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
      alertbox(err)
    }
});

  $(".top .clear").on('click', function() {
    $(".screen").empty();
    operationString = "";
  });

  $(".keys .decimal").on('click', function() {
      try {
        var isNumEndDecimal = /^\d+$/.test(operationString.slice(-1))
        if (operationString.slice(-1) === ".") {
          throw "You can't use decimal notation after another";
        } else if (operationString.length === 0) {
          throw "Missing number";
        } else if (isNumEndDecimal === false) {
          throw "Can't use decimal notation after an operator";
        } else {
          var decimalValue = $(this).text();
          $(".screen").append(decimalValue);
          operationString += decimalValue;
        }
      }
      catch(err) {
        alertbox(err)
      }
  });
 
}
$(document).ready(main);