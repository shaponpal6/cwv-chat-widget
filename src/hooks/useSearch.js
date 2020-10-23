import React, { useEffect, useState } from 'react'
import MiniSearch from 'minisearch'

let defaultConfig = {
    fields: ['title', 'body'],
    storeFields: ['id', 'title', 'body']
}

const useSearch = (data = [], config = {}) => {

    let miniSearch = new MiniSearch(config || defaultConfig);
    miniSearch.addAll(data);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const search = query => {
        setSearchTerm(query);
    };

    useEffect(() => {
        if (!searchTerm) return;
        let results = (miniSearch.search(searchTerm))


        // const people = [
        //     "Siri",
        //     "Alexa",
        //     "Google",
        //     "Facebook",
        //     "Twitter",
        //     "Linkedin",
        //     "Sinkedin"
        // ];

        // const results = people.filter(person =>
        //     person.toLowerCase().includes(searchTerm.toLowerCase())
        // );

        setSearchResults(results);

    }, [searchTerm]);

    return [search, searchResults];
};


export default { useSearch };
