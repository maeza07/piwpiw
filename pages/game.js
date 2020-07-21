import Menu from '../components/menu';
import Layout from '../layouts/layout';

const game = () => (
    <Layout>
        <Menu />
        <link rel="stylesheet" href="/css/game.css" />
        <main>
        <section>
            <img src="/images/dota2.jpg" alt="Dota2"/>
            <h2>Dota 2</h2>
            <p>Game PC MOBA yang memiliki kekompleksan yang sangat tinggi</p>
            <a href="#">LEARN </a>
            </section>
        <section>
            <img src="/images/mobilelegend.jpeg" alt="mobilelegend"/>
            <h2>Mobile Legend</h2>
            <p>Game Mobile MOBA terpopuler di Indonesia </p>
            <a href="#">LEARN </a>
        </section>
        <section>
            <img src="images/pubgm.jpg" alt="pubgm"/>
            <h2>PUBG Mobile</h2>
            <p>Game bergenre battle royale yang cukup populer di Indonesia</p>
            <a href="#">LEARN </a>
        </section>
        </main>     
    </Layout>
)
export default game;