const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

//sayfa yüklendiğinde celsiusa odaklan
window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    if (!celsius.value) fahrenheit.value = "";
});

fahrenheit.addEventListener("input", () => {
    celsius.value = ((fahrenheit.value * 9) / 5 + 32).toFixed(2);
    if (!fahrenheit.value) celsius.value = "";
});