import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllStores } from '../API/api';

function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fetchStores() {
      try {
        const data = await getAllStores();
        setStores(data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    }

    fetchStores();
  }, []);

  return (
    <div>
      <h2>Store List</h2>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            <Link to={`/stores/${store.id}`}>{store.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Create New Store</Link>
    </div>
  );
}

export default StoreList;
