import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map-component.css'



export default function TokyoMap(props) {

    console.log(props?.data)

    return (
        <MapContainer center={[35.68138269737581, 139.7684809508418]} zoom={10} scrollWheelZoom={true}>
  <TileLayer
    
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {props.data?.map((s,i)=>(
      <Marker key={i} position={[s?.lat, s?.lon]}>
      <Popup>
        {s?.lat} <br /> Easily customizable.
      </Popup>
    </Marker>
  ))}
  
</MapContainer>
    )
}