import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="SearchBarContainer">
        <input type="text" placeholder="Enter a song" />
        <div>
            
        </div>
      </div>
    );
  }
}
export default SearchBar;
