import {Card, Col, Row} from "antd";
import Link from "next/link";
import imgSrc from "../../helper/imgSrc";
import {StarFilled, StarOutlined} from "@ant-design/icons";
const {Meta} = Card;
function CardSlide({movies}) {
    return (
        <Row className="site-layout-content">{movies?.results?.map(movie =>
            <Col xs={24} sm={12} md={6} key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                    <a>
                        <Card
                            hoverable
                            style={{ width: 'auto', backgroundColor:'#663435'}}
                            cover={<img style={{height:"400px"}} alt="example" src={imgSrc(movie.poster_path,'w500')} />}
                        >
                            <Meta title={<div style={{color:'white'}}>{movie.title}</div>} description={<div style={{backgroundColor:"#663435", color:'white'}}>{movie.vote_average} IMDb <StarFilled style={{color:'yellow'}}/></div>} />
                        </Card>
                        <br/>
                    </a>
                </Link>
            </Col>
        )}
        </Row>
    )
}
export default CardSlide