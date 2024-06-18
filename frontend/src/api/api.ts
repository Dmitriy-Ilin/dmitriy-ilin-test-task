import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getUsers = () => api.get('/users');
export const getAlbums = (userId: string) => api.get(`/albums/${userId}`);
export const getPhotos = (albumId: string) => api.get(`/photos/${albumId}`);
