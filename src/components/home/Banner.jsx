import { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from '../Search';

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  const taggleShowSearch = () => {
    setShowSearch((preShowSearch) => !preShowSearch);
  };

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__seachButton"
          variant="outlined"
          onClick={taggleShowSearch}
        >
          Search Dates
        </Button>
      </div>

      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>

        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;