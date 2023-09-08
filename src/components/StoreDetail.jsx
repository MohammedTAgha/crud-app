
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStoreById } from '../API/api';

function StoreDetail() {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    async function fetchStore() {
      try {
        const data = await getStoreById(id);
        setStore(data);
      } catch (error) {
        console.error('Error fetching store:', error);
      }
    }

    fetchStore();
  }, [id]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Store Detail</h2>
      <p>ID: {store.id}</p>
      <p>Name: {store.name}</p>
      <p>Cities: {store.cities.join(', ')}</p>
    </div>
  );
}

export default StoreDetail;
