import React from "react";

function Search({handleSearch}) {
  return (
    <div className="Bank of Flariton">
      <p>Transaction</p>
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange= {handleSearch}
      />    </div>
  );
}

export default Search;