import './App.css';
import Navbar from '../resources/components/navbar/App';
import ProfilePicture from '../resources/img/profile-picture.jpg';
import ProfileBanner from '../resources/img/profile-banner.jpg';
import DefaultProfilePicture from '../resources/img/default-profile-picture.png'
import DefaultChurchIcon from './img/default-church-icon.png'
import EditIcon from './img/edit-icon.png'
function YBiodata() {
  return (
    <div className='container-fluid'>
        {/* Navigation Bar */}
        <Navbar/>

        {/* Page content */}
        <div className='container'>

            {/* -- Biodata Start -- */}
              <div className='container-logo my-2'>
                <div className='profile-banner-container'>
                  <img src={ProfileBanner} alt='' className='profile-banner-content'></img>
                </div>
                <div className='row'>
                  <div className='col-sm-12 col-md-3 col-lg-3'>
                    <div className='profile-picture-container'>
                      <img src={ProfilePicture} className='profile-picture-content border rounded-circle'></img>
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-6 col-lg-6'>
                    <h3>Shenna Amalia</h3>
                  </div>
                  <div className='col-sm-6 col-md-3 col-lg-3 align-items-end'>
                    <div className='container'>
                      <button type='button' className='btn btn-outline-secondary' id='edit-profile-btn'>
                        <div className='row'>
                          <div className='col-4'>
                            <img src={EditIcon} alt='' id='edit-profile-icon'></img>
                          </div>
                          <div className='col-8'>
                            <p style={{fontSize:'22px'}}>Edit Profil</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ^^ Biodata End ^^ */}

              <div className='row'>
                <div className='col-sm-12 col-md-5 col-lg-5'>
                  <div className='container border border-dark-subtle rounded my-2 user-data-container'>
                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-title'>Pengerja ID</p>
                        </div>
                      </div>

                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-text'>ShennaA31</p>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-title'>Nomor Telepon</p>
                        </div>
                      </div>
                      
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-text'>081234567890</p>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-title'>Nama COOL</p>
                        </div>
                      </div>
                      
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-text'>COOL 1</p>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-title'>Tempat Lahir</p>
                        </div>
                      </div>
                      
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-text'>Medan</p>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-title'>Tanggal Lahir</p>
                        </div>
                      </div>
                      
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-text'>12 Januari 1999</p>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-title'>Status</p>
                        </div>
                      </div>
                      
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-text'>Mahasiswa</p>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-title'>Domisili</p>
                        </div>
                      </div>
                      
                      <div className='col'>
                        <div className='container'>
                          <p className='user-data-text'>Malang</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='col-sm-12 col-md-7 col-lg-7'>
                  <div className='container content-title'>
                    <p style={{fontSize:'28px',fontWeight:'bolder'}}>Jadwal Pelayanan Usher</p>
                  </div>  
                  <div className='content-body'>
                    <div className='row'>
                      <div className='col'>
                        <div className='container'>
                          <p style={{fontSize:'24px'}}>Sabtu, 12 Febuari 2023</p>
                        </div>
                      </div>

                      <div className='col'>
                        <div className='container'>
                          <p style={{fontSize:'24px'}} className='text-end'>Lihat Semua &gt;</p>
                        </div>
                      </div>
                    </div>

                    <div className='row my-2'>
                      <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className='container-fluid border border-dark-subtle rounded'>
                          <div className='box-header'>
                           <div className='row'>
                              <div className='col-sm-12 col-md-12 col-lg-3'>
                                <div className='box-header-icon'>
                                  <img src={DefaultChurchIcon} alt='icon' className='default-church-icon'></img>
                                </div>
                              </div>

                              <div className='col-sm-12 col-md-12 col-lg-9'>
                                <div className='box-header-text-container'>
                                  <p className='box-header-text'>Armed 1 - 08:00</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='box-body border-top border-dark-subtle'>
                            <div className='box-body-text'><p>Shenna - COOL ALETHEIA</p></div>
                            <div className='box-body-text'><p>Tanti - COOL ALETHEIA</p></div>
                            <div className='box-body-text'><p>Shenna - COOL ALETHEIA</p></div>
                          </div>
                        </div>
                      </div>

                      <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className='container-fluid border border-dark-subtle rounded'>
                          <div className='box-header'>
                            <div className='row'>
                              <div className='col-sm-12 col-md-12 col-lg-3'>
                                <div className='box-header-icon'>
                                  <img src={DefaultChurchIcon} alt='icon' className='default-church-icon'></img>
                                </div>
                              </div>

                              <div className='col-sm-12 col-md-12 col-lg-9'>
                                <div className='box-header-text-container'>
                                  <p className='box-header-text'>Armed 2 - 16:00</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='box-body border-top border-dark-subtle'>
                            <div className='box-body-text'><p>Shenna - COOL ALETHEIA</p></div>
                            <div className='box-body-text'><p>Tanti - COOL ALETHEIA</p></div>
                            <div className='box-body-text'><p>Shenna - COOL ALETHEIA</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>

    </div>
        
  );
}

export default YBiodata;