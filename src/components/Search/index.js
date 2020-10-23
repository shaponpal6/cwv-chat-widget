import React, { useContext, useEffect, useState } from 'react'
import MiniSearch from 'minisearch'
import { setFaqsData } from '../../store/actions';
import { useFetch } from '../../hooks/useFetch'
import { useSearch } from '../../hooks/useSearch'



let miniSearch = new MiniSearch({
    fields: ['title', 'body'], // fields to index for full-text search
    storeFields: ['id', 'title', 'body'] // fields to return with search results
})

function Search() {
    const [state, dispatch] = useContext(AppContext);

    const [appState, setAppState] = useState({
        loading: true,
        faqs: [],
    });

    useEffect(() => {
        if (!state.faqs) {
            let url = `${state.apiUrl}posts`;
            const [status, data] = useFetch(url);
            if (status === "success") {
                dispatch(setFaqsData(response.data))
            }
        }
        miniSearch.addAll(state.faqs);

    }, [state.faqs])


    const handleSearchChange = (event) => {
        console.log('event', event)
        let value = event.target.value;
        if (!value && value.length < 3) return
        let results = (miniSearch.search(value))
        console.log('results', results)
        if (results) {
            setAppState({
                loading: false,
                faqs: results
            })
        } else {
            setAppState({
                loading: false,
                faqs: []
            })
        }

    }


    return (
        <div>

        </div>
    )
}

export default Search
