import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div className="container">
                <img src="/logo.png" alt="Logo" width="120" style={{"height": 'auto'}} className="d-inline-block align-text-top" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-grow-1 justify-content-between">
                    <NavLink
                            to='/'
                            className='nav-link'
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to='/generos'
                            className='nav-link'
                        >
                            Géneros
                        </NavLink>
                        <NavLink
                            to='/directores'
                            className='nav-link'
                        >
                            Directores
                        </NavLink>
                        <NavLink
                            to='/productoras'
                            className='nav-link'
                        >
                            Productoras
                        </NavLink>
                        <NavLink
                            to='/tiposMultimedia'
                            className='nav-link'
                        >
                            Tipos Multimedia
                        </NavLink>
                        <NavLink
                            to='/gestion-medias'
                            className='nav-link'
                        >
                            Media
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
