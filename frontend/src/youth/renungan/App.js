import './App.css';
import Navbar from '../resources/components/navbar/App';

//resources
import bookmarkLogo from './bookmark-logo.png'

function YRenungan() {
  return (
        <div>
          {/* Navigation Bar */}
          <Navbar/>

          {/* Page Content */}
          <div className='container'>
            <div className='row my-3'>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='box-verse-container'>
                  <button type='button' className='btn border border-danger-subtle box-verse'>
                    <p style={{fontSize:'22px'}}>Januari 2023</p>
                  </button>
                </div>
                
                <div className='box-verse-container'>
                  <button type='button' className='btn border border-danger-subtle box-verse'>
                    <div className='box-title'>
                      <p>Konsumsi & Kontribusi</p>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>Bacaan : Kisah Para Rasul 9 : 36-43</p>
                      </div>
                      <div className='col'>
                        <p>Sabtu, 06 Januari 2023</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className='box-verse-container'>
                 <button type='button' className='btn border border-danger-subtle box-verse'>
                    <div className='box-title'>
                      <p>Konsumsi & Kontribusi</p>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>Bacaan : Kisah Para Rasul 9 : 36-43</p>
                      </div>
                      <div className='col'>
                        <p>Sabtu, 06 Januari 2023</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className='box-verse-container'>
                  <button type='button' className='btn border border-danger-subtle box-verse'>
                    <div className='box-title'>
                     <p>Konsumsi & Kontribusi</p>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>Bacaan : Kisah Para Rasul 9 : 36-43</p>
                      </div>
                      <div className='col'>
                        <p>Sabtu, 06 Januari 2023</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='renungan-content'>
                  <div className='box'>
                    <div className='content-title'>
                      <h2>Konsumsi & Kontribusi</h2>
                    </div>
                    <div className='content-description'>
                      <p>Bacaan : Kisah Para Rasul 9 : 36-43</p>
                    </div>
                  </div>

                  <div className='content-text'>
                    <p>
                      Tuhan menciptakan manusia sebagai sarana penerima berkat dari-Nya. Namun demikian, Dia juga menciptakan manusia sebagai sarana penyalur berkat bagi orang lain. Tidak hanya berfokus kepada kebutuhan atau keinginan diri sendiri, Tuhan rindu kita memperhatikan kehidupan orang lain. Saat dunia lantang berseru, “Ambil semua yang bisa Anda dapat!” Tuhan berbisik, “Bagikan sebagian yang kau terima dari-Ku kepada orang lain yang membutuhkan!” Sulitkah hal ini kita lakukan? Tidak, sekiranya kita menyadari segala yang kita miliki bukan milik kita sendiri, melainkan pemberian Tuhan.
</p><p>
                      Tuhan, Sang Pemberi Berkat, rindu kita tidak sekadar mengonsumsi, tetapi juga berkontribusi. Dorkas adalah teladan seorang yang menjawab kerinduan hati Tuhan. Faktanya, firman Tuhan tidak menyebut Dorkas sebagai seorang kaya atau miskin. Ia disebut sebagai perempuan yang banyak sekali berbuat baik dan memberi sedekah (ay. 36). Segala berkat yang Dorkas terima dari Tuhan, tidak habis untuk konsumsi diri sendiri, tetapi ia kontribusikan sebagian untuk membantu para janda yang berkekurangan (ay. 39). Tidak heran orang-orang menginginkan Dorkas hidup lebih lama di dunia.
</p><p>
                      Tidak salah kita mengharapkan kelimpahan berkat dari Tuhan. Tidak salah pula kita menikmati berkat-berkat Tuhan. Hanya saja jangan pernah kita melupakan orang-orang di sekitar kita yang membutuhkan bantuan. Alih-alih serakah mengonsumsi, milikilah hati yang mau berkontribusi. Tidak perlu khawatir. Kebahagiaan kita tidak akan berkurang, tetapi justru bertambah-tambah. Ingatlah firman Tuhan mengatakan, “Lebih berbahagia memberi daripada menerima.” (Kis. 20:35). Hari ini, selain mengonsumsi berkat, mari kita bersedia berkontribusi.
                    </p>
                  </div>
                </div>

                <div className='col-12 align-items-center'>
                  <button type='button' className='btn border border-danger-subtle box-hover'>
                    <p><img src={bookmarkLogo} alt='BM_logo' style={{height:'18px', width:'auto'}}></img>Simpan</p>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
  );
}

export default YRenungan;