const getResult = function () {
    let number = document.getElementById("inputNumber").value;
    let output = document.getElementById("output");
    console.log(number);


    if (number == 0) {
        output.innerHTML = "<div>" + "invalid Input" + "</div>";
    } else if (number % 3 == 0 && number % 5 == 0) {
        output.innerHTML = "<div>" + "FizzBuzz" + "</div>";
    } else if (number % 3 == 0) {
        output.innerHTML = "<div>" + "Fizz" + "</div>";
    } else if (number % 5 == 0) {
        output.innerHTML = "<div>" + "Buzz" + "</div>";
    } else {
        output.innerHTML = "<div>" + number + "</div>";
    }
}