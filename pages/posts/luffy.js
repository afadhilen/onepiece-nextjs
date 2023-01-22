import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>Monkey D. Luffy</title>
                <script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>
            <h1>Monkey D. Luffy</h1>
            <center><img src="/images/luffy.png" width="200px" height="200px"/></center>
            <p>
            <b>Monkey D. Luffy</b>, also known as <b>"Straw Hat Luffy"</b> and commonly as <b>"Straw Hat"</b>, is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as the most powerful of its top fighters. He desires to find the legendary treasure left behind by the late Gol D. Roger and thereby become the Pirate King, which would help facilitate an unknown dream of his that he has told only to Shanks, his brothers and crew. He believes that being the Pirate King means having the most freedom in the world.
            </p>
        </Layout>
    ); 
}