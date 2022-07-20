import React, {useState} from "react";
import axios from "axios";
import SearchResults from './SearchResults';

export default function Search(){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response){
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);

  }

  function search(event) {
    event.preventDefault();
    //alert(`Searching...${keyword}`);
  

  let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiURL).then(handleResponse);
}

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search a word..."
            onChange={handleKeywordChange}
            autoFocus={true}
          />
        </form>
      </section>
      <SearchResults results={results} />
    </div>
  );
}