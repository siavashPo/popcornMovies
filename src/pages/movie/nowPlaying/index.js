import Link from "next/link";
import classes from "./index.module.scss";
import {Card, Col, Row} from "antd";
import imgSrc from "../../../helper/imgSrc";
import axios from "axios";
import {StarOutlined} from "@ant-design/icons";
import Head from "next/head";
import CardSlide from "../../../components/cardStyles/CardSlide";

const {Meta} = Card;

function NowPlaying({nowPlaying}) {
    return (
        <div className={classes.root}>
            <Head>
                <title>Popcorn Movies/NowPlaying</title>
                <link rel="icon" href="/favicon.ico.svg" />
            </Head>
                <Col offset={2} span={20} offset={2}>
                    <br/>
                    <h3 style={{color: 'yellow'}}>Popular Movies List</h3>
                    <CardSlide movies={nowPlaying}/>
                </Col>
        </div>
    )
}

export default NowPlaying

export async function getServerSideProps() {
    const {data: nowPlaying} = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=6fbe12673424b0186041f9a7aabfd814`)
    return {
        props: {nowPlaying}
    }
}