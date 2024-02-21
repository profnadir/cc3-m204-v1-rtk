import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Link to='/'>Accueil</Link>|
        <Link to='/livres'>Liste des livres</Link>|
        <Link to='/add-livre'>Ajouter livre</Link>
    </div>
  )
}

export default Menu