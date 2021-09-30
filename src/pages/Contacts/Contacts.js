import '../../Components/Navbar/navbar.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooks } from '../../store/book/reducer/book.reducer';

const Contacts = () => {
  const { status, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div>
      <h1 className="AllContacs">Contacts</h1>
      <h2>post.....</h2>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
    </div>
  );
};

export default Contacts;
