import './App.css';
import Navbar from '../resources/components/navbar/App';
import logo_Men_Armed from '../resources/img/profile-picture.jpg'

function YAgenda() {
  return (
    /* Navigation Bar */
        <div>
            <Navbar/>

          <div className='container-fluid'>
            
            {/* Armed 2 */}
            <div className='container agenda-box-container'>
              <div className='row'>
                <div className='col-sm-12 col-md-5 col-lg-5 border rounded'>
                  <div className='row align-items-center'>
                    <div className='col-4'>
                      <img src={logo_Men_Armed} alt='picture' className='branch-logo'></img>
                    </div>
                    <div className='col-8'>
                      <div className='agenda-box-title'>
                        <p>GBI Suropati</p>
                      </div>
                      <div className='agenda-box-subtitle'>
                        <p>Cabang Men Armed</p>
                      </div>
                    </div>
                  </div>

                  <div className='align-items-center'>
                    <p>Jl. Panglima Sudirman 14 Rampal, Malang</p>
                  </div>
                  
                </div>
                <div className='col border rounded agenda-text'>
                  <div className='border-bottom'>
                    <div className='row'>
                      <div className='col'>
                        <p>Ibadah Raya 1 : Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>08:00 - 10:00</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <p>Sekolah Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>08:00 - 09:00</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='row'>
                      <div className='col'>
                        <p>Ibadah Raya 2 : Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>17:00 - 19:00</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <p>Sekolah Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>17:00 - 19:00</p>
                      </div>
                    </div>
                  </div>

                  <div></div>

                </div>
              </div>
            </div>

            {/* Swissbelin */}
            <div className='container agenda-box-container'>
              <div className='row'>
                <div className='col-sm-12 col-md-5 col-lg-5 border rounded'>
                  <div className='row align-items-center'>
                    <div className='col-4'>
                      <img src={logo_Men_Armed} alt='picture' className='branch-logo'></img>
                    </div>
                    <div className='col-8'>
                      <div className='agenda-box-title'>
                        <p>GBI Suropati</p>
                      </div>
                      <div className='agenda-box-subtitle'>
                        <p>Cab. Swissbelin - TransMart</p>
                      </div>
                    </div>
                  </div>

                  <div className='align-items-center'>
                    <p>Jl. Veteran 8A, Belakang TransMart (Ex Royal ATK), Malang</p>
                  </div>
                  
                </div>
                <div className='col border rounded agenda-text'>
                  <div className='border-bottom'>
                    <div className='row'>
                      <div className='col'>
                        <p>Ibadah Raya 1 : Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>10:00 - 12:00</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <p>Sekolah Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>10:30 - 12:00</p>
                      </div>
                    </div>
                  </div>

                  <div className='border-bottom'>
                    <div className='row'>
                      <div className='col'>
                        <p>Ibadah Raya 2 : Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>12:00 - 14:00</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <p>Sekolah Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>12:30 - 14:00</p>
                      </div>
                    </div>
                  </div>

                  <div className='border-bottom'>
                    <div className='row'>
                      <div className='col'>
                        <p>Ibadah Raya 3 : Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>16:00 - 18:00</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <p>Sekolah Minggu</p>
                      </div>
                      <div className='col-3'>
                        <p>16:30 - 18:00</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='row'>
                      <div className='col'>
                        <p>NextGEN : Sabtu</p>
                      </div>
                      <div className='col-3'>
                        <p>17:00 -</p>
                      </div>
                    </div>
                  </div>

                  <div></div>

                </div>
              </div>
            </div>

            {/* Sekretariat */}
            <div className='container agenda-box-container'>
              <div className='row'>
                <div className='col-sm-12 col-md-5 col-lg-5 border rounded'>
                  <div className='row align-items-center'>
                    <div className='col-4'>
                      <img src={logo_Men_Armed} alt='picture' className='branch-logo'></img>
                    </div>
                    <div className='col-8'>
                      <div className='agenda-box-title'>
                        <p>GBI Suropati</p>
                      </div>
                      <div className='agenda-box-subtitle'>
                        <p>Sekretariat</p>
                      </div>
                    </div>
                  </div>

                  <div className='align-items-center'>
                    <p>Jl. Veteran 8A, Belakang TransMart (Ex Royal ATK), Malang</p>
                  </div>
                  
                </div>
                <div className='col border rounded agenda-text'>
                  <div className='border-bottom'>
                    <div className='row'>
                      <div className='col'>
                        <p>Rumah Doa Pagi : Selasa - Sabtu</p>
                      </div>
                      <div className='col-3'>
                        <p>04:45 - 05:45</p>
                      </div>
                    </div>
                  </div>

                  <div className='border-bottom'>
                    <div className='row'>
                      <div className='col'>
                        <p>Rumah Doa 10-12 : Senin - Jumat</p>
                      </div>
                      <div className='col-3'>
                        <p>10:00 - 12:00</p>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <p>Doa Puasa Sabtu</p>
                      </div>
                      <div className='col-3'>
                        <p>10:00 - 12:00</p>
                      </div>
                    </div>
                  </div>

                  <div className='border-bottom'>
                    <div className='row'>
                      <div className='col'>
                        <p>Menara Doa : Senin - Sabtu</p>
                      </div>
                      <div className='col-3'>
                        <p>12:00 - 21:00</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='row'>
                      <div className='col'>
                        <p>Ibadah Doa Malam Online : Sabtu Melalui Youtube</p>
                      </div>
                      <div className='col-3'>
                        <p>18:00 -</p>
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

export default YAgenda;