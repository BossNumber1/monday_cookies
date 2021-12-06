let countCookies;

document.querySelector("input").onchange = function (e) {
    countCookies = e.target.value;
};

document.getElementById("submit").onclick = function () {
    if (countCookies == 10) {
        alert(" верно ");
    } else {
        alert(" неверно ");
    }
};
