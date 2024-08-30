import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleSuccess = (pos: GeolocationPosition) => {
      setPosition(pos);
      setLoading(false);
    };

    const handleError = (err: GeolocationPositionError) => {
      setError(err);
      setLoading(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError);

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setLoading(false);
      console.log('Geolocation is not supported by this browser.')
    }
  }, []);

  return { position, error, loading };
};

export default useGeolocation;
