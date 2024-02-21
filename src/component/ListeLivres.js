import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { supprimer } from '../features/store';

const ListeLivres = () => {
    const livres = useSelector(state=>state.livre.livres)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Liste des livres</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Ref</th>
                    <th>Titre</th>
                    <th>Prix Unitaire</th>
                    <th>Quantite</th>
                    <th>Prix Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {livres.map(l=>
                    (
                        <tr key={l.ref}>
                            <td>{l.ref}</td>
                            <td>{l.titre}</td>
                            <td>{l.pu}</td>
                            <td>{l.quantite}</td>
                            <td>{l.prixTotal}</td>
                            <td><button onClick={() => dispatch(supprimer(l.ref))}>Supprimer</button></td>
                        </tr>
                    )
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default ListeLivres