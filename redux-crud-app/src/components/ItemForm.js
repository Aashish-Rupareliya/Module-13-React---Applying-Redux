import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItem, updateItem } from '../actions/itemActions';
import { useHistory, useParams } from 'react-router-dom';

const ItemForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { items } = useSelector(state => state.items);

  useEffect(() => {
    if (id) {
      const item = items.find(item => item.id === parseInt(id));
      if (item) {
        setName(item.name);
      }
    }
  }, [id, items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateItem(id, { name }));
    } else {
      dispatch(createItem({ name }));
    }
    history.push('/items');
  };

  return (
    <div>
      <h1>{id ? 'Edit Item' : 'Add Item'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default ItemForm;
