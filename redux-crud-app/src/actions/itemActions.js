import axios from 'axios';

const API_URL = 'http://localhost:5001/items';

export const fetchItems = () => async dispatch => {
  dispatch({ type: 'FETCH_ITEMS_REQUEST' });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
  }
};

export const createItem = (item) => async dispatch => {
  try {
    const response = await axios.post(API_URL, item);
    dispatch({ type: 'CREATE_ITEM_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_ITEM_FAILURE', payload: error.message });
  }
};

export const updateItem = (id, item) => async dispatch => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, item);
    dispatch({ type: 'UPDATE_ITEM_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_ITEM_FAILURE', payload: error.message });
  }
};

export const deleteItem = (id) => async dispatch => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: 'DELETE_ITEM_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_ITEM_FAILURE', payload: error.message });
  }
};