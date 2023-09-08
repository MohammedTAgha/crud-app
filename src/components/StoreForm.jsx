import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { createOrUpdateStore, getStoreById } from '../API/api';

function StoreForm() {
  const history = useNavigate();
  const { id } = useParams();
  const [storeData, setStoreData] = useState({
    name: '',
    cities: [],
  });

  useEffect(() => {
    if (id) {
      async function fetchStore() {
        try {
          const data = await getStoreById(id);
          setStoreData(data);
        } catch (error) {
          console.error('Error fetching store:', error);
        }
      }

      fetchStore();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStoreData({
      ...storeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createOrUpdateStore(storeData);
      history.push('/');
    } catch (error) {
      console.error('Error creating/updating store:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Store' : 'Create Store'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={storeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cities:</label>
          <input
            type="text"
            name="cities"
            value={[storeData.cities]}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default StoreForm;
