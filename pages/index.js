import Menu from '../components/menu';
import Layout from '../layouts/layout';

function Beranda(){
    return (
      <Layout>
        <Menu />
        <link rel="stylesheet" href="/css/index.css" />
        
        <main>
        <p>Kami siap mengedukasi dan membantu player Indonesia untuk menjadi lebih baik</p>
        </main>
        
        
      </Layout>
    );
   }
   export default Beranda;
