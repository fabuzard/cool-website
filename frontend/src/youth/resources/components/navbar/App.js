import './App.css';
import brandLogo from '../../img/cool-logo.png';
import jadwalLogo from './jadwal_icon.svg'
import renunganLogo from './renungan_icon.svg'
import agendaLogo from './agenda_icon.svg'

function Navbar() {

    const getPath = window.location.pathname;

    let defaultItemAttr = 'nav-item mx-3';
    let defaultLinkAttr = 'nav-link navbarText';

    let jadwal_item = defaultItemAttr;
    let jadwal_link = defaultLinkAttr;

    let renungan_item = defaultItemAttr;
    let renungan_link = defaultLinkAttr;


    let agenda_item = defaultItemAttr;
    let agenda_link = defaultLinkAttr;

    let biodata_item = defaultItemAttr.concat(defaultItemAttr, ' dropdown');
    let biodata_link = defaultLinkAttr.concat(defaultLinkAttr, ' dropdown-toggle');

    if (getPath === '/jadwal'){
        jadwal_item = jadwal_item.concat(' ', 'active');
        jadwal_link = jadwal_link.concat(' ', 'active');
        console.log(jadwal_item, jadwal_link)
    }
    else if (getPath === '/renungan'){
        renungan_item = renungan_item.concat(' ', 'active');
        renungan_link = renungan_link.concat(' ', 'active');
        console.log(renungan_item, renungan_link)
    }
    else if (getPath === '/agenda'){
        agenda_item = agenda_item.concat(' ', 'active');
        agenda_link = agenda_link.concat(' ', 'active');
        console.log(agenda_item, agenda_link)

    }else if (getPath === '/biodata') {
        biodata_item = biodata_item.concat(' ', 'active');
        biodata_link = biodata_link.concat(' ', 'active');
        console.log(biodata_item, biodata_link)
    }
    

    
  return (
    /* Navigation Bar */
        <nav className="navbar navbar-expand-lg navbarBackground sticky-top">

            <div className="container-fluid mx-5">
                <a className="navbar-brand" href="/login">
                    <img src={brandLogo} alt="gbi-suropati-malang" width={'100%'} height={'100px'} ></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

                    <ul className="navbar-nav justify-content-end">
                        <li className={jadwal_item}>
                            <a className={jadwal_link} aria-current="page" href="/jadwal">
                                <div className='row navbarItemContaine text-center'>
                                    <div className='col-1'>
                                        <img src={jadwalLogo} alt=''></img>
                                    </div>
                                    <div className='col-1'>Jadwal</div>
                                </div>
                            </a>
                        </li>
                        <li className={renungan_item}>
                            <a className={renungan_link} id='navbar-renungan' href="/renungan">
                                <div className='row navbarItemContaine text-center'>
                                    <div className='col-1'>
                                        <img src={renunganLogo} alt=''></img>
                                    </div>
                                    <div className='col-1'>Renungan</div>
                                </div>
                            </a>
                        </li>
                        <li className={agenda_item}>
                            <a className={agenda_link} href="/agenda">
                                <div className='row navbarItemContaine text-center'>
                                    <div className='col-1'>
                                        <img src={agendaLogo} alt=''></img>
                                    </div>
                                    <div className='col-1'>Agenda</div>
                                </div>
                            </a>
                        </li>
                        <li className={biodata_item}>
                            <a className={biodata_link} role='button' data-bs-toggle="dropdown" aria-expanded="false">
                                Shenna A.   
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/biodata">Biodata</a></li>
                                <li><a className="dropdown-item" href="/">Logout</a></li>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
         </nav>
  );
}

export default Navbar;