import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajouter } from '../features/store';

const AjouterLivre = () => {
    const [ref,setRef] = useState('');
    const [titre,setTitre] = useState('');
    const [pu,setPu] = useState(0);
    const [quantite,setQuantite] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e=>{
        e.preventDefault();

        let livre = {
            ref : ref,
            titre : titre,
            pu : pu,
            quantite : quantite,
            prixTotal : pu * quantite
        }
        dispatch(ajouter(livre));

        navigate('/livres')
    }
  return (
    <div>
        <h1>Ajouter livre</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={ref} onChange={e=>setRef(e.target.value)} placeholder='ref'/><br/>
            <input type="text" value={titre} onChange={e=>setTitre(e.target.value)} placeholder='titre'/><br/>
            <input type="number" value={pu} onChange={e=>setPu(e.target.value)} placeholder='PU'/><br/>
            <input type="number" value={quantite} onChange={e=>setQuantite(e.target.value)} placeholder='Quantite'/><br/>
            <button>Ajouter</button>
        </form>
    </div>
  )
}

export default AjouterLivre