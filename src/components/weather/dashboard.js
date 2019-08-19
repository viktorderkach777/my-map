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

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <Container>

                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Card body outline color="primary">
                            <CardTitle>
                                <div><h1>Kyiv, UA</h1></div>
                                <div><h5>monday</h5></div>
                                <div><h4>sun</h4></div>
                                <Row>
                                    <Col>
                                        <Row>
                                            <img src="https://openweathermap.org/img/w/01d.png"></img>
                                            <h1>29&deg;C</h1>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row>
                                            Humidity: 48%
                                    </Row>
                                        <Row>
                                            Pressure: 1000 mm Hg
                                    </Row>
                                        <Row>
                                            Wind: 5 m/s
                                    </Row>
                                    </Col>
                                </Row>
                            </CardTitle>
                            {/* <CardText> */}

                            <CardBody>
                                <Row>
                                    <Col>
                                        <Card body outline color="primary">
                                            <CardBody >
                                                <Row >
                                                    <CardText>
                                                        monday
                                               </CardText>
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
                                    <Col>
                                        <Card body outline color="primary">
                                            <CardBody >
                                                <Row >
                                                    <CardText>
                                                        monday
                                               </CardText>
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
                                    <Col>
                                        <Card body outline color="primary">
                                            <CardBody >
                                                <Row >
                                                    <CardText>
                                                        monday
                                               </CardText>
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
                                    <Col>
                                        <Card body outline color="primary">
                                            <CardBody >
                                                <Row >
                                                    <CardText>
                                                        monday
                                               </CardText>
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
                                    <Col>
                                        <Card body outline color="primary">
                                            <CardBody >
                                                <Row >
                                                    <CardText>
                                                        monday
                                               </CardText>
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
                                </Row>
                            </CardBody>
                            {/* </CardText> */}
                            {/* <Button>Go somewhere</Button> */}
                        </Card>
                    </Col>

                </Row>

            </Container>
        );
    }
}

export default Dashboard;