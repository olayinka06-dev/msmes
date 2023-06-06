import React from 'react'

const NavigationBar = () => {
    return (
        <>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper align-items-center">
                    <a className="navbar-brand brand-logo" href="index.html"
                    ><img src="./images/logo-light.png" alt="logo"
                        /></a>
                    <a className="navbar-brand brand-logo-mini" href="index.html"
                    ><img src="./images/favicon.ico" alt="logo"
                        /></a>
                    <button
                        className="navbar-toggler navbar-toggler align-self-center"
                        type="button"
                        data-toggle="minimize"
                    >
                        <span className="mdi mdi-sort-variant"></span>
                    </button>
                </div>
                <div
                    className="navbar-menu-wrapper d-flex align-items-center justify-content-end"
                >
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item d-none d-sm-block dropdown arrow-none">
                            <div className="mb-3">
                                <label for="" className="form-label">Name</label>
                                <input type="text"
                                    className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                                <small id="helpId" className="form-text text-muted">Help text</small>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item count-indicator nav-profile dropdown">
                            <a
                                className="nav-link"
                                href="#"
                                data-toggle="dropdown"
                                id="profileDropdown"
                            >
                                <span classNameName='ms-3'><GrNotification /></span>
                                <img classNameName='ms-2' src={logo} alt="owner" />
                                <span className="">hi, john doe</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;