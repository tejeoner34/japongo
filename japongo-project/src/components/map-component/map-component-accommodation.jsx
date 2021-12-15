import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import school from '../../icons/school.png';

import L from 'leaflet';
import './map-component.css'



export default function AccommodationMap(props) {

    const [t] = useTranslation('global')

   const leafletIcon = L.icon({
       iconUrl: school,
       iconSize:[35,45]
       
   })

    return (
        <MapContainer center={[props.lat, props.lon]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[props.lat, props.lon]} icon={leafletIcon} >
  <Popup>
          <p className='map__popup__name'>{props.school?.name}</p>     
      </Popup>
  </Marker>

  {props.data?.map((s,i)=>(
      <Marker key={i} position={[s?.location.lat, s?.location.lng]}>
      <Popup>
          <p className='map__popup__name'>{s.name}</p> 
          {s.amenities.length>0&&<p>{t("SchoolDetail.Characteristics")}</p>}
          <ul>
          {s.amenities.map((e,i)=><li key={i}>{e}</li>)}  
          </ul>      
      </Popup>
    </Marker>
  ))}
  
</MapContainer>
    )
}