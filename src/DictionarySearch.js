import React, {useState} from "react";
import axios from "axios";
import SearchResults from './SearchResults';
import Photos from './Photos';
import "./DictionarySearch.css";

export default function Search(props){
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);
  let [photos, setPhotos] = useState(null)

  function handleResponse(response){
    setResults(response.data[0]);

  }

  function handlePexelsResponse(response){
    setPhotos(response.data.photos);
  }

  function search(){
  let apiURL=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiURL).then(handleResponse);


  let pexelsAPIKey = "563492ad6f91700001000001ae70e56c833b4f2799626992678be943";
  let pexelsAPIURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
  axios.get(pexelsAPIURL, { headers: {"Authorization" : `Bearer ${pexelsAPIKey}`}}).then(handlePexelsResponse);

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
        <h3>What are you looking for?</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            defaultValue={props.defaultKeyword}
            onChange={handleKeywordChange}
            autoFocus={true}
          />
        </form>
        <div className="suggestions">
          <em>Suggested Words: plan, hiking, event, etc.</em>
        </div>
      </section>
      <SearchResults results={results} />
      <Photos photos={photos}/>
    </div>
  );
} else {
  load();
  return "Loading..."
}
}