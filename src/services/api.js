import axios from 'axios';

export default {
  cep: async (cep) => await axios.get(`viacep.com.br/ws/${cep}/json/`),
  authentication: async (payload) => {
    const { data: { data } } = await axios.post('https://api.betrybe.com/api/accounts/login', payload);
    return data;
  },

  profile: async (id, token, signal) => {
    const { data } = await axios.get(`https://apig.betrybe.com/api/users/${id}/contacts`, {
      headers: { Authorization: `Bearer ${token}` },
      signal,
    });
    return data;
  },

  content: async (module, token, signal) => {
    const { data } = await axios.get(`https://course.betrybe.com/api/v2/content/modules/${module}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Student-Journey': true,
      },
      signal,
    });
    return data;
  },

  chapter: async (id, signal) => {
    const { data } = await axios.get(`https://course.betrybe.com/api/v2/content/chapters/${id}`, { signal });
    return data;
  },
};
