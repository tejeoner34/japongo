import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map-component.css'



export default function TokyoMap(props) {

   

    return (
        <MapContainer center={[props.lat, props.lon]} zoom={11} scrollWheelZoom={true}>
  <TileLayer
    
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {props.data?.map((s,i)=>(
      <Marker key={i} position={[s?.lat, s?.lon]}>
      <Popup>
      <p className='map__popup__name'>{s.name}</p>
  
         
      </Popup>
    </Marker>
  ))}
  
</MapContainer>
    )
}