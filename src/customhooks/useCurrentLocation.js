const useCurrentLocation = (dispatch, addLocation) => {

    const options = {
        enableHighAccuracy: true,
        timeout : 5000,
        maximumAge: 0,
    }

    /**
     * Used nominatim opensteetmap API for fetching address of user using latitude & longitude (https://medium.com/@adri.espejo/getting-started-with-openstreetmap-nominatim-api-e0da5a95fc8a) 
     */
    const success = async (position) => {
        const coordiantes = position.coords;
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coordiantes.latitude}&lon=${coordiantes.longitude}&format=json`);

        const data = await res.json();

        dispatch(
            addLocation({
                lat: coordiantes.latitude,
                long : coordiantes.longitude,
                city: data?.address?.city,
                address: data?.display_name,
            })
        );
        window?.location.reload();
    }
    const error = (err) => {
        console.warn(`ERROR-(${err.code}): ${err.message}`);
    }
    navigator.geolocation
        ? navigator?.geolocation?.getCurrentPosition(success, error, options)
        : alert("Unable to fetch your Location")
}

export default useCurrentLocation