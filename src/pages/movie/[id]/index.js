import Head from "next/head";
import classes from "./index.module.scss";
import {Col, Progress, Row, Button, message, Popconfirm} from "antd";
import imgSrc from "../../../helper/imgSrc";
import {Card} from "react-bootstrap";
import axios from "axios";
import {EyeFilled, HeartFilled, HeartOutlined, HeartTwoTone} from "@ant-design/icons";
import {useContext, useState} from "react";
import {UserContext} from "../../../context/UserContext";
import postPlayListFavorits from "../../../helper/postPlayListFavorits";
import postPlayListWatchList from "../../../helper/postPlayListWatchList";


function SingleMovie({movie}) {
    const {user} = useContext(UserContext)
    const [favorit, setFavorit] = useState(false)
    const [watch, setWatch] = useState(false)
    const key = 'updatable';
    const openMessage = () => {
        message.loading({content: 'Loading...', key});
        setTimeout(() => {
            message.warning({content: 'you must be login own account first !', key, duration: 2,});
        }, 1000);
    }

    function postFavorit() {
        setFavorit(!favorit)
        postPlayListFavorits('movie', movie.id, favorit)
    }

    function postWatch() {
        setWatch(!watch)
        postPlayListWatchList('movie', movie.id, watch)
    }

    return (

        <>
            <Head>
                <title>Popcorn Movies</title>
                <link rel="icon" href="/favicon.ico.svg"/>
            </Head>
            <Row>
                <Col span={24}>
                    <div
                        className={classes.contain}
                        style={{
                            background: `url(${imgSrc(movie.backdrop_path, 'original')})`,
                        }}
                    >
                        <div className={classes.card}>
                            <Row>
                                <Col xs={12} md={5}>
                                    <Card className={classes.poster}>
                                        <Card.Img
                                            src={imgSrc(movie.poster_path)}
                                        />
                                    </Card>
                                </Col>
                                <Col xs={12} md={7} className={classes.title}>
                                    <h1 style={{color: 'snow'}}>{movie.original_title}</h1>
                                    <p>
                                        {movie.genres?.map(genre => <span style={{color: 'yellow'}}
                                                                          key={genre.id}> {genre.name}- </span>)}
                                    </p>
                                    <p style={{fontSize: '22px'}}>{movie.release_date}</p>
                                    <Progress
                                        type="circle"
                                        strokeColor={
                                            movie.vote_average * 10 < 5
                                                ? {"100%": "red"}
                                                : movie.vote_average * 10 < 7
                                                    ? {"100%": "orange"}
                                                    : {"100%": "green"}
                                        }
                                        percent={movie.vote_average * 10}
                                    />
                                    <p style={{
                                        fontSize: '1.1em',
                                        fontWeight: '400',
                                        fontStyle: 'italic',
                                        opacity: '0.7',
                                    }}>
                                        {movie.tagline}
                                    </p>
                                    <h4>overview :</h4>
                                    <p style={{fontSize: '15px'}}>{movie.overview}</p>
                                    {user ?
                                        (
                                            <Row>
                                                <Col>
                                                    <div style={{
                                                        boxSizing: 'border-box',
                                                        background: '#8c8282',
                                                        borderRadius: 50,
                                                        width: '46px',
                                                        height: '46px',
                                                    }}>
                                                        <HeartFilled onClick={postFavorit} twoToneColor="#eb2f96"
                                                                     style={{
                                                                         color: 'red',
                                                                         fontSize: '25px',
                                                                         marginLeft: '10px',
                                                                         marginTop: '10px'
                                                                     }}/>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div style={{
                                                        boxSizing: 'border-box',
                                                        background: '#8c8282',
                                                        borderRadius: 50,
                                                        width: '46px',
                                                        height: '46px',
                                                    }}>
                                                        <EyeFilled onClick={postWatch} twoToneColor="#eb2f96" style={{
                                                            color: 'black',
                                                            fontSize: '25px',
                                                            marginLeft: '10px',
                                                            marginTop: '10px'
                                                        }}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        ) :
                                        (
                                            <>
                                                <Row>
                                                    <Col>
                                                        <div type="primary" onClick={openMessage}>
                                                            <div style={{
                                                                boxSizing: 'border-box',
                                                                background: '#8c8282',
                                                                borderRadius: 50,
                                                                width: '46px',
                                                                height: '46px',
                                                            }}>
                                                                <HeartFilled twoToneColor="#eb2f96" style={{
                                                                    color: 'red',
                                                                    fontSize: '25px',
                                                                    marginLeft: '10px',
                                                                    marginTop: '10px'
                                                                }}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div type="primary" onClick={openMessage}>
                                                            <div style={{
                                                                boxSizing: 'border-box',
                                                                background: '#8c8282',
                                                                borderRadius: 50,
                                                                width: '46px',
                                                                height: '46px',
                                                            }}>
                                                                <EyeFilled twoToneColor="#eb2f96" style={{
                                                                    color: 'black',
                                                                    fontSize: '25px',
                                                                    marginLeft: '10px',
                                                                    marginTop: '10px'
                                                                }}/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </>
                                        )}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default SingleMovie

export async function getServerSideProps({params}) {
    const {id} = params
    const {data: movie} = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6fbe12673424b0186041f9a7aabfd814`)
    return {
        props: {movie}
    }
}