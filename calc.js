function insert(num) {
  document.getElementById("textview").innerHTML += num;
}

function equal() {
  const view = document.getElementById("textview").innerHTML;

  // document.getElementById('textview').innerHTML = eval(view);

  if (view.includes("+")) {
    const operatorPosition = view.indexOf("+");
    document.getElementById("textview").innerHTML =
      parseInt(view.slice(0, operatorPosition)) +
      parseInt(view.slice(operatorPosition + 1, view.length));
  } else if (view.includes("-")) {
    const operatorPosition = view.indexOf("-");
    document.getElementById("textview").innerHTML =
      parseInt(view.slice(0, operatorPosition)) -
      parseInt(view.slice(operatorPosition + 1, view.length));
  } else if (view.includes("*")) {
    const operatorPosition = view.indexOf("*");
    document.getElementById("textview").innerHTML =
      parseInt(view.slice(0, operatorPosition)) *
      parseInt(view.slice(operatorPosition + 1, view.length));
  } else if (view.includes("/")) {
    const operatorPosition = view.indexOf("/");
    document.getElementById("textview").innerHTML =
      parseInt(view.slice(0, operatorPosition)) /
      parseInt(view.slice(operatorPosition + 1, view.length));
  } else if (view.includes("^")) {
    const operatorPosition = view.indexOf("^");
    document.getElementById("textview").innerHTML =
      parseInt(view.slice(0, operatorPosition)) **
      parseInt(view.slice(operatorPosition + 1, view.length));
  } else if (view.includes("√")) {
    const number = view.replace("√", "");
    document.getElementById("textview").innerHTML = Math.sqrt(parseInt(number));
  } else if (view.includes("E")) {
    const operatorPosition = view.indexOf("E");
    document.getElementById("textview").innerHTML =
      parseInt(view.slice(0, operatorPosition)) *
      Math.pow(10, parseInt(view.slice(operatorPosition + 1, view.length)));
  }
}

function clean() {
  document.getElementById("textview").innerHTML = "";
}

function back() {
  const exp2 = document.getElementById("textview").innerHTML;

  document.getElementById("textview").innerHTML = exp2.substring(
    0,
    exp2.length - 1
  );
}
