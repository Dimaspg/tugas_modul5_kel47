import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card, Col, Row } from 'antd';

const { Meta } = Card;
export default class tekkom extends Component {
    constructor(props) {

        super(props);
        this.state = {
            tekkom: [],
            visible: false,
        };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "https://www.scorebat.com/video-api/v1/",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    tekkom: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>KELOMPOK 47</h1>
                        <h1>PERTANDINGAN SEPAKBOLA</h1>
                    </center>
                    <div className="site-card-wrapper container">
                        <Row gutter={16}>

                            {this.state.tekkom.map((results, index) => {

                                return (
                                    <Col span={8}>
                                        <Card
                                            hoverable
                                            shadow={4}
                                            style={{ minWidth: '300', margin: 'auto' }}
                                            cover={
                                                <img
                                                    alt="example"
                                                    src={results.thumbnail}
                                                    style={{ height: '450px' }}
                                                />
                                            }

                                        >
                                            <Meta
                                                title={results.title}
                                                style={{ textAlign: 'center' }}
                                            />
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}