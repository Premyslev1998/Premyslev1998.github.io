import axios from 'axios';

export function getLocation(lat,lng,lang) {
  return axios.get(`https://maps.google.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAct8OP4V96MaHdE_4RurrHbDyJNVDcdYw&language=${lang}`);
}
