'use client'
/* Library Imports */
import { useRef, useEffect } from 'react'
import { makeStyles } from 'tss-react/mui'
import GoogleMapReact from 'google-map-react'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            height: "100%",
            width: "100%",
        },
    }
})



interface MapComponentProps {
    latitude: number;
    longitude: number;
    radius: number;
}


const Circle = ({ latitude, longitude, radius }: MapComponentProps) => (
    <div
        style={{
            position: 'absolute',
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            border: '1px solid red',
            borderRadius: '50%',
            opacity: 0.5,
            backgroundColor: 'red',
            transform: `translate(-50%, -50%)`,
            pointerEvents: 'none',
        }}
    />
  )
  
const MapComponent = ({ latitude, longitude, radius }: MapComponentProps) => {
const center = { lat: latitude, lng: longitude }

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
                defaultCenter={center}
                defaultZoom={10}
            >
                <Circle latitude={latitude} longitude={longitude} radius={radius} />
            </GoogleMapReact>
        </div>
    )
}
  

export default MapComponent