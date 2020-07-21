import Link from 'next/link';

const DaftarTipsGame = () => (
    <p>
        daftar tips game : <br />
        <ul>
            <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/1"><a>Dota 2</a></Link></li>
            <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/2"><a>Mobile Legend</a></Link></li>
            <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/3"><a>PUBG Mobile</a></Link></li>
        </ul>
    </p>
)

export default DaftarTipsGame;