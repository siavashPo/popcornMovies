import axios from "axios";
import Head from 'next/head'
import TopSlider from "../components/swiperStyles/swiperSliderTopSite/TopSlider";
import {Col, Row, Typography} from "antd";
const { Title } = Typography
export default function Home({popular, topRated, nowPlaying, trend}) {
  return (
    <div>
      <Head>
        <title>Popcorn Movies</title>
        <link rel="icon" href="/favicon.ico.svg" />
      </Head>
        <Row>
            <Col offset={1} md={22} offset={1}>
                <br/>
                <Title style={{color:'yellow'}} level={4}>Popular Movies </Title>
                <TopSlider movies={popular?.results || []}/>
            </Col>
        </Row>
        <Row>
            <Col offset={1} md={22} offset={1}>
                <br/>
                <Title style={{color:'yellow'}} level={4}>Top Rated Movies </Title>
                <TopSlider movies={topRated?.results || []}/>
            </Col>
        </Row>
        <Row>
            <Col offset={1} md={22} offset={1}>
                <br/>
                <Title style={{color:'yellow'}} level={4}>Now Playing Movies </Title>
                <TopSlider movies={nowPlaying?.results || []}/>
            </Col>
        </Row>
        <Row>
            <Col offset={1} md={22} offset={1}>
                <br/>
                <Title style={{color:'yellow'}} level={4}>Trend Movies </Title>
                <TopSlider movies={trend?.results || []}/>
            </Col>
        </Row>
    </div>
  )
}
export async function getServerSideProps() {
    const {data: popular} = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=6fbe12673424b0186041f9a7aabfd814`)
    const {data: topRated} = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=6fbe12673424b0186041f9a7aabfd814`)
    const {data: nowPlaying} = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=6fbe12673424b0186041f9a7aabfd814`)
    const {data: trend} = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=6fbe12673424b0186041f9a7aabfd814`)
    return {
        props: {popular, topRated, nowPlaying, trend}
    }
}
