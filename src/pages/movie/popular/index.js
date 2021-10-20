import Link from "next/link";
import classes from "./index.module.scss";
import {Card, Col, Row} from "antd";
import imgSrc from "../../../helper/imgSrc";
import axios from "axios";
import {StarOutlined} from "@ant-design/icons";
import CardSlide from "../../../components/cardStyles/CardSlide";
import Head from "next/head";

function Popular({popular}) {
    return (
        <div className={classes.root}>
            <Head>
                <title>Popcorn Movies/Popular</title>
                <link rel="icon" href="/favicon.ico.svg" />
            </Head>
            <Col offset={2} span={20} offset={2}>
                <br/>
                <h3 style={{color: 'yellow'}}>Popular Movies List</h3>
                <CardSlide movies={popular}/>
            </Col>
        </div>
    )
}

export default Popular

export async function getServerSideProps() {
    const {data: popular} = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=6fbe12673424b0186041f9a7aabfd814`)
    return {
        props: {popular}
    }
}