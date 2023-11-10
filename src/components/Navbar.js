import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar-default navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand text-color-default" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-color-default" aria-current="page" href="/dashboard">Gestionar miembro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-color-default" href="#">Gestionar visitante</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-color-default" href="#">Gestionar ministerio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-color-default" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
