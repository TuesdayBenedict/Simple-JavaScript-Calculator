const expressionElement = document.getElementById("expression");
const resultElement = document.getElementById("result");

const operators = new Set(["%", "/", "*", "-", "+"]);

let storeTemporalResult;

function updateResult() {
    resultElement.innerHTML = expressionElement.innerHTML != '' ? eval(expressionElement.innerHTML) : "0";
}

document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
        const value = element.innerHTML;

        if (value == "AC") {
            expressionElement.innerHTML = "";
            resultElement.innerHTML = "0";
        }

        else if (value == "C") {
            expressionElement.innerHTML = expressionElement.innerHTML.slice(0, -1);
            updateResult();
        }

        else if (value == "In") { }

        else if (value == "=") {
            updateResult();
            storeTemporalResult = resultElement.innerHTML
        }

        else if ((value == ".") && (operators.has(expressionElement.innerHTML.slice(-1)))) {
            expressionElement.innerHTML = expressionElement.innerHTML + "0" + element.innerHTML;
        }

        else if (operators.has(value) && (expressionElement.innerHTML.slice(-1) == ".")) {
            expressionElement.innerHTML = expressionElement.innerHTML + "0" + value;
        }

        else if (operators.has(value) && (expressionElement.innerHTML == "")) { }

        else if ((value == "'") && (expressionElement.innerHTML.lastIndexOf(".") > expressionElement.innerHTML.lastIndexOf(operators.values().next().value))) { }

        else if (operators.has(value) && (storeTemporalResult != "")) {
            expressionElement.innerHTML = storeTemporalResult + value;
            storeTemporalResult = "";
            updateResult();
        }

        else {
            expressionElement.innerHTML = storeTemporalResult != "" ? value : expressionElement.innerHTML + value;
            updateResult();
            storeTemporalResult = "";
        };
    });
})


// Not too okay

/* document.querySelectorAll(".button").forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerHTML == "AC") {
            expression.innerHTML = '';
            result.innerHTML = '0';
        } else if (element.innerHTML == "In") {
        } else if (element.innerHTML == "C") {
            expression.innerHTML = expression.innerHTML.slice(0, -1);
            result.innerHTML = expression.innerHTML == '' ? '0' : eval(expression.innerHTML);
        } else if (element.innerHTML == "=") {
            result.innerHTML = eval(expression.innerHTML);
            expression.innerHTML = result.innerHTML;
        } else if (
            element.innerHTML == "." &&
            (expression.innerHTML == "" ||
                expression.innerHTML.slice(-1) == "%" ||
                expression.innerHTML.slice(-1) == "/" ||
                expression.innerHTML.slice(-1) == "*" ||
                expression.innerHTML.slice(-1) == "-" ||
                expression.innerHTML.slice(-1) == "+")
        ) {
            expression.innerHTML = expression.innerHTML + "0" + element.innerHTML;
        } else if (
            (element.innerHTML == "%" ||
                element.innerHTML == "/" ||
                element.innerHTML == "*" ||
                element.innerHTML == "-" ||
                element.innerHTML == "+") &&
            expression.innerHTML.slice(-1) == "."
        ) {
            expression.innerHTML = expression.innerHTML + "0" + element.innerHTML;
        } else if (
            (element.innerHTML == "%" ||
                element.innerHTML == "/" ||
                element.innerHTML == "*" ||
                element.innerHTML == "-" ||
                element.innerHTML == "+") &&
            expression.innerHTML == ""
        ) {
        } else if (
            element.innerHTML == "." &&
            expression.innerHTML.lastIndexOf(".") >
            expression.innerHTML.lastIndexOf("%") &&
            expression.innerHTML.lastIndexOf(".") >
            expression.innerHTML.lastIndexOf("/") &&
            expression.innerHTML.lastIndexOf(".") >
            expression.innerHTML.lastIndexOf("*") &&
            expression.innerHTML.lastIndexOf(".") >
            expression.innerHTML.lastIndexOf("-") &&
            expression.innerHTML.lastIndexOf(".") >
            expression.innerHTML.lastIndexOf("+")
        ) {
        } else if (
            element.innerHTML == "0" &&
            expression.innerHTML.slice(-1) == "0"
        ) {
        } else {
            expression.innerHTML = expression.innerHTML + element.innerHTML;
            result.innerHTML = eval(expression.innerHTML)
        }
    });
});
*/