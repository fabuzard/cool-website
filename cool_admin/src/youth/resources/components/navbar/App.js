import './App.css';
import brandLogo from '../../img/cool-logo.png';
import jadwalLogo from './jadwal_icon.svg'
import renunganLogo from './renungan_icon.svg'
import agendaLogo from './agenda_icon.svg'

const getPath = window.location.pathname;

    let defaultItemAttr = 'btn nav-btn';

    let anggota_cool_btn = defaultItemAttr;
    let kakak_cool_btn = defaultItemAttr;
    let jadwal_kegiatan_btn = defaultItemAttr;
    let renungan_btn = defaultItemAttr;
    let agenda_btn = defaultItemAttr;
    let persentase_btn = defaultItemAttr;

    const defaultPath = '/admin'

    if (getPath === defaultPath+'/anggota-cool'){
        anggota_cool_btn = anggota_cool_btn.concat(' ', 'isActive');
    }else if (getPath === defaultPath+'/kakak-cool'){
        kakak_cool_btn = kakak_cool_btn.concat(' ', 'isActive');
    }else if (getPath === defaultPath+'/jadwal-kegiatan'){
        jadwal_kegiatan_btn = jadwal_kegiatan_btn.concat(' ', 'isActive');
    }else if (getPath === defaultPath+'/renungan') {
        renungan_btn = renungan_btn.concat(' ', 'isActive');
    }else if (getPath === defaultPath+'/agenda') {
        agenda_btn = agenda_btn.concat(' ', 'isActive');
    }else if (getPath === defaultPath+'/persentase-kegiatan') {
        persentase_btn = persentase_btn.concat(' ', 'isActive');
    }

function Navbar() {
    

    
  return (
    /* Navigation Bar */
    <div className='nav-tab-container'>
        <div className='brand-logo'>
            <img src={brandLogo} className='brand-logo-content'></img>
        </div>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="anggota-cool">
                    <button type='btn' className={anggota_cool_btn}>
                        Anggota Cool
                    </button>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="kakak-cool">
                    <button type='btn' className={kakak_cool_btn}>
                        Kakak Cool
                    </button>
                </a>
                
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <button type='btn' className={jadwal_kegiatan_btn}>
                        Jadwal Kegiatan
                    </button>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <button type='btn' className={renungan_btn}>
                        Renungan
                    </button>
                </a>                
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <button type='btn' className={agenda_btn}>
                        Agenda
                    </button>
                </a>                
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <button type='btn' className={persentase_btn}>
                        Persentase Kegiatan
                    </button>
                </a>                
            </li>
            <li className="nav-item">
                <a className="nav-link" href={defaultPath}>
                    <button type='btn' className='btn nav-btn'>
                        Logout
                    </button>
                </a>                
            </li>
        </ul>
    </div>
  );
}

export default Navbar;