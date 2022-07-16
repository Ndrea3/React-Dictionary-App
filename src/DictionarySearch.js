import React, {useState} from "react";

export default function Search(){
let [keyword, setKeyword]= useState("");

    function search(event){
    event.preventDefault();
    alert(`Searching...${keyword}`);
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

    return (
    <div className="text-center">
        <form onSubmit={search}>
            <input type="search" placeholder="Search a word..." onChange={handleKeywordChange} autoFocus={true}/>
        </form>

    </div>);
}