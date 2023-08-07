import { useSelector } from "react-redux";

import { selectIpData } from "../reducers/ipSelectors";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MyMapComponent from "./MyMapComponent";

const Map = () => {
  const {
    ipData: {
      location: { lat, lng },
    },
  } = useSelector(selectIpData);

  if (!lat && !lng) {
    return;
  }

  return (
    <MapContainer
      style={{ height: "100%" }}
      center={[lat, lng]}
      zoom={13}
      zoomControl={false}
    >
      <MyMapComponent />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}></Marker>
    </MapContainer>
  );
};

export default Map;
