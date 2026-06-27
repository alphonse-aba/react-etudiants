import { useState, useEffect } from 'react'

function Etudiants() {
  const [etudiants, setEtudiants] = useState([])
  const [nom, setNom] = useState("")

  useEffect(() => {
    chargerEtudiants()
  }, [])

  async function chargerEtudiants() {
    let reponse = await fetch("https://student-manager-web-production.up.railway.app/etudiants/api/")
    let data = await reponse.json()
    setEtudiants(data.etudiants)
  }

  async function ajouterEtudiant() {
    if (nom === "") {
      alert("Veuillez entrer un nom !")
      return
    }
    await fetch("https://student-manager-web-production.up.railway.app/etudiants/api/ajouter/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom: nom })
    })
    setNom("")
    chargerEtudiants()
  }

  async function supprimerEtudiant(id) {
    await fetch("https://student-manager-web-production.up.railway.app/etudiants/api/supprimer/" + id + "/", {
      method: "DELETE",
    })
    chargerEtudiants()
  }

  return (
    <div className="page">
      <h1>🎓 Gestionnaire d'étudiants</h1>

      <input
        type="text"
        placeholder="Nom de l'étudiant..."
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button onClick={ajouterEtudiant}>Ajouter</button>

      <ul>
        {etudiants.map((e) => (
          <li key={e.id}>
            {e.nom}
            <button onClick={() => supprimerEtudiant(e.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Etudiants