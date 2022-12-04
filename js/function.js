//Source modified: https://stackoverflow.com/questions/67541115/how-to-get-the-inputs-value
let form = document.querySelector(".my-form");
form.addEventListener("submit", function (e){
    // This prevents the window from reloading
    e.preventDefault();
    let selectGrade = document.getElementById("grade");
    let grade = selectGrade.options[selectGrade.selectedIndex].value;
    let selectDegree = document.getElementById("degree");
    let degree = checkIfEmpty(selectDegree.options[selectDegree.selectedIndex].value);
    let formdata = new FormData(this);
    let firstName = checkIfEmpty(formdata.get("vorname"));
    let lastName = checkIfEmpty(formdata.get("nachname"));
    let street = checkIfEmpty(formdata.get("strasse"));
    let plz = checkIfEmpty(formdata.get("plz"));
    let ort = checkIfEmpty(formdata.get("ort"));
    let geschlecht = checkIfEmpty(formdata.get("geschlecht"));
    let email = checkIfEmpty(formdata.get("email"));
    let handy = checkIfEmpty(formdata.get("handy"));
    let bemerkungen = checkIfEmpty(formdata.get("bemerkungen"));
    let popUpText = document.getElementById("popUpText");


    popUpText.classList.add("pop");
    document.getElementById("center").classList.add("center");
    popUpText.innerHTML = "Formular Inhalt" + "<br>" + "Vorname: " + firstName + "<br>" + "Nachname: " + lastName + "<br>" + "Straße: " + street +
        "<br>" + "PLZ: " + plz + "<br>" + "Ort: " + ort + "<br>" + "Geschlecht: " + geschlecht + "<br>" + "Note: " + grade + "<br>" + "Abschluss: " + degree
        + "<br>" + "E-Mail: " + email + "<br>" + "Handy: " + handy + "<br>" + "Bemerkungen: " + bemerkungen;
    popUpText.style.padding = "1em 2em";
    document.getElementById("popUpBtn").classList.remove("popUpBtnUnclicked");
    document.getElementById("popUpBtn").classList.add("popUpBtnClicked");
    document.getElementById("btn").classList.add("btn");
});

document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("form").reset();
});

function checkIfEmpty(input){
    if (input == null || input == "" || input == "...") return "-";
    else return input;
}





