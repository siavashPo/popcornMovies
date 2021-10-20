import {useEffect, useState} from "react";
import {Card, Col, Row} from "antd";
import CardSlide from "../../../components/cardStyles/CardSlide";
const {Meta} = Card;
import classes from "./index.module.scss";
import usePlayList from "../../../hooks/usePlayList";
import Head from "next/head";
function MyList() {
    const {data: movie} = usePlayList('movies')
    const {data: tv} = usePlayList('tv')
    return (
        <div className={classes.root}>
            <Head>
                <title>Popcorn Movies/My-List</title>
                <link rel="icon" href="/favicon.ico.svg" />
            </Head>
            <Col offset={2} span={20} offset={2}>
                <br/>
                <h3 style={{color: 'yellow'}}>Movies PlayList</h3>
                <CardSlide movies={movie}/>
            </Col>
            <Col offset={2} span={20} offset={2}>
                <br/>
                <h3 style={{color: 'yellow'}}>Tv PlayList</h3>
                <CardSlide movies={tv}/>
            </Col>
        </div>
    )
}

export default MyList