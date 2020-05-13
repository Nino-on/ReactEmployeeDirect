import React, {useState}from "react";

function Searchbar(props) {
  const [username ,setUsername] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Search returned " + username);
    
  };






  return (
    <form onSubmit={handleSubmit}className="search">
    <div className="form-group">
      <label htmlFor="language">Search Term:</label>
      <input
        value={props.search}
        onChange={e => setUsername(e.target.value)}
        name="term"
        list="term"
        type="text"
        className="form-control"
        placeholder="Type in a search term to begin"
        id="term"
      />
       <div className="mt-4">
          <h3> {username}</h3>
          
        </div>
      
    </div>
  </form>
  );
}

export default Searchbar;
