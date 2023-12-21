function replaceName() {
    let name = prompt("Please enter your name", "");
    document.getElementById("name").innerHTML = name;
}

replaceName();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("banner");
    if (n > x.length) {
        slideIndex = 1;
    }
    
    else if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block"; 
}

setInterval(() => {
    plusDivs(1);
}, 5000);

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);

    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}

const currentDate = new Date().toLocaleString();
document.getElementById("date").innerHTML = currentDate;