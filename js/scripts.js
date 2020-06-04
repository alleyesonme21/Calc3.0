//Business Logic//

const add = function(number1, number2) {
  return number1 + number2;
  };
  
const subtract = function(number1, number2) {
  return number1 - number2;
    };
  
const multiply = function(number1, number2) {
  return number1 * number2;
    };

const divide = function(number1, number2) {
  return number1 / number2;
    };

const convertc2tb = function(number1) {
  return number1 * 16
    };

  //User Interface logic//
  
  $(document).ready(function() {
    $("form#calculator").submit(function() {
      event.preventDefault();
      const number1 = parseInt($("#input1").val());
      const number2 = parseInt($("#input2").val());
      const operator = $("input:radio[name=operator]:checked").val();
      const result = add(number1, number2);
      $("#output").text(result);
    });
  });