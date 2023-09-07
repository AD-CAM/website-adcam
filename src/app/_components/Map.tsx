'use client'
/* Data & Utils Imports */
import { apiKey } from "../_utils/handleEnvVariables"
/* Library Imports */
import { useState, useCallback } from 'react'
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api'



const containerStyle = {
    height: "100%",
    width: "100%",
}

const defaultCenter = { lat: 47.9022, lng: 1.90997 }



interface MapComponentProps {
    radius: number;
}


  
const MapComponent = ({ radius }: MapComponentProps) => {
    const circleOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.15,
        center: defaultCenter,
        radius: 50000,
    };

    return (
        <LoadScript googleMapsApiKey={ apiKey || '' }>
            <GoogleMap
                mapContainerStyle={ containerStyle }
                center={ defaultCenter }
                zoom={10}
            >
                <Circle options={ circleOptions } />
            </GoogleMap>
        </LoadScript>
    )
}
  

export default MapComponent