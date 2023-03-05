import './App.css';
import BrandLogo from './youth/resources/img/cool-logo.png'
import Navbar from './youth/resources/components/navbar/App';

function YLogin() {
  return (

    <div className='container align-items-center'>
        <div className='login-brand-logo'>
            <img src={BrandLogo} alt='cool' className='login-brand-logo-content'></img>
        </div>
        <div className='h1'>
            <p>Masuk Admin C.O.O.L</p>
        </div>
        <form action='/admin/kakak-cool' method='get'>
            <div className='ID'>
                <div>
                    <p>Pengerja ID / Nomor Telepon</p>
                </div>
                <div>
                    <input type='text'></input>
                </div>
            </div>

            <div className='Password'>
                <div>
                    <p>Kata Sandi</p>
                </div>
                <div>
                    <input type='password'></input>
                </div>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  );
}

export default YLogin;