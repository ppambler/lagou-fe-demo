function OuterFunction() {
  var outerVariable = 1;

  function InnerFunction() {
    alert(outerVariable);
  }

  InnerFunction();
}

function OuterFunction() {
  var outerVariable = 100;

  function InnerFunction() {
    alert(outerVariable);
  }

  return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100
