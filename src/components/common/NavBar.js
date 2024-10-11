import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                Peliculas
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                    <NavLink
                            to='/'
                            className='nav-link'
                        >
                            Home
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
                            to='/medias'
                            className='nav-link'
                        >
                            Media
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
  )
}
