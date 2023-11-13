import React from 'react'


function Header() {
    return(
        <header className="bg-image">
                <nav className="navbar navbar-expand-lg mx-4">
                    <div className="container grid grid-template-collumns" id="container1">

                        <a className="navbar-brand titulo-menu text-white" href="#container1">DFS</a>

                        <button className="navbar-toggler" id="btn-menu" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="bi bi-text-right"></i>
                        </button>

                        <div className="collapse navbar-collapse my-4" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#container1">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#container2">O Problema</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#container3">Impactos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#container4">Solução</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#container5">Smart Cities</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#container6">Resultados</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="col-lg-12 d-flex flex-column justify-content-center altura-container">
                    <h2 className="titulo-main text-white text-center">ENCHENTES</h2>
                    <p className="text-white text-center px-4">Um empecilho recorrente em nossa cidade. Descubra o quanto isso afeta a
                        sociedade e qual a solução para vivermos em um local mais inteligente.</p>
                    <a className="btn btn-outline-light align-self-center" href="#container2">Conheça o Problema</a>
                </div>
            </header>
    )
}

export default Header

