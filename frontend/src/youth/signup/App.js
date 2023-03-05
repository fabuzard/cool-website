import React, { useState } from 'react'
import './App.css';
import Signup from '../../resources/scripts/apiRequests'
import Cookies, { useCookies } from 'react-cookie'

// var csrfToken = getCookies('csrftoken')
// console.log(csrfToken)

function YSignup() {

    const [Pengerja_id, setPengerja_id] = useState('');
    const handlePengerja_idChange = (event) => {
        setPengerja_id(event.target.value);
    };

    const [Re_Pengerja_id, setRe_Pengerja_id] = useState('');
    const handleRe_Pengerja_idChange = (event) => {
        setRe_Pengerja_id(event.target.value);
    };

    const [Nomor_telepon, setNomor_telepon] = useState('');
    const handleNomor_teleponChange = (event) => {
        setNomor_telepon(event.target.value);
    };

    const [Password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const [Re_Password, setRe_Password] = useState('');
    const handleRe_PasswordChange = (event) => {
        setRe_Password(event.target.value);
    };

    const [cookies, setCookie, removeCookie] = useCookies(['csrf'])

    const handleSubmit = (event) => {
        console.log(Pengerja_id, Nomor_telepon, Password)
        console.log(cookies)
        event.preventDefault();
        const requestBody = JSON.stringify({
            username : Pengerja_id,
            password : Password,
            re_password : Re_Password,
        });

        console.log(requestBody)
        fetch('http://localhost:8000/api/csrf_cookie');
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json',
                    'X-CSRFToken': cookies['csrftoken'],
            body: requestBody,}
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    };

  return (
    
    /* Page Contents */
    <div className="container-fluid">

        <div className="row cool-su-page text-white">

            <div className="col su-box-padding">
                <p style={{fontSize: "48px", fontWeight:"bold",fontStyle:"italic"}}>COOL (Community of Love)</p>
                <p style={{fontSize: "24px"}}>Kesatuan hati, tumbuh bersama, dan memenangkan jiwa.</p>
            </div>

            <div className="col su-box-padding">

                {/* Login Akun COOL */}
                <div className="row mb-3">
                    <h3>Daftar Akun COOL</h3>
                    <p style={{fontSize:"12px"}}>Apakah kamu member COOL? <a href="../../">Masuk akun disini</a> </p>
                </div>


                <form onSubmit={handleSubmit}>
                    {/* box input sign-up */}
                    <div className="row mb-3 su-label-input-box">

                        
                        {/* Pengerja ID */}
                        <div className="row mb-3">
                            <div className="col-sm-6 col-md-6 col-lg-6"><h6>Pengerja ID</h6></div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <input className="tr-input-box" type="number" 
                                value={Pengerja_id} onChange={handlePengerja_idChange}></input>
                            </div>
                        </div>

                        {/* Verifikasi Pengerja ID */}
                        <div className="row mb-3">
                            <div className="col-sm-6 col-md-6 col-lg-6"><h6>Verifikasi Pengerja ID</h6></div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <input className="tr-input-box" type="number"
                                value={Re_Pengerja_id} onChange={handleRe_Pengerja_idChange}></input>
                            </div>
                        </div>

                        {/* No Telepon */}
                        <div className="row mb-3">
                            <div className="col-sm-6 col-md-6 col-lg-6"><h6>No Telepon</h6></div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <input className="tr-input-box" type="number" 
                                value={Nomor_telepon} onChange={handleNomor_teleponChange}></input>
                            </div>
                        </div>

                        {/* Kata Sandi */}
                        <div className="row mb-3">
                            <div className="col-sm-6 col-md-6 col-lg-6"><h6>Kata Sandi</h6></div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <input className="tr-input-box" type="password"
                                value={Password} onChange={handlePasswordChange}></input>
                            </div>
                        </div>

                        {/* Verifikasi Kata Sandi */}
                        <div className="row mb-3">
                            <div className="col-sm-6 col-md-6 col-lg-6"><h6>Verifikasi Kata Sandi</h6></div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <input className="tr-input-box" type="password"
                                value={Re_Password} onChange={handleRe_PasswordChange}></input>
                            </div>
                        </div>
                    
                    </div>

                    {/* Daftar Cool btn */}
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <button type="submit"
                                    className="btn btn-primary su-btn" 
                                    style={{borderRadius:"20px"}}>Daftar COOL</button>
                        </div>
                    </div>
                </form>
                
            </div>

        </div>

    </div>
  );
}

export default YSignup;