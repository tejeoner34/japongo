import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {serverUrl} from '../../global/global-variable.js'
import './map-component.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';



export default function TokyoMap(props) {

  const [t] = useTranslation('global');
  const history = useHistory()


    return (
        <MapContainer center={[props.lat, props.lon]} zoom={11} scrollWheelZoom={true}>
  <TileLayer
    
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {props.data?.map((s,i)=>(
      <Marker key={i} position={[s?.lat, s?.lon]}>
      <Popup>
      <p  className='map__popup__name'>{s.name}</p>

      <div style={{
        backgroundImage: `url("${serverUrl}/school/${s.img.card}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '140px',
        minHeight:'140px',
        width: '90%',
        borderRadius:'10px',
      }}>
      

      </div> 
      <h3>{t("Schools.Location")}</h3>
      <p>{s.location.description.substring(0,100)}...</p>
      <Button onClick={(e)=>history.push(`/school/${s._id}`)}>{t("Schools.MoreInfo")}</Button>
      
      </Popup>
    </Marker>
  ))}
  
</MapContainer>
    )
}