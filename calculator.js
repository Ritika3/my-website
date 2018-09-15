let history = "0";
let display = "0";

ritikaMutate('txtAns', "0");

function ritikaMutate(id, value) {
    document.getElementById(id).innerText = value;
}

function clear() {
  alert("invokek");
  history = "0";
  display = "0";
  ritikaMutate("txtAns", "0");
}

function digitPress(d) {
   display = display + d;
   ritikaMutate('txtAns', display);
}


