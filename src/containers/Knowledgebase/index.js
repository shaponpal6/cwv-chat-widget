import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import MiniSearch from 'minisearch'
import { useMiniSearch } from 'react-minisearch'
import { AppContext } from '../../store';
import { setRoute, setFaqsData } from '../../store/actions';
import Card from '../../components/Card'
import RSC from "react-scrollbars-custom";
import ListView from '../../components/ListView'
import ButtonCircle from '../../components/ButtonCircle';
// import Card from '../../components/Card'
// import './header.css'
// import './footer.css'
import './body.css'
import { ArrowLeft, X } from 'react-feather';


let miniSearch = new MiniSearch({
  fields: ['title', 'body'], // fields to index for full-text search
  storeFields: ['id', 'title', 'body'] // fields to return with search results
})


// Index all documents
// miniSearch.addAll(documents)


function Knowledgebase() {
  const [state, dispatch] = useContext(AppContext);

  const [appState, setAppState] = useState({
    loading: true,
    faqs: [],
  });

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


  useEffect(() => {
    setAppState({
      loading: false,
      faqs: state.faqs
    })
    miniSearch.addAll(state.faqs);

  }, [state.faqs])


  // Close Chat Widget
  const onDashboardBack = () => {
    dispatch(setRoute('chatDashboard'));
  };
  // Close Chat Widget
  const onDashboardClose = () => {
    dispatch(setRoute('chatIntro'));
  };
  // Close Chat Widget
  const onLiveChat = () => {
    dispatch(setRoute('chatWidget'));
  };


  return (
    <div className="wpcwv-widgetWraper">
      <div className="wpcwv-kbWraper">
        <div className="wpcwv-kbHeader">
          <span className="wpcwv-arrowBack" onClick={onDashboardBack}>
            <ArrowLeft />
          </span>
          <span className="wpcwv-kbTitle">Knowledgebase</span>

        </div>
        <div className="wpcwv-chatBodyWraper">

          <div title="Search">
            <input type="text" className="wpcwv-input" onChange={handleSearchChange} placeholder='Search…' />
          </div>

          <RSC className="wpcwv-messageScrollbarWraper" id="wpcwv-messageScrollbarWraper" style={{ width: "100%", height: "100%", padding: "10px" }} momentum={true} maximalThumbYSize={10} >


            {/* <Card title="TRENDING QUESTIONS" footer="Send us a Message" onClick={onLiveChat}> */}
            {/* <div className="wpcwv-listWraper"> */}

            {/* <h2>TRENDING QUESTIONS</h2> */}

            {appState.loading && "Loading...."}
            {appState.faqs && appState.faqs.map((faq) => {
              return (
                <ListView key={faq.id} title={faq.title}>
                  <p>{faq.body}</p>
                </ListView>
              );
            })}



            {/* <ListView title="Quertion Title">
              <p>This is Content</p>
              <p>This is Content</p>
            </ListView> */}




          </RSC>
        </div>

        <div className="wpcwv-FooterWraper wpcwv-dashboardFooter" onClick={onLiveChat}>
          Live Chat with us
        </div>
      </div>
      <div className="wpcwv-widgetClose"><ButtonCircle setClassName="wpcwv-buttonDashboardClose" onClick={onDashboardClose} content="Close " image={< X size={17} />} /></div>

    </div>
  )
}

export default Knowledgebase
