import { Loader } from "@googlemaps/js-api-loader"
import { useRef, useEffect } from "react"

const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
    libraries: ["places", "marker"]
});

const mapOptions = {
    center: {
        lat: 35.6819677,
        lng: 139.7614256
    },
    mapTypeControl: false,
    fullscreenControl: false,
    zoom: 6,
    mapId: '4504f8b37365c3d0',
};

export const Map = ({ center, zoom }) => {
    const ref = useRef()
    useEffect(() => {
        loader
            .load()
            .then(google => {
                const map = new window.google.maps.Map(ref.current, mapOptions);
                const markerView = new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: mapOptions.center,
                    title: 'Google GWC2 Building',
                });
            })
            .catch(e => {
                console.error(e)
            })


    }, [])
    return <div ref={ref} id="map" />
}
