import './App.css';
import brandLogo from '../../img/cool-logo.png';
import jadwalLogo from './jadwal_icon.svg'
import renunganLogo from './renungan_icon.svg'
import agendaLogo from './agenda_icon.svg'

function Navbar() {

    const getPath = window.location.pathname;

    let defaultItemClass = 'nav-item mx-3';
    let defaultLinkClass = 'nav-link navbarContent';
    let defaultImgClass = '';

    let jadwal_item = defaultItemClass;
    let jadwal_link = defaultLinkClass;
    let jadwal_img = defaultImgClass;

    let renungan_item = defaultItemClass;
    let renungan_link = defaultLinkClass;
    let renungan_img = defaultImgClass;


    let agenda_item = defaultItemClass;
    let agenda_link = defaultLinkClass;
    let agenda_img = defaultImgClass;

    let biodata_item = defaultItemClass.concat(defaultItemClass, ' dropdown');
    let biodata_link = defaultLinkClass.concat(defaultLinkClass, ' dropdown-toggle');

    if (getPath === '/jadwal'){
        jadwal_item = jadwal_item.concat(' ', 'itemActive');
        jadwal_link = jadwal_link.concat(' ', 'linkActive');
        jadwal_img = jadwal_img.concat(' ', 'imgActive');
        console.log(jadwal_item, jadwal_link)
    }
    else if (getPath === '/renungan'){
        renungan_item = renungan_item.concat(' ', 'itemActive');
        renungan_link = renungan_link.concat(' ', 'linkActive');
        renungan_img = jadwal_img.concat(' ', 'imgActive');
        console.log(renungan_item, renungan_link)
    }
    else if (getPath === '/agenda'){
        agenda_item = agenda_item.concat(' ', 'itemActive');
        agenda_link = agenda_link.concat(' ', 'linkActive');
        agenda_img = jadwal_img.concat(' ', 'imgActive');
        console.log(agenda_item, agenda_link)

    }else if (getPath === '/biodata') {
        biodata_item = biodata_item.concat(' ', 'itemActive');
        biodata_link = biodata_link.concat(' ', 'linkActive');
        console.log(biodata_item, biodata_link)
    }
    

    
  return (
    /* Navigation Bar */
        <nav className="navbar navbar-expand-lg navbarBackground sticky-top">

            <div className="container-fluid mx-5">
                <a className="navbar-brand" href="/login">
                    <img src={brandLogo} alt="gbi-suropati-malang" width={'100%'} height={'100px'} ></img>
                </a>
                <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

                    <ul className="navbar-nav">
                        <li className={jadwal_item}>
                            <a className={jadwal_link} aria-current="page" href="/jadwal">
                                <div className='row navbarItemContainer text-center'>
                                    <div className='col-1'>
                                        <img src={jadwalLogo} alt='' className={jadwal_img}></img>
                                    </div>
                                    <div className='col-1'>Jadwal</div>
                                </div>
                            </a>
                        </li>
                        <li className={renungan_item}>
                            <a className={renungan_link} id='navbar-renungan' href="/renungan">
                                <div className='row navbarItemContainer text-center'>
                                    <div className='col-1'>
                                        <img src={renunganLogo} alt='' className={renungan_img}></img>
                                    </div>
                                    <div className='col-1'>Renungan</div>
                                </div>
                            </a>
                        </li>
                        <li className={agenda_item}>
                            <a className={agenda_link} href="/agenda">
                                <div className='row navbarItemContainer text-center'>
                                    <div className='col-1'>
                                        <img src={agendaLogo} alt='' className={agenda_img}></img>
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