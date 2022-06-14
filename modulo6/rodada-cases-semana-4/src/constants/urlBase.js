import axios from 'axios';  

const urlBase = axios.create({baseURL: 'https://brainn-api-loterias.herokuapp.com/api/v1/', });  

export default urlBase;