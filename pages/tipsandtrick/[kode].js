import Menu from '../../components/menu';
import Layout from '../../layouts/layout';
import dummyData from '../../data/doto.json';
import DaftarTipsGame from '../../components/daftartipsgame';

const Artikel = (props) => {
    return (
    <Layout>
        <Menu />
        <DaftarTipsGame />
        <link rel="stylesheet" href="/css/tipsandtrick.css" />
        <section>
            <h3>{props.judul}</h3>
            <article>
                <h3>{props.head1}</h3>
                {props.body1}
                <h3>{props.head2}</h3>
                {props.body2}
                <h3>{props.head3}</h3>
                {props.body3}
                <h3>{props.head4}</h3>
                {props.body4}
                <h3>{props.head5}</h3>
                {props.body5}
                

            </article>
        </section>        
    </Layout>
    )
}

export default Artikel;

export async function getStaticProps(context){
    let kode = context.params.kode;
    let data = dummyData.find(x => x.id == kode);

    let { judul, head1, head2, head3, head4, head5, body1, body2, body3, body4, body5 } = data;
    
    return {
        props : {
            judul, head1, head2, head3, head4, head5, body1, body2, body3, body4, body5
        }
    }
}

export async function getStaticPaths(){
    return{
        paths : dummyData.map(data => (
            {params : {kode : `${data.id}`}}
        )),
        fallback : false
    }
}
