import './App.css';

function Login() {
  return (
    <div className='container-fluid'>
      <div className="row cool-login-page text-white">

            <div className="col su-box-padding">
                <p style={{fontSize: "48px", fontWeight:"bold", fontStyle:"italic"}}>COOL (Community of Love)</p>
                
                <p style={{fontSize:"24px"}}>Kesatuan hati, tumbuh bersama, dan memenangkan jiwa.</p>
            </div>

            <div className="col su-box-padding">

                {/*<!-- Daftar Akun COOL -->*/}
                <div className="row mb-3">
                    <h3>Masuk Akun COOL</h3>
                    <p style={{fontSize: "12px"}}>Apakah kamu bukan member COOL? <a href="/signup">
                      Daftar akun disini</a></p>
                </div>


                <form action="/jadwal" method="POST">
                    {/*<!-- Box input login -->*/}
                    <div className="row mb-3 su-label-input-box">

                        {/*<!-- Pengerja ID / no telepon -->*/}
                        <div className="row mb-3">
                            <div className="col-sm-6 col-md-6 col-lg-6"><h6 id="login-title-id">Pengerja ID</h6></div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <input className="tr-input-box" type="text" name="user-id" id="user-id"></input>
                                
                            </div>
                        </div>

                        {/*<!-- kata sandi -->*/}
                        <div className="row mb-3">
                            <div className="col-sm-6 col-md-6 col-lg-6"><h6>Kata Sandi</h6></div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <input className="tr-input-box" type="password" name="password" id="password">
                                </input>
                            </div>
                        </div>

                    </div>

                    {/*<!-- Daftar COOL button -->*/}
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <button type="submit" className="btn btn-primary su-btn" style={{borderRadius:"20px"}}>Masuk COOL</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
      </div>
  );
}

export default Login;