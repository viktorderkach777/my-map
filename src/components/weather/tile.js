import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardImg,
    CardBody,
    CardText,
    Button
} from 'reactstrap';

class Tile extends Component {
    state = {}
    render() {
        return (
            <Col>
                <Card body outline color="primary">
                    <CardBody >
                        <Row >
                            <CardTitle>
                                <div className="textCenter">
                                monday
                                </div>
                            </CardTitle>
                        </Row>
                        <Row>
                            <CardImg src="https://openweathermap.org/img/w/01d.png">
                                {/* <img src="https://openweathermap.org/img/w/01d.png"></img> */}
                            </CardImg>
                        </Row>
                        <Row>
                            <strong>29&deg;</strong>/19&deg;
                                           </Row>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Tile;