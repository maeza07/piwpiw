import Menu from '../../components/menu';
import Layout from '../../layouts/layout';
import DaftarTipsGame from '../../components/daftartipsgame'

const Artikel = (props) => {
    return (
    <Layout>
        <Menu />
        <DaftarTipsGame />
        <link rel="stylesheet" href="/css/tipsandtrick.css" />       
    </Layout>
    )
}

export default Artikel;

