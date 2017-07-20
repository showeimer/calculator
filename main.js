let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {button.addEventListener("click", function() {output.innerHTML += button.value})});
document.querySelector('#clear').addEventListener("click", function() {output.innerHTML = ""});
document.querySelector('#equals').addEventListener("click", function calculate() {output.innerHTML = eval(output.innerHTML)});
document.querySelector('#squareRoot').addEventListener("click", function() {output.innerHTML = Math.sqrt(output.innerHTML)});
