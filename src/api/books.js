import client from './client';

export const getBooks = () => {
  return client.get('/Books');
};

export const getBookDetails = (bookId) => {
  return client.get(`/Books/${bookId}`);
};
