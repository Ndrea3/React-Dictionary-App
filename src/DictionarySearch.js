import React, {useState} from "react";
import axios from "axios";
import SearchResults from './SearchResults';
import "./DictionarySearch.css";

export default function Search(props){
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);

  function handleResponse(response){
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);

  }

  function search(){
  let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiURL).then(handleResponse);
} 
  

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded){
  return (
    <div className="dictionary-search">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a word..."
            onChange={handleKeywordChange}
            autoFocus={true}
          />
        </form>
        <div className="suggestions">
          <em>Suggested Words: plan, hiking, event, etc.</em>
        </div>
      </section>{" "}
      <br />
      <SearchResults results={results} />
    </div>
  );
} else {
  load();
  return "Loading..."
}
}