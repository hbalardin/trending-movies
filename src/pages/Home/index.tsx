import React, { useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const Home = () => {
  useEffect(() => {
    const loadData = async () => {
      const response = await api.get(
        `trending/all/day?api_key=b9a162a4975820acf517003c0ae2c2d2`
      );
      console.log(response.data);
    };
    loadData();
  }, []);
  return <div />;
};

export default Home;
