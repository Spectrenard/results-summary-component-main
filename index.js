function afficherDonnees(data) {
  // Assure-toi que data.json est un tableau et a au moins un élément
  if (Array.isArray(data) && data.length > 0) {
    // Sélectionne tous les éléments avec la classe "value"
    const values = document.querySelectorAll(".value");

    // Parcours les trois premiers éléments de la classe "value"
    for (let i = 0; i < Math.min(values.length, 4); i++) {
      // Crée un élément pour chaque score
      let valueScore = document.createElement("div");
      valueScore.textContent = data[i].score + " / 100";

      // Ajoute l'élément à la div "value" correspondante
      values[i].appendChild(valueScore);
    }
  }
}

fetch("data.json")
  .then((response) => response.json())
  .then((result) => afficherDonnees(result))
  .catch((error) => console.error("Erreur de chargement des données:", error));
