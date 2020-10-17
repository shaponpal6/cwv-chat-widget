import React, { useContext } from 'react'
import { AppContext } from '../../store';
import { setRoute } from '../../store/actions';
import RSC from "react-scrollbars-custom";
import ListView from '../../components/ListView'
import ButtonCircle from '../../components/ButtonCircle';
// import Card from '../../components/Card'
// import './header.css'
// import './footer.css'
import './body.css'
import { ArrowLeft, X } from 'react-feather';

function Knowledgebase() {
  const [state, dispatch] = useContext(AppContext);


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
          <RSC className="wpcwv-messageScrollbarWraper" id="wpcwv-messageScrollbarWraper" style={{ width: "100%", height: "100%", padding: "10px" }} momentum={true} maximalThumbYSize={10} >


            {/* <Card title="TRENDING QUESTIONS" footer="Send us a Message" onClick={onLiveChat}> */}
            {/* <div className="wpcwv-listWraper"> */}

            {/* <h2>TRENDING QUESTIONS</h2> */}


            <ListView title="Quertion Title">
              <p>This is Content</p>
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>
            <ListView title="Quertion Title">
              <p>This is Content</p>
            </ListView>

            {/* </div> */}

            {/* </Card> */}





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
