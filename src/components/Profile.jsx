import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import '@/components/biodata.css'

export default function Profile() {
return (
    <>
    <div className="center-text">
        <h1>Tugas Buat Biodata</h1>
        <hr width="100%" />
        
        <table border="1">
        <thead>
            <tr id="header-row">
            <th colSpan="3" id="biodata-header">BIODATA KTP</th>
            </tr>
        </thead>
        <tbody>
            <tr className="data-row1">
            <td rowSpan="8" className="photo-cell">
                <Image src="/foto1.jpg" alt="foto Muhammad Rizqy Pratama" width={200} height={300} />
            </td>
            <td>Nama</td>
            <td>Muhammad Rizqy Pratama</td>
            </tr>
            <tr className="data-row2">
            <td>Tempat/Tgl Lahir</td>
            <td>Jakarta, 06 November 2004</td>
            </tr>
            <tr className="data-row3">
            <td>Alamat</td>
            <td>Jalan Perum Prim Kopti Blok A3 No.5 RT. 01 RW. 06, Kel Setu, Kec Cipayung</td>
            </tr>
            <tr className="data-row4">
            <td>Agama</td>
            <td>Islam</td>
            </tr>
            <tr className="data-row5">
            <td>Pekerjaan</td>
            <td>Mahasiswa</td>
            </tr>
            <tr className="data-row6">
            <td>Kewarganegaraan</td>
            <td>WNI</td>
            </tr>
            <tr className="data-row7">
            <td>Hobi</td>
            <td>
                <ul>
                <li>Olahraga</li>
                <li>Menonton film</li>
                <li>Membuat program</li>
                <li>Bermain gitar</li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </>
)
}
