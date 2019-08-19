import React, { Component } from 'react';
//import ReactMapGL, { Popup, Marker } from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import {MAPBOX_TOKEN} from '../../constants/generalConstants';
//import '../../.env';


class Map extends Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    render() {

        const { viewport } = this.state;       

        
        return (
            <>
                <ReactMapGL
                    width={viewport.width}
                    height={viewport.height}
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                    zoom={viewport.zoom}

                    mapStyle="mapbox://styles/mapbox/light-v9"
                    onViewportChange={(viewport) => this.setState({ viewport })}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                />               
            </>
        );
    }
}

export default Map;