import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your server's address and port
});

export const fetchTrains = () => {
  return instance.get('/api/get');
};

export const getTrainsByid=(Id)=>{
    return instance.get('/api/TrainsId',Id)
};
export const user=(userData)=>{
    return instance.post('/api/user',userData);
}

export const auth=(userData)=>{
    return instance.post('/api/auth',userData);
}



export default ApiClient;
