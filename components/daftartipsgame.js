import Link from 'next/link';

const DaftarTipsGame = () => (
    <div>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link rel="stylesheet" href="/css/daftartips.css" />
    <input type="checkbox" id="check" />
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
    <header>List Game</header>
  <ul>
    <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/1"><a><i>Dota 2</i></a></Link></li>
    <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/2"><a><i>Mobile Legend</i></a></Link></li>
    <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/3"><a><i>PUBG Mobile</i></a></Link></li>
    {/* <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
    <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
    <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
    <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
    <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
    <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
    <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li> */}
    </ul>
</div>
    {/* <p>
        daftar tips game : <br />
        <ul>
            <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/1"><a>Dota 2</a></Link></li>
            <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/2"><a>Mobile Legend</a></Link></li>
            <li><Link href="/tipsandtrick/[kode]" as="/tipsandtrick/3"><a>PUBG Mobile</a></Link></li>
        </ul>
    </p> */}
    </div>
)

export default DaftarTipsGame;