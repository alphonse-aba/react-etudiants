import { useState } from 'react'

function App() {

  // Les useState
  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: "Alphonse", ville: "Lomé" },
    { id: 2, nom: "Kossi", ville: "Kara" },
  ])
  const [nom, setNom] = useState("")
  const [ville, setVille] = useState("")

  // Ajouter un étudiant
  function ajouterEtudiant() {
    if (nom === "" || ville === "") {
      alert("Veuillez remplir tous les champs !")
      return
    }
    let nouvelEtudiant = {
      id: etudiants.length + 1,
      nom: nom,
      ville: ville
    }
    setEtudiants([...etudiants, nouvelEtudiant])
    setNom("")
    setVille("")
  }

  // Supprimer un étudiant
  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id))
  }

  return (
    <div>
      <h1>🎓 Gestionnaire d'étudiants</h1>

      {/* Formulaire */}
      <input
        type="text"
        placeholder="Nom..."
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ville..."
        value={ville}
        onChange={(e) => setVille(e.target.value)}
      />
      <button onClick={ajouterEtudiant}>Ajouter</button>

      {/* Liste */}
      <ul>
        {etudiants.map((etudiant) => (
          <li key={etudiant.id}>
            {etudiant.nom} — {etudiant.ville}
            <button onClick={() => supprimerEtudiant(etudiant.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App