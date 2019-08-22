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
//import { max } from 'gl-matrix/src/gl-matrix/vec2';


class Tile extends Component {
    constructor(props) {
        super(props);
        //this.state = {  }
    }
    //state = {}
    // componentWillReceiveProps(nextProps) {
    //     console.log("----tile.this.props----", this.props);
    //     console.log("----nextProps----", nextProps);
    //     // this.setState({
    //     //   likesIncreasing: nextProps.likeCount > this.props.likeCount
    //     // });
    //   }

    render() {
        console.log("----tile.props----", this.props);
       const {max,min,humidity,windSpeed, day, avgPressure, description,icon}=this.props;
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