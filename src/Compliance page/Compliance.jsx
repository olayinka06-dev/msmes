import React from 'react';
import { GrNotification } from 'react-icons/gr';
import logo from '../component/Images/Ellipse 1.png';
import { BiPhone, BiUser } from 'react-icons/bi';
import { AiFillProfile, AiOutlineSetting } from 'react-icons/ai';
import { GrGroup, GrDocumentVerified, GrProjects } from 'react-icons/gr';
import icon1 from './Images/Group 7 (1).png';
import icon2 from './Images/Group 7.png';
import SideBar from '../components/Sidebar';
import NavigationBar from '../components/NavigationBar';

const Compliance = () => {


  return (
    <div className="container-scroller">
      <NavigationBar/>
      <div className="container-fluid page-body-wrapper">
        <SideBar/>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div
                className="col-md-12 col-xl-12 grid-margin stretch-card d-flex"
              >
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Compliance</h4>
                    <p className="card-description">
                      fill your business personal information
                    </p>
                    <div className="row">
                      <div className="col-md-3 col-sm-12">
                        <ul
                          classNameName='bullet-line-list nav nav-tabs nav-tabs-vertical'
                          role="tablist"
                        >
                          <li className="mb-3">
                            <a className="nav-link active" id="home-tab-custom" data-toggle="tab" href="#home-3" role="tab" aria-controls="home-3" aria-selected="true">
                              <h6>Business Information</h6>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="profile-tab-custom" data-toggle="tab" href="#profile-3" role="tab" aria-controls="profile-3" aria-selected="false">
                              <h6>Owners Information</h6>
                            </a>
                          </li>

                          <li className="nav-item mb-3">
                            <a className="nav-link" id="contact-tab-custom" data-toggle="tab" href="#contact-3" role="tab" aria-controls="contact-3" aria-selected="false">
                              <h6>Contact Details</h6>
                            </a>
                          </li>
                          <li className="nav-item mb-3">
                            <a className="nav-link" id="contact-tab-custom" data-toggle="tab" href="#document-3" role="tab" aria-controls="contact-3" aria-selected="false">
                              <h6>Documents</h6>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-9 col-sm-12">
                        <div className="tab-content tab-content-vertical tab-content-vertical-custom">

                          <div className="tab-pane fade show active" id="home-3" role="tabpanel" aria-labelledby="home-tab-custom">
                            <h4 className="card-title">Business Information</h4>
                            <p className="card-description">
                              Input your business informations
                            </p>
                            <form>
                              <div className="row">
                                <div className="col-xl-8 col-md-12">
                                  <div className="form-group">
                                    <label
                                    >Business Name
                                      <span className="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      placeholder="e.g core technology"
                                      aria-label="business_name"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                  <div className="form-group">
                                    <label
                                    >Business Email
                                      <span className="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      placeholder="e.g info@core.com"
                                      aria-label="business_nemail"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label>Business Website Link </label>
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  placeholder="e.g core technology"
                                  aria-label="business_name"
                                />
                              </div>
                              <div className="row">
                                <div className="col-xl-8 col-md-12">
                                  <div className="form-group">
                                    <label
                                    >Industry
                                      <span className="text-danger">*</span></label
                                    >
                                    <select
                                      className="form-control form-control-lg"
                                    >
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                  <div className="form-group">
                                    <label
                                    >Category
                                      <span className="text-danger">*</span></label
                                    >
                                    <select
                                      className="form-control form-control-lg"
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
                              <div className="d-flex justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-lg"
                                >
                                  Update Changes
                                </button>
                              </div>
                            </form>
                          </div>

                          <div className="tab-pane fade" id="profile-3" role="tabpanel" aria-labelledby="profile-tab-custom">
                            <div className="d-flex justify-content-between mb-3">
                              <div>
                                <h4 className="card-title">Owners Infomation</h4>
                                <p className="card-description">
                                  Please fill information about owners of the
                                  business
                                </p>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-lg"
                                  data-toggle="modal" data-target="#addOwnersModal"
                                >
                                  <span className="far fa-plus"></span>
                                  Add owners
                                </button>
                              </div>
                            </div>
                            <div className="modal fade" id="addOwnersModal" tabindex="-1" role="dialog" aria-labelledby="addOwnersModalLabel" aria-hidden="true" >
                              <div className="modal-dialog modal-md" role="document">
                                <div className="modal-content">
                                  <div classNameName="modal-header">
                                    <div classNameName="col">
                                      <h5 className="modal-title" id="addOwnersModalLabel">Owner Details</h5>
                                      <p>Fill owner information in the inputs below</p>
                                    </div>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>

                                  <div className="modal-body">

                                    <form>
                                      <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                          <div className="form-group">
                                            <label
                                            >Full Name
                                              <span className="text-danger">*</span></label
                                            >
                                            <input
                                              type="text"
                                              className="form-control form-control-lg"
                                              placeholder="e.g core technology"
                                              aria-label="full_name"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                          <div className="form-group">
                                            <label
                                            >Business Email
                                              <span className="text-danger">*</span></label
                                            >
                                            <input
                                              type="text"
                                              className="form-control form-control-lg"
                                              placeholder="e.g info@core.com"
                                              aria-label="business_nemail"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-xl-4 col-md-4 col-sm-12">
                                          <div className="form-group">
                                            <label
                                            >Country code
                                              <span className="text-danger">*</span></label
                                            >
                                            <select
                                              className="form-control form-control-lg py-3"
                                            >
                                              <option>+234</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-xl-8 col-md-8 col-sm-12">
                                          <div className="form-group">
                                            <label
                                            >Phone No.
                                              <span className="text-danger">*</span></label
                                            >
                                            <input
                                              type="text"
                                              className="form-control form-control-lg"
                                              placeholder="234-120-1111"
                                              aria-label="phone_no"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-xl-8 col-md-6">
                                          <div className="form-group">
                                            <label
                                            >Address
                                              <span className="text-danger">*</span></label
                                            >
                                            <input
                                              type="text"
                                              className="form-control form-control-lg"
                                              placeholder="e.g. Abuja, Nigeria"
                                              aria-label="address"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6">
                                          <div className="form-group">
                                            <label
                                            >Nationality
                                              <span className="text-danger">*</span></label
                                            >
                                            <select
                                              className="form-control form-control-lg py-3"
                                            >
                                              <option>Nigeria</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="d-flex justify-content-end">
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-lg"
                                        >
                                          Send Invite
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <table className="table table-hover mb-0">
                              <thead className="thead-light">
                                <tr>
                                  <th className="pl-2">Owners Info.</th>
                                  <th className="pr-0">Email</th>
                                  <th className="pr-0">Phone No.</th>
                                  <th className="pr-0">Address No.</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="pt-2 pb-2">
                                  <td className="pl-3">
                                    <div
                                      className="btn btn-inverse-dark btn-icon mr-3"
                                    >
                                      <i className="fa fa-user"><BiUser classNameName='mb-3' style={{ fontSize: "20px", marginTop: "10px" }} /></i>
                                    </div>
                                    john doe
                                  </td>
                                  <td className="pr-0">johndoe@core.com</td>
                                  <td className="pr-0">231256788923</td>
                                  <td className="pr-0">Ilorin, Kwara</td>
                                </tr>
                                <tr className="pt-2 pb-2">
                                  <td className="pl-3">
                                    <div
                                      className="btn btn-inverse-dark btn-icon mr-3"
                                    >
                                      <i className="fa fa-user"><BiUser classNameName='mb-3' style={{ fontSize: "20px", marginTop: "10px" }} /></i>
                                    </div>
                                    john doe
                                  </td>
                                  <td className="pr-0">johndoe@core.com</td>
                                  <td className="pr-0">231256788923</td>
                                  <td className="pr-0">Ilorin, Kwara</td>
                                </tr>
                                <tr className="pt-2 pb-2">
                                  <td className="pl-3">
                                    <div
                                      className="btn btn-inverse-dark btn-icon mr-3"
                                    >
                                      <i className="fa fa-user"><BiUser classNameName='mb-3' style={{ fontSize: "20px", marginTop: "10px" }} /></i>
                                    </div>
                                    john doe
                                  </td>
                                  <td className="pr-0">johndoe@core.com</td>
                                  <td className="pr-0">231256788923</td>
                                  <td className="pr-0">Ilorin, Kwara</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="tab-pane fade" id="contact-3" role="tabpanel" aria-labelledby="contact-tab-custom">
                            <h4 className="card-title">Contact Details</h4>
                            <p className="card-description">
                              Input your business contact details below
                            </p>
                            <form>
                              <div className="row">
                                <div className="col-xl-8 col-md-12">
                                  <div className="form-group">
                                    <label
                                    >Address
                                      <span className="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      placeholder="e.g 5B george driveway, california"
                                      aria-label="business_address"
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                  <div className="form-group">
                                    <label
                                    >City
                                      <span className="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      aria-label="business_city"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xl-4 col-md-6">
                                  <div className="form-group">
                                    <label
                                    >Country Code
                                      <span className="text-danger">*</span></label
                                    >
                                    <select
                                      className="form-control form-control-lg py-3"
                                    >
                                      <option>+234</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-xl-8 col-md-6">
                                  <div className="form-group">
                                    <label
                                    >Phone Number
                                      <span className="text-danger">*</span></label
                                    >
                                    <input
                                      type="tel"
                                      className="form-control form-control-lg"
                                      placeholder="1234567890"
                                      aria-label="phone_no"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label>Tax Identification Number </label>
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  placeholder="1234567890"
                                  aria-label="TIN"
                                />
                              </div>

                              <div className="d-flex justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-lg"
                                >
                                  Update Changes
                                </button>
                              </div>
                            </form>
                          </div>

                          <div className="tab-pane fade" id="document-3" role="tabpanel" aria-labelledby="document-tab-custom">
                            <h4 className="card-title">Business Documents</h4>
                            <p className="card-description">
                              Please upload the following documents
                            </p>

                            <div className="row">
                              <div className="col-xl-6 p-3">
                                <div className="card p-3">
                                  <div className="row">
                                    <div className="col-2">
                                      <img
                                        className="img-sm rounded-circle"
                                        src={icon2}
                                        alt="profile"
                                      />
                                    </div>
                                    <div className="col-8">
                                      <h4 className="card-title">
                                        Proof of address
                                      </h4>
                                      <p className="card-description">
                                        Upload your proof of your address to
                                        identify your information. you have
                                        options to choose from e.g electricity
                                        bills etc.
                                      </p>
                                      <div className="text-right">
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          data-toggle="modal"
                                          data-target="#uploadPOA"
                                        >
                                          <span className="fa fa-plus"></span>
                                          Upload
                                        </button>
                                      </div>
                                      <div
                                        className="modal fade"
                                        id="uploadPOA"
                                        tabindex="-1"
                                        role="dialog"
                                        aria-labelledby="POAlabel"
                                        aria-hidden="true"
                                      >
                                        <div
                                          className="modal-dialog"
                                          role="document"
                                        >
                                          <div className="modal-content">
                                            <div className="modal-header">
                                              <h5
                                                className="modal-title"
                                                id="POAlabel"
                                              >
                                                Proof of Address
                                              </h5>
                                              <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true"
                                                >&times;</span
                                                >
                                              </button>
                                            </div>
                                            <div className="modal-body">
                                              <div className="form-group">
                                                <label
                                                >Choose your preferred document
                                                  <span className="text-danger"
                                                  >*</span
                                                  ></label
                                                >
                                                <select
                                                  className="form-control form-control-lg"
                                                >
                                                  <option>Utility Bill</option>
                                                  <option>Bank Statement</option>
                                                  <option>Credit Card statement</option>
                                                  <option>Mortgage Statement</option>
                                                  <option>Internet Bills</option>
                                                </select>
                                              </div>
                                              <div className="input-group mb-3">

                                                <div
                                                  className="custom-file"
                                                >
                                                  <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile02"
                                                  />
                                                  <label
                                                    className="custom-file-label"
                                                    for="inputGroupFile02"
                                                    aria-describedby="inputGroupFileAddon02"
                                                  >Choose file</label
                                                  >
                                                </div>
                                              </div>
                                              <div className="text-right">
                                                <button
                                                  className="btn btn-secondary"
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

                              <div className="col-xl-6 p-3">
                                <div className="card p-3">
                                  <div className="row">
                                    <div className="col-2">
                                      <img
                                        className="img-sm rounded-circle"
                                        src={icon1}
                                        alt="profile"
                                      />
                                    </div>
                                    <div className="col-8">
                                      <h4 className="card-title">
                                        Business Certificate
                                      </h4>
                                      <p className="card-description">
                                        Upload Business Certificate or any
                                        documents relevant to your business
                                      </p>
                                      <div className="text-right">
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm"
                                          data-toggle="modal"
                                          data-target="#uploadBusinessCertificate"
                                        >
                                          <span className="fa fa-plus"></span>
                                          Upload
                                        </button>
                                      </div>
                                      <div
                                        className="modal fade"
                                        id="uploadBusinessCertificate"
                                        tabindex="-1"
                                        role="dialog"
                                        aria-labelledby="businessCertificateLabel"
                                        aria-hidden="true"
                                      >
                                        <div
                                          className="modal-dialog"
                                          role="document"
                                        >
                                          <div className="modal-content">
                                            <div className="modal-header">
                                              <h5
                                                className="modal-title"
                                                id="businessCertificateLabel"
                                              >
                                                Business Certificate
                                              </h5>
                                              <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true"
                                                >&times;</span
                                                >
                                              </button>
                                            </div>
                                            <div className="modal-body">
                                              <div className="input-group mb-3">
                                                <div className="custom-file">
                                                  <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputGroupFile02"
                                                  />
                                                  <label
                                                    className="custom-file-label"
                                                    for="inputGroupFile02"
                                                    aria-describedby="inputGroupFileAddon02"
                                                  >Choose file</label
                                                  >
                                                </div>
                                              </div>
                                              <div className="text-right">
                                                <button
                                                  className="btn btn-secondary"
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
          <footer className="footer">
            <div className="justify-content-center justify-content-sm-between">
              <span className="text-center text-sm-left d-block d-sm-inline-block"
              >Copyright © 2019. All rights reserved.</span
              >
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Compliance;