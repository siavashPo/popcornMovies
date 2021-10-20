import {Col, Row} from "antd";
import classes from "./Footer.module.scss";

function Footer() {
    return (
        <div className={classes.root}>
            <Row>
                <Col offset={7} span={4}>
                    <h3>
                        THE BASICS
                        <div>
                            About TMDB
                        </div>
                        <div>
                            Contact Us
                        </div>
                        <div>
                            Support Forums
                        </div>
                        <div>
                            API
                        </div>
                        <div>
                            System Status
                        </div>
                    </h3>
                </Col>
                <Col span={4}>
                    <h3>
                        GET INVOLVED
                        <div>
                            Contribution Bible
                        </div>
                        <div>
                            3rd Party Applications
                        </div>
                        <div>
                            Add New Movie
                        </div>
                        <div>
                            Add New TV Show
                        </div>
                    </h3>
                </Col>
                <Col span={4}>
                    <h3>
                        LEGAL
                        <div>
                            Terms of Use
                        </div>
                        <div>
                            Ahemdabad
                        </div>
                        <div>
                            API Terms of Use
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                    </h3>
                </Col>
            </Row>
        </div>
    )
}

export default Footer