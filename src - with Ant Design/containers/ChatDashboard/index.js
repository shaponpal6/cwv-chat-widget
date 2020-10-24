import React, { useContext, useState, useRef, useLayoutEffect, useEffect } from 'react';
import { AppContext } from '../../store';
import axios from "axios";
import { setRoute, setDashWheelState, setFaqsData } from '../../store/actions';
import RSC from "react-scrollbars-custom";
import Card from '../../components/Card'
import doSearch from '../../functions/doSearch'
import useFetch from '../../hooks/useFetch'
import './header.css'
import './footer.css'
import ListView from '../../components/ListView'
import { X, ChevronDown, Twitter } from 'react-feather';
import ButtonCircle from '../../components/ButtonCircle';



const Search = () => {
  const [showResults2, setShowResults] = useState(false)
  const [searchResults, doSearchHandler] = doSearch()
  const onClick = () => setShowResults(true)
  console.log('searchResult', searchResults)
  return (
    <div>
      <input type="text" className="wpcwv-input" placeholder="Search " onChange={doSearchHandler} />

      { showResults2 ? <Results /> : null}
      <div id="results" className="search-results">
        {searchResults.results && searchResults.results.map((faq) => {
          return (
            <ListView key={faq.id} title={faq.title}>
              <p>{faq.body}</p>
            </ListView>
          );
        })}
      </div>

    </div>
  )
}

const Results = () => (
  <div id="results" className="search-results">
    Some Results
  </div>
)


function ChatDashboard() {
  const [state, dispatch] = useContext(AppContext);
  let url = `${state.apiUrl}posts`;
  const [status, fetchData] = useFetch(url);

  // Ref for scroll
  const cwvDashdRef = useRef();
  const [scroll, setWheel] = useState('up');
  const [isScrollingState, setIsScrollingState] = useState(false);
  var isScrolling;

  const handleScroll = (event) => {
    if (!isScrollingState) {
      dispatch(setDashWheelState(event.deltaY < 0 ? 'up' : 'down'));
      setWheel(event.deltaY < 0 ? 'up' : 'down');
    }
    setIsScrollingState(true)
    window.clearTimeout(isScrolling);
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      setIsScrollingState(false)
    }, 1000);
  };

  useLayoutEffect(() => {
    cwvDashdRef.current.addEventListener('mousewheel', handleScroll);

    return () => {
      cwvDashdRef.current.removeEventListener('mousewheel', handleScroll);
    };
  }, []);

  useEffect(() => {

    dispatch(setFaqsData(fetchData))


    // let request = axios.get(`${state.apiUrl}posts`);
    // request.then(function (response) {
    //   console.log('response', response)
    //   console.log('data', response.data)
    //   dispatch(setFaqsData(response.data))
    // })
  }, [fetchData])




  // Close Chat Widget 
  const onWidgetBack = () => {
    dispatch(setRoute('chatWidget'));
  };

  // Close Chat Widget
  const onKnowledgebase = () => {
    dispatch(setRoute('knowledgebase'));
  };
  // Close Chat Widget
  const onDashboardClose = () => {
    dispatch(setRoute('chatIntro'));
  };

  return (
    <div>
      <div ref={cwvDashdRef} className="wpcwv-widgetWraper">
        <div className="wpcwv-chatDashboard">
          <div className={"wpcwv-chatHeader " + (scroll === "down" ? "wpcwv-chatHeaderCollapse" : "")}>
            <div className="wpcwv-dashboardLogo"><Twitter size={36} /></div>
            <h2 className="wpcwv-dashboardTitle">Hi there !</h2>
            <h4 className="wpcwv-dashboardDesc">We help your business grow by connecting you to your customers.</h4>
            <span className="wpcwv-dashboardCloseBtn" onClick={onDashboardClose}><ChevronDown /></span>

          </div>
          <div className="wpcwv-chatBodyWraper">
            <RSC className="wpcwv-messageScrollbarWraper" id="wpcwv-messageScrollbarWraper" style={{ width: "100%", height: "100%" }} momentum={true} maximalThumbYSize={10} >

              <Card title="Start a conversation" footer="Send us a Message" onClick={onKnowledgebase}>

              </Card>

              <Card title="Find your answer now">
                <Search />
              </Card>



              <Card title="A mountain Winner" content="Mountain is the best place to chill out and rest cause it's has beautiful scenery and fresh air" image="https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
              </Card>

              <Card title="A mountain Winner" content="Mountain is the best place to chill out and rest cause it's has beautiful scenery and fresh air" image="https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
                <h2 className="wpcwv-">Card Content</h2>
                <h2 className="wpcwv-">Card Content2222</h2>
              </Card>

            </RSC>
          </div>

          <div className="wpcwv-FooterWraper wpcwv-dashboardFooter">
            I'm Nothing

        </div>
        </div>
        <div className="wpcwv-widgetClose"><ButtonCircle setClassName="wpcwv-buttonDashboardClose" onClick={onDashboardClose} content="Close " image={< X size={17} />} /></div>



      </div>

      {/* <ButtonCircle setClassName="wpcwv-buttonDashboardClose" onClick={onDashboardClose} image={<X size={37} />} /> */}

    </div>
  )
}

export default ChatDashboard
