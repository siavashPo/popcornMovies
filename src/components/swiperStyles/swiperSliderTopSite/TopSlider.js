import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from "./TopSlider.module.scss";
import {Col, Row, Card} from "antd";
import {StarFilled, StarOutlined} from "@ant-design/icons";
import imgSrc from "../../../helper/imgSrc";
const { Meta } = Card;
function TopSlider({movies}) {
    return (
        <Row className={classes.root}>
            <Col>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={1}
                    slidesPerView={6}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    navigation
                >
                    {movies.map(movie =>
                        <SwiperSlide key={movie.id}>
                            <Link href={`/movie/${movie.id}`}>
                                <a>
                                    <Card
                                        hoverable
                                        style={{ width: 'auto', backgroundColor:'#663435'}}
                                        cover={<img style={{height:"400px"}} alt="example" src={imgSrc(movie.poster_path)} />}
                                    >
                                        <Meta title={<div style={{color:'white'}}>{movie.title}</div>} description={<div style={{backgroundColor:"#663435", color:'white'}}>{movie.vote_average} IMDb <StarFilled style={{color:'yellow'}}/></div>} />
                                    </Card>
                                </a>
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
            </Col>
        </Row>
    )
}
export default TopSlider