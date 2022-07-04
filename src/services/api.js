import axios from 'axios';

export default {
  authentication: async (payload) => {
    const { data: { data } } = await axios.post('https://api.betrybe.com/api/accounts/login', payload);
    return data;
  },
};
