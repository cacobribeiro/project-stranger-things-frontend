import axios from 'axios';
const dotenv = require('dotenv').config();

class CharactersService {
  constructor({ url = 'http://localhost:3000', timeout = 30000 }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
