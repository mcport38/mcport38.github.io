document.write("<table>");
document.write("<tr>");
document.write("<th>x</th>");
document.write("<th>op</th>");
document.write("<th>y</th>");
document.write("<th>result</th>");
document.write("</tr>");

let validResult = [];
let continueCalc = true;

while (continueCalc) {
    let x = prompt("Enter the first number:");
    let y = prompt("Enter the second number:");
    let operator = prompt("Enter the operator (+, -, *, /, %):");
    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
    } else {
        x = Number(x);
        y = Number(y);
    
    switch (operator) {
        case "+":
            result = x + y;
            validResult.push(result);
            break;
        case "-":
            result = x - y;
            validResult.push(result);
            break;  
        case "*":
            result = x * y;
            validResult.push(result);
            break;
        case "/":
            result = x / y;
            validResult.push(result);
            break;
        case "%":
            result = x % y;
            validResult.push(result);
            break;
        default:
            result = "computation error";
    }
}
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");
    

    continueCalc = confirm("Do you want to do another calculation?");

}

document.write("</table>");

let total = 0;
for (let i=0; i < validResult.length; i++) {
    total += validResult[i];
}
let min = Math.min(...validResult);
let max = Math.max(...validResult);
let average = total / validResult.length;

document.write("<table>");
document.write("<tr>");
document.write("<th>Min</th>");
document.write("<th>Max</th>");
document.write("<th>Average</th>");
document.write("<th>Total</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + min + "</td>");
document.write("<td>" + max + "</td>");
document.write("<td>" + average + "</td>");
document.write("<td>" + total + "</td>");
document.write("</tr>");
document.write("</table>");
