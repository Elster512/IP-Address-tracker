import { useMap } from "react-leaflet";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIpData } from "../reducers/ipSelectors";

function MyMapComponent() {
  const map = useMap();
  const {
    ipData: {
      location: { lat, lng },
    },
  } = useSelector(selectIpData);
  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [map, lat, lng]);
  return null;
}

export default MyMapComponent;
