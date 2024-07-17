import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../actions/itemActions';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h1>Item List</h1>
      <Link to="/add-item">Add Item</Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <Link to={`/edit-item/${item.id}`}>Edit</Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
