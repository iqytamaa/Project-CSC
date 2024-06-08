import Link from 'next/link';

import React from 'react';

export default function HobiPage() {
return (
    <div>
    <h1>Hobi saya :</h1>
    <ul>
        <li>1.Menonton</li>
        <li>2.Olahraga</li>
        <li>3.Bermain Game</li>
        <li>4.Membaca</li>
    </ul>
    <Link href="/">
    <p> Kembali ke Home</p>
    </Link>
    </div>
);
}

