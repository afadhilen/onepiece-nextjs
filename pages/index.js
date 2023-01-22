import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      {/* <img src="/images/luffy.png" alt="Luffy" height="300px" width="300px"/> */}
        <h4>
          <i>"Kaizoku ou ni ore wa naru"</i>
        </h4>
        <p>
          The Straw Hat Pirates, also known as the <b>Mugiwara Pirates, Straw Hat Crew</b> or simply the Straw Hats, are an infamous and powerful pirate crew that originated from the East Blue. They are the main focus and protagonists of the manga and anime One Piece and are led by the main protagonist <Link href="/posts/luffy">Monkey D. Luffy</Link>. 
        </p>
        <p>The crew currently consists of ten members; <Link href="/posts/zoro">zoro</Link>, nami, usopp, <Link href="/posts/sanji">sanji</Link>, chopper, robin, franky, brook, and jinbei being smaller than a typical pirate crew; when he first set sail, Luffy set a goal of gaining ten crewmates.</p>
      </section>
    </Layout>
  );
}