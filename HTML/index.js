var inpt = document.getElementsByClassName("inpt")[0], btn = document.getElementsByClassName("btn")[0];

btn.addEventListener('click', function () {

    console.log(inpt.value);

});

inpt.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        console.log(inpt.value);
    }
});