function polytechnicGrade() {

    let score = Number(document.getElementById("polytechnic").value);

    if (score > 100 || score < 0 || document.getElementById("polytechnic").value === "") {
        document.getElementById("polytechnicResult").innerHTML = "INVALID SCORE";
    }

    else if (score >= 70) {
        document.getElementById("polytechnicResult").innerHTML = "EXCELLENT";
    }

    else if (score >= 60) {
        document.getElementById("polytechnicResult").innerHTML = "VERY GOOD";
    }

    else if (score >= 50) {
        document.getElementById("polytechnicResult").innerHTML = "GOOD";
    }

    else if (score >= 45) {
        document.getElementById("polytechnicResult").innerHTML = "CREDIT";
    }

    else if (score >= 40) {
        document.getElementById("polytechnicResult").innerHTML = "PASS";
    }

    else {
        document.getElementById("polytechnicResult").innerHTML = "FAIL";
    }

}