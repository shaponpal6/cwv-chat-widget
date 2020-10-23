import React, { useContext, useEffect, useState } from 'react'
import MiniSearch from 'minisearch'
import { AppContext } from '../store';
import { setFaqsData } from '../store/actions';
import useFetch from '../hooks/useFetch'
// import useSearch from '../hooks/useSearch'

let miniSearch = new MiniSearch({
    fields: ['title', 'body'], // fields to index for full-text search
    storeFields: ['id', 'title', 'body'] // fields to return with search results
})

const doSearch = () => {
    const [state, dispatch] = useContext(AppContext);
    // const [search, searchResults] = useSearch(state.faqs || []);

    const [searchResult, setSearchResult] = useState({
        loading: true,
        results: [],
    });

    console.log('state.faqs', state.faqs)
    console.log('state.faqs', !!state.faqs)
    console.log('state.faqs', !!state.faqs.length)

    useEffect(() => {
        if (!state.faqs && !state.faqs.length) {
            console.log('fatching....', url)
            let url = `${state.apiUrl}posts`;
            const [status, data] = useFetch(url);
            if (status === "success") {
                dispatch(setFaqsData(data))
            }
        }
        miniSearch.addAll(state.faqs);
    }, [state.faqs]);

    const doSearchHandler = (event) => {
        console.log('event', event)
        let value = event.target.value;
        if (!value && value.length < 3) return
        let results = miniSearch.search(value);
        console.log('results', results)
        if (results) {
            setSearchResult({
                loading: false,
                results
            })
        } else {
            setSearchResult({
                loading: false,
                results: []
            })
        }

    }

    return [searchResult, doSearchHandler]
};

export default doSearch;



