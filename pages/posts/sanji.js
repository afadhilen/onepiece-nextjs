import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function ThirdPost(){
    return (
        <Layout>
            <Head>
                <title>Vinsmoke Sanji</title>
                <script src="https://connect.facebook.net/en_US/sdk.js" />
            </Head>
            <h1>Vinsmoke Sanji</h1>
            <center><img src="/images/sanji.png" width="200px" height="200px"/></center>
            <p>
            <b>"Black Leg" Sanji</b>, born as <b>Vinsmoke Sanji</b>, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc. 
            </p>
        </Layout>
    ); 
}