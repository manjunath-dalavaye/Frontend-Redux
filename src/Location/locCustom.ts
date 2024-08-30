import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleSuccess = (pos: GeolocationPosition) => {
      setPosition(pos);
      setLoading(false);
    //   console.log(pos);
    };

    const handleError = (err: GeolocationPositionError) => {
      setError(err);
      setLoading(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError);


      return () => {
        const nav= navigator.geolocation.clearWatch(watchId);
        console.log("nav",nav);       
        // console.log(watchId):
        //After using useEffect practice to clear data i.e previous data
      };
    } else {
      setLoading(true);
      console.log('Geolocation is not supported by this browser.')
    }
  }, []);

  return { position, error, loading };
};

export default useGeolocation;
