function clearInput() {
    document.getElementById("message").value = '';
}

function submit() {
    var button = document.getElementById("send");
    button.style.transition = "opacity 0.3s, color 0.3s";
    button.style.opacity = 0;

    setTimeout(function () {
        button.innerHTML = "Done!";
        button.style.backgroundColor = "#4ec032c5";
        button.style.opacity = 1;

        setTimeout(function () {
            button.style.opacity = 0;

            setTimeout(function () {
                button.innerHTML = "Send";
                button.style.backgroundColor = "";
                button.style.opacity = 1;
            }, 500);
        }, 2500);
    }, 500);
}