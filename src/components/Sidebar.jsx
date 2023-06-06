import React from 'react'

const Sidebar = () => {
  return (
    <>
         <div className="theme-setting-wrapper">
          <div id="settings-trigger"><i className="mdi mdi-settings"></i></div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close mdi mdi-close"></i>
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div className="sidebar-bg-options" id="sidebar-light-theme">
              <div className="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div className="sidebar-bg-options selected" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3"></div>
              Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success"></div>
              <div className="tiles warning"></div>
              <div className="tiles danger"></div>
              <div className="tiles primary"></div>
              <div className="tiles info"></div>
              <div className="tiles dark"></div>
              <div className="tiles default"></div>
            </div>
          </div>
        </div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <div className="dropdown sidebar-profile-dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center justify-content-between"
              href="#"
              data-toggle="dropdown"
              id="profileDropdown1"
            >
              <img
                src="./images/faces/face29.png"
                alt="profile"
                className="sidebar-profile-icon"
              />
              <div>
                <div className="nav-profile-name">Lucille Wilkins</div>
                <div className="nav-profile-designation">Mid term business</div>
              </div>
            </a>
            <div
              className="dropdown-menu navbar-dropdown dropdown-menu-left"
              aria-labelledby="profileDropdown1"
            >
              <a className="dropdown-item">
                <i className="mdi mdi-account"></i>
                Profile
              </a>
              <a className="dropdown-item">
                <i className="mdi mdi-logout"></i>
                Logout
              </a>
            </div>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <div className="sidebar-title">ACCOUNT</div>
              <a className="nav-link" href="compliance.html">
                <i className=" menu-icon"><GrProjects /></i>
                <span className="menu-title">Compliance</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className=" menu-icon"><AiFillProfile /></i>
                <span className="menu-title">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="menu-icon"><GrDocumentVerified /></i>
                <span className="menu-title">Business Details</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="menu-icon"><GrGroup /></i>
                <span className="menu-title">Team</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="menu-icon"><AiOutlineSetting /></i>
                <span className="menu-title">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default SideBar;