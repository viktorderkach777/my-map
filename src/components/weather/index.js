import React, { Component } from 'react';
import { fetchData } from '../../actions/weatherStationAction';
import { connect } from "react-redux";
import ForecastTiles from './forecastTiles';
import Dashboard from './dashboard';
//import DetailedInfo from './detailedInfo';

class Weather extends Component {
    // constructor(props) {
    //     super(props);
        // this.state = {
        //     status: null
        // }
    //}


    componentDidMount() {
        this.getByCity();
        console.log('this.props', this.props);
    }

    getByCity = async () => {
        const res = await this.props.dispatch(fetchData('Kyiv'));
        return res;
    }
    render() {
        const { status, data } = this.props;
        console.log('status', status);
        console.log('data', data);
        // const cityData={city:data.city.name};
        // console.log('city', data.city.name);
         const loading = status == null ? <h2>Loading...</h2> : (
         <ForecastTiles forecasts={data.list}  cityData={{
             city:data.city.name,
             country:data.city.country,
             population:data.city.population
            }}/>
         )//<h2>{status}</h2>//<DetailedInfo data={data}/>
        
        return (
            <>
            {/* <Dashboard/> */}
            
            { loading }
            
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.weatherStation.status,
        data: state.weatherStation.data
    };
};

export default connect(mapStateToProps)(Weather);