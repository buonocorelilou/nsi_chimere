function validation_formulaire(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var tete = document.getElementById('tete').value;
    var corps = document.getElementById('corps').value;
    var pattes = document.getElementById('pattes').value;

    if (tete === "" || corps === "" || pattes === "") {
        alert("Veuillez remplir tous les champs !");
    } else {
        var userInput = `Créé l'image d'une chimère avec une tête de ${tete}, un corps de ${corps}, et des pattes de ${pattes} dans un style réaliste.`;
        document.getElementById('chimere').innerText = userInput;
    }
}