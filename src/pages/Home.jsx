import React from 'react';
import './Home.css';
import Banner from '../components/home/Banner';
import Card from '../components/Card';

import apartmentList1 from '../data/apartmentList1.json';
import apartmentList2 from '../data/apartmentList2.json';

const Home = () => {
  return (
    <div className="home">
      <Banner />

      {/* no price */}
      <div className="home__section">
        {apartmentList1.map((apartment) => (
          <Card
            key={apartment.id}
            src={apartment.src}
            title={apartment.title}
            description={apartment.description}
          />
        ))}
      </div>

      <div className="home__section">
        {apartmentList2.map(({ id, src, title, description, price }) => (
          <Card
            key={id}
            src={src}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
