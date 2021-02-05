import React, { useState} from 'react'

const SearchParams = () => {
const [location, updateLocation] = useState("Fayetteville, AR"); //all hooks start with 'use'

return (  
  <div className="search-params">
    <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input 
            id="location" 
            value={location} 
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;