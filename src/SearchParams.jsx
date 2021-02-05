import React, { useState} from 'react'

const SearchParams = () => {
const [location, setLocation] = useState("Fayetteville, AR"); //all hooks start with 'use'

return (
  <div className="search-params">
    <form>
      <label htmlFor="">
        Location
        <input 
          id="location" 
          value={location} 
          placeholder="Location"
          onChange={e => setLocation(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  </div>
);
};

export default SearchParams;