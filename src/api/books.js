import fetchBooks from './client';

export const getBooks = () => {
  return fetchBooks.get('/Books');
};
console.log(getBooks);
export const getBookDetails = (bookId) => {
  return fetchBooks.get(`/Books/${bookId}`);
};
