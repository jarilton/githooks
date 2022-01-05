import React, { useEffect, useState } from "react";

export default function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)
    console.log('watchId', watchId)

    return () => navigator.geolocation.clearWatch(watchId)
  }, [])

  function handlePositionReceived({coords}) {
    const { latitude, longitude } = coords

    setLocation({ latitude, longitude })
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  )
}

