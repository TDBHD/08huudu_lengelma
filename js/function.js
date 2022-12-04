function popUpText(){
    let vorname           = document.getElementById("vorname").value;
    let name              = document.getElementById("name").value;
    let strasse           = document.getElementById("strasse").value;
    let plz               = document.getElementById("plz").value;
    let ort               = document.getElementById("ort").value;
    let geschlecht        = document.querySelector('input[name="Geschlecht"]:checked').value; //Source: https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
    let selectNote        = document.getElementById("note").value;


    let selectAbschluss   = document.getElementById("abschluss").value;
    let email             = document.getElementById("email").value;
    let handy             = document.getElementById("handy").value;
    let bemerkungen       = document.getElementById("bemerkungen").value;

    alert("Formular Inhalt" + "\n" + "Vorname: " + vorname + "\n" + "Nachname: " + name + "\n" + "Straße: " + strasse +
    "\n" + "PLZ: " + plz + "\n" + "Ort: " + ort + "\n" + "Geschlecht: " + geschlecht + "\n" + "Note: " + selectNote +
    "\n" + "Abschluss: " + selectAbschluss
    + "\n" + "E-Mail: " + email + "\n" + "Handy: " + handy + "\n" + "Bemerkungen: " + bemerkungen);

}
