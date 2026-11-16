function secondaryGrade() {

    let score = Number(document.getElementById("secondary").value);

    if (score > 100 || score < 0 || document.getElementById("secondary").value === "") {
        document.getElementById("secondaryResult").innerHTML = "INVALID SCORE";
    }

    else if (score >= 70) {
        document.getElementById("secondaryResult").innerHTML = "EXCELLENT";
    }

    else if (score >= 60) {
        document.getElementById("secondaryResult").innerHTML = "VERY GOOD";
    }

    else if (score >= 50) {
        document.getElementById("secondaryResult").innerHTML = "GOOD";
    }

    else if (score >= 45) {
        document.getElementById("secondaryResult").innerHTML = "CREDIT";
    }

    else if (score >= 40) {
        document.getElementById("secondaryResult").innerHTML = "PASS";
    }

    else {
        document.getElementById("secondaryResult").innerHTML = "FAIL";
    }

}