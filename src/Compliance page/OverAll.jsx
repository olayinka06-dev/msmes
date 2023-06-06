import React from 'react';
import { GrNotification } from 'react-icons/gr';
import logo from '../component/Images/Ellipse 1.png';
import { BiPhone, BiUser } from 'react-icons/bi';
import { AiFillProfile, AiOutlineSetting } from 'react-icons/ai';
import { GrGroup, GrDocumentVerified, GrProjects } from 'react-icons/gr';
import icon1 from './Images/Group 7 (1).png';
import icon2 from './Images/Group 7.png';

const OverAll = () => {


  return (
    <div class="container-scroller">
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="navbar-brand-wrapper align-items-center">
            <a class="navbar-brand brand-logo" href="index.html"
            ><img src="./images/logo-light.png" alt="logo"
            /></a>
            <a class="navbar-brand brand-logo-mini" href="index.html"
            ><img src="./images/favicon.ico" alt="logo"
            /></a>
            <button
            class="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
            >
            <span class="mdi mdi-sort-variant"></span>
            </button>
        </div>
        <div
            class="navbar-menu-wrapper d-flex align-items-center justify-content-end"
        >
            <ul class="navbar-nav mr-lg-2">
            <li class="nav-item d-none d-sm-block dropdown arrow-none">
                <div class="mb-3">
                  <label for="" class="form-label">Name</label>
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                  <small id="helpId" class="form-text text-muted">Help text</small>
                </div>
            </li>
            </ul>
            <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item count-indicator nav-profile dropdown">
                <a
                class="nav-link"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
                >
                <span className='ms-3'><GrNotification/></span>
                <img className='ms-2' src={logo} alt="owner" />
                <span class="">hi, john doe</span>
                </a>
            </li>
            </ul>
        </div>
        </nav>
        <div class="container-fluid page-body-wrapper">
        <div class="theme-setting-wrapper">
            <div id="settings-trigger"><i class="mdi mdi-settings"></i></div>
            <div id="theme-settings" class="settings-panel">
            <i class="settings-close mdi mdi-close"></i>
            <p class="settings-heading">SIDEBAR SKINS</p>
            <div class="sidebar-bg-options" id="sidebar-light-theme">
                <div class="img-ss rounded-circle bg-light border mr-3"></div>
                Light
            </div>
            <div class="sidebar-bg-options selected" id="sidebar-dark-theme">
                <div class="img-ss rounded-circle bg-dark border mr-3"></div>
                Dark
            </div>
            <p class="settings-heading mt-2">HEADER SKINS</p>
            <div class="color-tiles mx-0 px-4">
                <div class="tiles success"></div>
                <div class="tiles warning"></div>
                <div class="tiles danger"></div>
                <div class="tiles primary"></div>
                <div class="tiles info"></div>
                <div class="tiles dark"></div>
                <div class="tiles default"></div>
            </div>
            </div>
        </div>
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <div class="dropdown sidebar-profile-dropdown">
            <a
                class="dropdown-toggle d-flex align-items-center justify-content-between"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown1"
            >
                <img
                src="./images/faces/face29.png"
                alt="profile"
                class="sidebar-profile-icon"
                />
                <div>
                <div class="nav-profile-name">Lucille Wilkins</div>
                <div class="nav-profile-designation">Mid term business</div>
                </div>
            </a>
            <div
                class="dropdown-menu navbar-dropdown dropdown-menu-left"
                aria-labelledby="profileDropdown1"
            >
                <a class="dropdown-item">
                <i class="mdi mdi-account"></i>
                Profile
                </a>
                <a class="dropdown-item">
                <i class="mdi mdi-logout"></i>
                Logout
                </a>
            </div>
            </div>
            <ul class="nav">
            <li class="nav-item">
                <div class="sidebar-title">ACCOUNT</div>
                <a class="nav-link" href="compliance.html">
                <i class=" menu-icon"><GrProjects/></i>
                <span class="menu-title">Compliance</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <i class=" menu-icon"><AiFillProfile/></i>
                <span class="menu-title">Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <i class="menu-icon"><GrDocumentVerified/></i>
                <span class="menu-title">Business Details</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <i class="menu-icon"><GrGroup/></i>
                <span class="menu-title">Team</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                <i class="menu-icon"><AiOutlineSetting/></i>
                <span class="menu-title">Settings</span>
                </a>
            </li>
            </ul>
        </nav>
        <div class="main-panel">
            <div class="content-wrapper">
            <div class="row">
                <div
                class="col-md-12 col-xl-12 grid-margin stretch-card d-flex"
                >
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Compliance</h4>
                    <p class="card-description">
                        fill your business personal information
                    </p>
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                        <ul
                            className='bullet-line-list nav nav-tabs nav-tabs-vertical'
                            role="tablist" 
                        >
                            <li class="mb-3">
                          <a class="nav-link active" id="home-tab-custom" data-toggle="tab" href="#home-3" role="tab" aria-controls="home-3" aria-selected="true">
                                <h6>Business Information</h6>
                            </a>
                            </li>
                            <li class="nav-item">
                          <a class="nav-link" id="profile-tab-custom" data-toggle="tab" href="#profile-3" role="tab" aria-controls="profile-3" aria-selected="false">
                                <h6>Owners Information</h6>
                            </a>
                            </li>

                            <li class="nav-item mb-3">
                          <a class="nav-link" id="contact-tab-custom" data-toggle="tab" href="#contact-3" role="tab" aria-controls="contact-3" aria-selected="false">
                                <h6>Contact Details</h6>
                            </a>
                            </li>
                            <li class="nav-item mb-3">
                          <a class="nav-link" id="contact-tab-custom" data-toggle="tab" href="#document-3" role="tab" aria-controls="contact-3" aria-selected="false">
                                <h6>Documents</h6>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-md-9 col-sm-12">
                        <div class="tab-content tab-content-vertical tab-content-vertical-custom">

                            <div class="tab-pane fade show active" id="home-3" role="tabpanel" aria-labelledby="home-tab-custom">
                            <h4 class="card-title">Business Information</h4>
                            <p class="card-description">
                                Input your business informations
                            </p>
                            <form>
                                <div class="row">
                                <div class="col-xl-8 col-md-12">
                                    <div class="form-group">
                                    <label
                                        >Business Name
                                        <span class="text-danger">*</span></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        placeholder="e.g core technology"
                                        aria-label="business_name"
                                    />
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                    <label
                                        >Business Email
                                        <span class="text-danger">*</span></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        placeholder="e.g info@core.com"
                                        aria-label="business_nemail"
                                    />
                                    </div>
                                </div>
                                </div>
                                <div class="form-group">
                                <label>Business Website Link </label>
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="e.g core technology"
                                    aria-label="business_name"
                                />
                                </div>
                                <div class="row">
                                <div class="col-xl-8 col-md-12">
                                    <div class="form-group">
                                    <label
                                        >Industry
                                        <span class="text-danger">*</span></label
                                    >
                                    <select
                                        class="form-control form-control-lg"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="form-group">
                                    <label
                                        >Category
                                        <span class="text-danger">*</span></label
                                    >
                                    <select
                                        class="form-control form-control-lg"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                <button
                                    type="button"
                                    class="btn btn-secondary btn-lg"
                                >
                                    Update Changes
                                </button>
                                </div>
                            </form>
                            </div>

                            <div class="tab-pane fade" id="profile-3" role="tabpanel" aria-labelledby="profile-tab-custom">
                                <div class="d-flex justify-content-between mb-3">
                                    <div>
                                    <h4 class="card-title">Owners Infomation</h4>
                                    <p class="card-description">
                                        Please fill information about owners of the
                                        business
                                    </p>
                                    </div>
                                    <div>
                                    <button
                                        type="button"
                                        class="btn btn-secondary btn-lg"
                                        data-toggle="modal" data-target="#addOwnersModal"
                                    >
                                        <span class="far fa-plus"></span>
                                        Add owners
                                    </button>
                                    </div>
                                </div>
                                <div class="modal fade" id="addOwnersModal" tabindex="-1" role="dialog" aria-labelledby="addOwnersModalLabel" aria-hidden="true" >
                                    <div class="modal-dialog modal-md" role="document">
                                    <div class="modal-content">
                                        <div className="modal-header">
                                            <div className="col">
                                                <h5 class="modal-title" id="addOwnersModalLabel">Owner Details</h5>
                                                <p>Fill owner information in the inputs below</p>
                                            </div>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    
                                        <div class="modal-body">
                                        
                                        <form>
                                            <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                <label
                                                    >Full Name
                                                    <span class="text-danger">*</span></label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    placeholder="e.g core technology"
                                                    aria-label="full_name"
                                                />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                <label
                                                    >Business Email
                                                    <span class="text-danger">*</span></label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    placeholder="e.g info@core.com"
                                                    aria-label="business_nemail"
                                                />
                                                </div>
                                            </div>
                                            </div>
                                        
                                            <div class="row">
                                            <div class="col-xl-4 col-md-4 col-sm-12">
                                                <div class="form-group">
                                                <label
                                                    >Country code
                                                    <span class="text-danger">*</span></label
                                                >
                                                <select
                                                    class="form-control form-control-lg py-3"
                                                >
                                                    <option>+234</option>                                             
                                                </select>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-md-8 col-sm-12">
                                                <div class="form-group">
                                                <label
                                                    >Phone No.
                                                    <span class="text-danger">*</span></label
                                                >
                                                <input
                                                type="text"
                                                class="form-control form-control-lg"
                                                placeholder="234-120-1111"
                                                aria-label="phone_no"
                                                />
                                                </div>
                                            </div>
                                            </div>
                                            <div class="row">
                                            <div class="col-xl-8 col-md-6">
                                                <div class="form-group">
                                                <label
                                                    >Address
                                                    <span class="text-danger">*</span></label
                                                >
                                                <input
                                                type="text"
                                                class="form-control form-control-lg"
                                                placeholder="e.g. Abuja, Nigeria"
                                                aria-label="address"
                                                />
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6">
                                                <div class="form-group">
                                                <label
                                                    >Nationality
                                                    <span class="text-danger">*</span></label
                                                >
                                                <select
                                                    class="form-control form-control-lg py-3"
                                                >
                                                    <option>Nigeria</option>                                             
                                                </select>
                                                </div>
                                            </div>
                                            </div>
                                        
                                            <div class="d-flex justify-content-end">
                                            <button
                                                type="button"
                                                class="btn btn-secondary btn-lg"
                                            >
                                                Send Invite
                                            </button>
                                            </div>
                                        </form>
                                        </div>                                 
                                    </div>
                                    </div>
                                </div>
    
                                <table class="table table-hover mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th class="pl-2">Owners Info.</th>
                                        <th class="pr-0">Email</th>
                                        <th class="pr-0">Phone No.</th>
                                        <th class="pr-0">Address No.</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="pt-2 pb-2">
                                        <td class="pl-3">
                                        <div
                                            class="btn btn-inverse-dark btn-icon mr-3"
                                        >
                                            <i class="fa fa-user"><BiUser className='mb-3' style={{fontSize: "20px", marginTop: "10px"}}/></i>
                                        </div>
                                        john doe
                                        </td>
                                        <td class="pr-0">johndoe@core.com</td>
                                        <td class="pr-0">231256788923</td>
                                        <td class="pr-0">Ilorin, Kwara</td>
                                    </tr>
                                    <tr class="pt-2 pb-2">
                                        <td class="pl-3">
                                        <div
                                            class="btn btn-inverse-dark btn-icon mr-3"
                                        >
                                            <i class="fa fa-user"><BiUser className='mb-3' style={{fontSize: "20px", marginTop: "10px"}}/></i>
                                        </div>
                                        john doe
                                        </td>
                                        <td class="pr-0">johndoe@core.com</td>
                                        <td class="pr-0">231256788923</td>
                                        <td class="pr-0">Ilorin, Kwara</td>
                                    </tr>
                                    <tr class="pt-2 pb-2">
                                        <td class="pl-3">
                                        <div
                                            class="btn btn-inverse-dark btn-icon mr-3"
                                        >
                                            <i class="fa fa-user"><BiUser className='mb-3' style={{fontSize: "20px", marginTop: "10px"}}/></i>
                                        </div>
                                        john doe
                                        </td>
                                        <td class="pr-0">johndoe@core.com</td>
                                        <td class="pr-0">231256788923</td>
                                        <td class="pr-0">Ilorin, Kwara</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="tab-pane fade" id="contact-3" role="tabpanel" aria-labelledby="contact-tab-custom">
                            <h4 class="card-title">Contact Details</h4>
                            <p class="card-description">
                            Input your business contact details below
                            </p>
                            <form>
                            <div class="row">
                                <div class="col-xl-8 col-md-12">
                                <div class="form-group">
                                    <label
                                    >Address
                                    <span class="text-danger">*</span></label
                                    >
                                    <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="e.g 5B george driveway, california"
                                    aria-label="business_address"
                                    />
                                </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                <div class="form-group">
                                    <label
                                    >City
                                    <span class="text-danger">*</span></label
                                    >
                                    <input
                                    type="text"
                                    class="form-control form-control-lg"                                
                                    aria-label="business_city"
                                    />
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-4 col-md-6">
                                <div class="form-group">
                                    <label
                                    >Country Code
                                    <span class="text-danger">*</span></label
                                    >
                                    <select
                                    class="form-control form-control-lg py-3"
                                    >
                                    <option>+234</option>                                 
                                    </select>
                                </div>
                                </div>
                                <div class="col-xl-8 col-md-6">
                                <div class="form-group">
                                    <label
                                    >Phone Number
                                    <span class="text-danger">*</span></label
                                    >
                                    <input
                                    type="tel"
                                    class="form-control form-control-lg"
                                    placeholder="1234567890"
                                    aria-label="phone_no"
                                />
                                </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Tax Identification Number </label>
                                <input
                                type="text"
                                class="form-control form-control-lg"
                                placeholder="1234567890"
                                aria-label="TIN"
                                />
                            </div>
                            
                            <div class="d-flex justify-content-end">
                                <button
                                type="button"
                                class="btn btn-secondary btn-lg"
                                >
                                Update Changes
                                </button>
                            </div>
                            </form>
                            </div>

                            <div class="tab-pane fade" id="document-3" role="tabpanel" aria-labelledby="document-tab-custom">
                            <h4 class="card-title">Business Documents</h4>
                            <p class="card-description">
                              Please upload the following documents
                            </p>

                            <div class="row">
                              <div class="col-xl-6 p-3">
                                <div class="card p-3">
                                  <div class="row">
                                    <div class="col-2">
                                      <img
                                        class="img-sm rounded-circle"
                                        src={icon2}
                                        alt="profile"
                                      />
                                    </div>
                                    <div class="col-8">
                                      <h4 class="card-title">
                                        Proof of address
                                      </h4>
                                      <p class="card-description">
                                        Upload your proof of your address to
                                        identify your information. you have
                                        options to choose from e.g electricity
                                        bills etc.
                                      </p>
                                      <div class="text-right">
                                        <button
                                          type="button"
                                          class="btn btn-secondary btn-sm"
                                          data-toggle="modal"
                                          data-target="#uploadPOA"
                                        >
                                          <span class="fa fa-plus"></span>
                                          Upload
                                        </button>
                                      </div>
                                      <div
                                        class="modal fade"
                                        id="uploadPOA"
                                        tabindex="-1"
                                        role="dialog"
                                        aria-labelledby="POAlabel"
                                        aria-hidden="true"
                                      >
                                        <div
                                          class="modal-dialog"
                                          role="document"
                                        >
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <h5
                                                class="modal-title"
                                                id="POAlabel"
                                              >
                                                Proof of Address
                                              </h5>
                                              <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true"
                                                  >&times;</span
                                                >
                                              </button>
                                            </div>
                                            <div class="modal-body">
                                              <div class="form-group">
                                                <label
                                                  >Choose your preferred document
                                                  <span class="text-danger"
                                                    >*</span
                                                  ></label
                                                >
                                                <select
                                                  class="form-control form-control-lg"
                                                >
                                                  <option>Utility Bill</option>
                                                  <option>Bank Statement</option>
                                                  <option>Credit Card statement</option>
                                                  <option>Mortgage Statement</option>
                                                  <option>Internet Bills</option>
                                                </select>
                                              </div>
                                              <div class="input-group mb-3">
                                               
                                                <div
                                                  class="custom-file"
                                                >
                                                  <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    id="inputGroupFile02"
                                                  />
                                                  <label
                                                    class="custom-file-label"
                                                    for="inputGroupFile02"
                                                    aria-describedby="inputGroupFileAddon02"
                                                    >Choose file</label
                                                  >
                                                </div>
                                              </div>
                                              <div class="text-right">
                                                <button
                                                  class="btn btn-secondary"
                                                >
                                                  Save
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-6 p-3">
                                <div class="card p-3">
                                  <div class="row">
                                    <div class="col-2">
                                      <img
                                        class="img-sm rounded-circle"
                                        src={icon1}
                                        alt="profile"
                                      />
                                    </div>
                                    <div class="col-8">
                                      <h4 class="card-title">
                                        Business Certificate
                                      </h4>
                                      <p class="card-description">
                                        Upload Business Certificate or any
                                        documents relevant to your business
                                      </p>
                                      <div class="text-right">
                                        <button
                                          type="button"
                                          class="btn btn-secondary btn-sm"
                                          data-toggle="modal"
                                          data-target="#uploadBusinessCertificate"
                                        >
                                          <span class="fa fa-plus"></span>
                                          Upload
                                        </button>
                                      </div>
                                      <div
                                        class="modal fade"
                                        id="uploadBusinessCertificate"
                                        tabindex="-1"
                                        role="dialog"
                                        aria-labelledby="businessCertificateLabel"
                                        aria-hidden="true"
                                      >
                                        <div
                                          class="modal-dialog"
                                          role="document"
                                        >
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <h5
                                                class="modal-title"
                                                id="businessCertificateLabel"
                                              >
                                                Business Certificate
                                              </h5>
                                              <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true"
                                                  >&times;</span
                                                >
                                              </button>
                                            </div>
                                            <div class="modal-body">
                                              <div class="input-group mb-3">
                                                <div class="custom-file">
                                                  <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    id="inputGroupFile02"
                                                  />
                                                  <label
                                                    class="custom-file-label"
                                                    for="inputGroupFile02"
                                                    aria-describedby="inputGroupFileAddon02"
                                                    >Choose file</label
                                                  >
                                                </div>
                                              </div>
                                              <div class="text-right">
                                                <button
                                                  class="btn btn-secondary"
                                                >
                                                  Save
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <footer class="footer">
            <div class="justify-content-center justify-content-sm-between">
                <span class="text-center text-sm-left d-block d-sm-inline-block"
                >Copyright © 2019. All rights reserved.</span
                >
            </div>
            </footer>
        </div>
        </div>
  </div>
  )
}

export default OverAll;