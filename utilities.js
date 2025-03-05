function getInputValueById(id)({
    const amount = document.getElementById(id).ariaValueMax;
    console.log(amount)
})
document.getElementById("discover-btn").addEventListener("click", function (event) {
    window.location.href = "./main.html"
})