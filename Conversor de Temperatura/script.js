document.getElementById("toCelsius").addEventListener("click", converterParaCelsius);
document.getElementById("toFahrenheit").addEventListener("click", converterParaFahrenheit);

function converterParaCelsius() {
    var temperatura = parseFloat(document.getElementById("temperature").value);
    if (!isNaN(temperatura)) {
        var celsius = (temperatura - 32) * 5/9;
        document.getElementById("result").innerHTML = celsius.toFixed(2) + " °C";
    } else {
        document.getElementById("result").innerHTML = "Por favor, insira uma temperatura válida.";
    }
}

function converterParaFahrenheit() {
    var temperatura = parseFloat(document.getElementById("temperature").value);
    if (!isNaN(temperatura)) {
        var fahrenheit = (temperatura * 9/5) + 32;
        document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + " °F";
    } else {
        document.getElementById("result").innerHTML = "Por favor, insira uma temperatura válida.";
    }
}
