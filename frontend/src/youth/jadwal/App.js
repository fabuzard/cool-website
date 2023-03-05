import './App.css';
import Navbar from '../resources/components/navbar/App'




// function dynamicDate() {
//     var todayDate = Date(Date.now());
//     const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     const date_arr = todayDate.toString().split(" ");
//     let currentDayInWeek = day.indexOf(date_arr[0]);

//     let position; // posisi hari di halaman ( min=1 , sab=7)
//     let current_d; // id harian di jadwal.html

//     for(let i=0;i<7;i++){

//         // Cari posisi hari ini antara min - sab
//         if(date_arr[0] == day[i]) {
//             position = i+1;
//             current_d = 'd'.concat(position);
//         }
//     }


    

//     for(let i=0;i<7;i++){
//         let d_temp = i+1;
//         if('d'.concat(d_temp) !== current_d){
//             Jadwal.getElementById('d'.concat(d_temp)).innerHTML = parseInt(date_arr[2]) - (position - d_temp);
//         }
//         else{
//             Jadwal.getElementById(current_d).innerHTML = date_arr[2];
//             Jadwal.getElementById(current_d).style.color = "#50BBE9";
//             Jadwal.getElementById('d-l-'.concat(d_temp)).style.color = "#50BBE9";
//         }
//     }
// }

function YJadwal() {

    var todayDate = Date(Date.now());
    let d1,d2,d3,d4,d5,d6,d7;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const date_arr = todayDate.toString().split(" ");
    let currentDayInWeek = day.indexOf(date_arr[0]);

    let position; // posisi hari di halaman ( min=1 , sab=7)
    let current_d; // id harian di jadwal.html

    for(var i=0;i<7;i++){

        // Cari posisi hari ini antara min - sab
        if(date_arr[0] == day[i]) {
            position = i+1;
            current_d = 'd'.concat(position);
        }
    }


    

    for(var i=0;i<7;i++){
        let d_temp = i+1;
        if('d'.concat(d_temp) !== current_d){
            window['d'.concat(d_temp)] = parseInt(date_arr[2]) - (position - d_temp);
            console.log(window['d'.concat(d_temp)])
        }
        else{
            window[(current_d)] = date_arr[2];
            // window[(current_d).style.color] = "#50BBE9";
            // window['d-l-'.concat(d_temp)].style.color = "#50BBE9";
        }
    }

  return (


    <div>
        {/* Navigation Bar */}
            <Navbar/>

        {/* Page Content */}
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 col-md-12 col-sm-12'>
                    <div className='row container'>
                        <div className='col'>
                            <div className='row py-3'>
                                <div className='col-2 col-hour'></div> {/* Empty space */}
                                <div className='col'>Min</div>
                                <div className='col'>Sen</div>
                                <div className='col'>Sel</div>
                                <div className='col'>Rab</div>
                                <div className='col'>Kam</div>
                                <div className='col'>Jum</div>
                                <div className='col'>Sab</div>
                            </div>
                        </div>
                        <div className='col-1 col-slider'></div> {/* Empty space */}
                    </div>

                    <div className='row container time-container border border-danger-subtle rounded'>
                        <div className='py-4'>
                            <div className='col'>
                                <div className='row'> {/* 00:00 */}
                                    <div className='col-2 col-hour'>00:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 01:00 */}
                                    <div className='col-2 col-hour'>01:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 02:00 */}
                                    <div className='col-2 col-hour'>02:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 03:00 */}
                                    <div className='col-2 col-hour'>03:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 04:00 */}
                                    <div className='col-2 col-hour'>04:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 05:00 */}
                                    <div className='col-2 col-hour'>05:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 06:00 */}
                                    <div className='col-2 col-hour'>06:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 07:00 */}
                                    <div className='col-2 col-hour'>07:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 08:00 */}
                                    <div className='col-2 col-hour'>08:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 09:00 */}
                                    <div className='col-2 col-hour'>09:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 10:00 */}
                                    <div className='col-2 col-hour'>10:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 11:00 */}
                                    <div className='col-2 col-hour'>11:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 12:00 */}
                                    <div className='col-2 col-hour'>12:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 13:00 */}
                                    <div className='col-2 col-hour'>13:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 14:00 */}
                                    <div className='col-2 col-hour'>14:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 15:00 */}
                                    <div className='col-2 col-hour'>15:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 16:00 */}
                                    <div className='col-2 col-hour'>16:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 17:00 */}
                                    <div className='col-2 col-hour'>17:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 18:00 */}
                                    <div className='col-2 col-hour'>18:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 19:00 */}
                                    <div className='col-2 col-hour'>19:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 20:00 */}
                                    <div className='col-2 col-hour'>20:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 21:00 */}
                                    <div className='col-2 col-hour'>21:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 22:00 */}
                                    <div className='col-2 col-hour'>22:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                                <div className='row'> {/* 23:00 */}
                                    <div className='col-2 col-hour'>23:00</div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                    <div className='col border border-dark-subtle'></div>
                                </div>

                            </div>
                            <div className='col-1 col-slider'></div> {/* Empty space */}
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-12 col-lg 5'>
                    <div className='container box-calendar border border-danger-subtle rounded my-3'>
                        <div className='container mx-2'>
                            <div className='box-calendar-header py-3'>
                                <div className='row'>
                                    <div className='col-4 icon-left-arrow'>&lt;</div>
                                    <div className='col month align-items-center'>Februari, 2023</div>
                                    <div className='col-1 icon-right-arrow'>&gt;</div>
                                </div>
                            </div>
                            <div className='box-calendar-body py-3 mx-3'>
                                <div className='row'>
                                    <div className='col'><p>M</p></div>
                                    <div className='col'><p>S</p></div>
                                    <div className='col'><p>S</p></div>
                                    <div className='col'><p>R</p></div>
                                    <div className='col'><p>K</p></div>
                                    <div className='col'><p>J</p></div>
                                    <div className='col'><p>S</p></div>
                                </div>
                                
                                <div className='row calendar-date'>
                                    <div className='col'>29</div>
                                    <div className='col'>30</div>
                                    <div className='col'>31</div>
                                    <div className='col'>1</div>
                                    <div className='col'>2</div>
                                    <div className='col'>3</div>
                                    <div className='col'>4</div>
                                </div>
                                <div className='row calendar-date'>
                                    <div className='col'>5</div>
                                    <div className='col'>6</div>
                                    <div className='col'>7</div>
                                    <div className='col'>8</div>
                                    <div className='col'>9</div>
                                    <div className='col'>10</div>
                                    <div className='col'>11</div>
                                </div>
                                <div className='row calendar-date'>
                                    <div className='col'>12</div>
                                    <div className='col'>13</div>
                                    <div className='col'>14</div>
                                    <div className='col'>15</div>
                                    <div className='col'>16</div>
                                    <div className='col'>17</div>
                                    <div className='col'>18</div>
                                </div>
                                <div className='row calendar-date'>
                                    <div className='col'>19</div>
                                    <div className='col'>20</div>
                                    <div className='col'>21</div>
                                    <div className='col'>22</div>
                                    <div className='col'>23</div>
                                    <div className='col'>24</div>
                                    <div className='col'>25</div>
                                </div>
                                <div className='row calendar-date'>
                                    <div className='col'>26</div>
                                    <div className='col'>27</div>
                                    <div className='col'>28</div>
                                    <div className='col'>1</div>
                                    <div className='col'>2</div>
                                    <div className='col'>3</div>
                                    <div className='col'>4</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container box-today-activity border border-danger-subtle rounded my-4'>
                        <div className='container box-today-activity-header py-3'>
                            <div className='box-today-activity-header-title'>
                                <h4>Hari Ini</h4>
                            </div>
                        </div>
                        <div className='container box-today-activity-body' style={{marginBottom:'50px'}}>
                            <div className='box-today-activity-body-content border border-info rounded'>
                                <button type='button' className='btn box-today-activity-body-content-btn'>
                                    <div className='row'>
                                        <div className='col'>
                                            <p>First Meet C.O.O.L Melati @Taman Ria Malang</p>
                                        </div>
                                        <div className='col'>
                                            <p>Selasa 08/02/2023 08:30 - 10:00 WIB</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default YJadwal;