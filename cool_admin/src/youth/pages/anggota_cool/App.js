import './App.css'
import react, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'

import Navbar from '../../resources/components/navbar/App';

import editIcon from '../../resources/img/edit_icon.svg'



// for (var i=0;i<10;i++){

//     setNama = VirtualDB.nama[i]
// };

const virtualDatabase = [
    {nama:'Jezriel', id:'261010', tgl:'	12/01/2000', telp:'081234567890'},
    {nama:'Gabe', id:'231344', tgl:'12/01/2000', telp:'081234567890'},
    {nama:'Gevan', id:'151413', tgl:'12/01/2000', telp:'081234567890'},
    {nama:'Rachel', id:'124415', tgl:'12/01/2000', telp:'081234567890'}
]


// for (const key in obj){
//     window[key]=obj[key]
//     console.log(Object.keys(obj)[0])
// }

// console.log(virtualDatabase.length)
// console.log(virtualDatabase[0])

const Row = (props) => {
    const {nama, id, tgl, telp} = props
    return (
        
        <tr>
            <td>{nama}</td>
            <td>{id}</td>
            <td>{tgl}</td>
            <td>{telp}</td>
            <td><img src={editIcon}></img></td>
        </tr>
    )
}

const Table = (props) => {
    const {data} = props
    return (
        <table className='youth-user-table'>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Pengerja ID</th>
                    <th>Tanggal Lahir</th>
                    <th>No Telepon</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => 
                    <Row nama={row.nama}
                    id={row.id}
                    tgl={row.tgl}
                    telp={row.telp}
                    aksi={row.aksi} />
                )}
            </tbody>
        </table>
    )
}

function YAnggota_Cool() {

    useEffect(() => {
        document.title='Admin Dashboard';
    }, []);

    const [rows, setRows] = useState(virtualDatabase)

    return (

        <div className='container row'>
            <div className='col-5 text-center'>
                <Navbar/>
            </div>
            
            <div className='col my-5'>
                <div>
                    <input type='text' className='search-bar' placeholder='Cari anggota ...'></input>
                </div>

                <div className='text-center'>
                    <Table data = {rows} />
                    {/* <table className='youth-user-table'>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Pengerja ID</th>
                                <th>Tanggal Lahir</th>
                                <th>No Telepon</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Jezriel</td>
                                <td>261010</td>
                                <td>12/01/2000</td>
                                <td>081234567890</td>
                                <td><img src={editIcon}></img></td>
                            </tr>
                            <tr>
                                <td>Gabe</td>
                                <td>231344</td>
                                <td>12/01/2000</td>
                                <td>081234567890</td>
                                <td><img src={editIcon}></img></td>
                            </tr>
                            <tr className='active-row'>
                                <td>Gevan</td>
                                <td>151413</td>
                                <td>12/01/2000</td>
                                <td>081234567890</td>
                                <td><img src={editIcon}></img></td>
                            </tr>
                            <tr>
                                <td>Rachel</td>
                                <td>124415</td>
                                <td>12/01/2000</td>
                                <td>081234567890</td>
                                <td><img src={editIcon}></img></td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    );
}

export default YAnggota_Cool