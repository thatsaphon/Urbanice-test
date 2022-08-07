import React, { useEffect, useRef, useState } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = {
  width: "800px",
  height: "400px",
}

const center = {
  lat: 13.8234779,
  lng: 100.4579902,
}

function GoogleMapComponent() {
  const search = useRef()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD7vflVcfMSfoxj_YP0HzvMPPLen5Z7_Uk",
    libraries: ["places"],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const fetchRestaurants = async () => {
    // eslint-disable-next-line no-undef
    const placeService = new google.maps.places.PlacesService(map)
    placeService.findPlaceFromQuery(
      { query: search.current.value, fields: ["name,geometry,place_id"] },
      (result, status) => {
        console.log(result[0])

        map.panTo(result[0].geometry.location)
        map.setZoom(15)

        placeService.nearbySearch(
          {
            location: result[0].geometry.location,
            radius: "1000",
            type: ["restaurant"],
          },
          (results, status) => {
            // eslint-disable-next-line no-undef
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                // eslint-disable-next-line no-undef
                createMarker(results[i])
              }
            }
          }
        )
      }
    )
  }

  useEffect(() => {
    fetchRestaurants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function createMarker(place) {
    // /** @type google.maps.InfoWindow */

    // eslint-disable-next-line no-undef
    let infowindow = new google.maps.InfoWindow()
    if (!place.geometry || !place.geometry.location) return

    // eslint-disable-next-line no-undef
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    })

    // eslint-disable-next-line no-undef
    google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "")
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      })
    })
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <input
          className="border-2 border-solid focus:border-black rounded-md p-2"
          type="text"
          ref={search}
          defaultValue={"Bang Sue"}
        />
        <button
          className="bg-emerald-400 ml-1 rounded-md p-2"
          onClick={fetchRestaurants}
        >
          Search
        </button>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ streetViewControl: false }}
          zoom={15}
        >
          {/* {markers.map((latlng) => (
            <Marker position={latlng} />
          ))} */}
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}

export default GoogleMapComponent
