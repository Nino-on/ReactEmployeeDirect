import React, {useState}from "react";


function Searchbar(props) {
  const [username ,setUsername] = useState("");

const handleInput = (e)=>{
  setUsername(e.target.value);
}

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      props.handleSubmit(username)}}className="search">
    <div className="form-group">
      <label htmlFor="language">Search Term:</label>
      <input
        value={username}
        onChange={handleInput}
        name= "username"
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
