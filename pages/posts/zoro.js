import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function SecondPost(){
    return (
        <Layout>
            <Head>
                <title>Roronoa Zoro</title>
                <script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>
            <h1>Roronoa Zoro</h1>
            <center><img src="/images/zoro.png" width="200px" height="200px"/></center>
            <p>
            <b>Roronoa Zoro</b>, also known as "<b>Pirate Hunter" Zoro</b>, is the combatant of the Straw Hat Pirates, one of their two swordsmen, one of the Senior Officers of the Straw Hat Grand Fleet, and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy. Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it, doing so in the Romance Dawn Arc.
            </p>
        </Layout>
    ); 
}