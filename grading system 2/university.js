// function universityGrade(){
//     let cgpa = Number(document.getElementById('university').value)
// }if (cgpa > 5 || cgpa < 0 || document.getElementById('universityResult').value=== ""){
//     document.getElementById('universityResult').innerHTML = "INVALID CGPA"
// }else if (cgpa >= 4.50){
//     document.getElementById('universityResult').innerHTML = "FIRST CLASS"
// }else if (cgpa >= 3.50){
//     document.getElementById('universityResult').innerHTML = "SECOND CLASS UPPER"
// }else if (cgpa >= 2.40){
//     document.getElementById('universityResult').innerHTML = "SECOND CLASS LOWER"
// }else if (cgpa >= 1.50){
//     document.getElementById('universityResult').innerHTML = "THIRD CLASS"
// }else if (cgpa >= 1.00){
//     document.getElementById('universityResult').innerHTML = 'PASS'
// }

function universityGrade() {

    let cgpa = Number(document.getElementById('university').value);

    if (cgpa > 5 || cgpa < 0 || document.getElementById('university').value === "") {
        document.getElementById('universityResult').innerHTML = "INVALID CGPA";
    }

    else if (cgpa >= 4.50) {
        document.getElementById('universityResult').innerHTML = "FIRST CLASS";
    }

    else if (cgpa >= 3.50) {
        document.getElementById('universityResult').innerHTML = "SECOND CLASS UPPER";
    }

    else if (cgpa >= 2.40) {
        document.getElementById('universityResult').innerHTML = "SECOND CLASS LOWER";
    }

    else if (cgpa >= 1.50) {
        document.getElementById('universityResult').innerHTML = "THIRD CLASS";
    }

    else if (cgpa >= 1.00) {
        document.getElementById('universityResult').innerHTML = "PASS";
    }

    else {
        document.getElementById('universityResult').innerHTML = "FAIL";
    }

}
