import { useEffect, useState } from "react";

export const CurrentLocation = () => {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setCurrentPosition(data.coords);
      console.log(data);
    });
  }, []);
  
  return (
    <div>
      <h2>Aktuální poloha</h2>
      <div>
        <div>Long: {currentPosition.longitude}</div>
        <div>Lat: {currentPosition.latitude} </div>
      </div>
    </div>
  );
};
