import React, { useContext } from 'react'
import { AppContext } from '../../store';
import { setRoute } from '../../store/actions';
import RSC from "react-scrollbars-custom";
import Card from '../../components/Card'
import './footer.css'

function ChatDashboard() {
  const [state, dispatch] = useContext(AppContext);


  // Close Chat Widget
  const onWidgetBack = () => {
    dispatch(setRoute('chatWidget'));
  };

  return (
    <div>
      <div className="wpcwv-chatDashboard">
        <div className="wpcwv-chatHeader">
          <h2>Logo</h2>
          <h2>Hi</h2>
          <h4>We help your business grow by connecting you to your customers.</h4>

        </div>
        <div className="wpcwv-chatBodyWraper">
          <RSC className="wpcwv-messageScrollbarWraper" id="wpcwv-messageScrollbarWraper" style={{ width: "100%", height: "100%" }} momentum={true} maximalThumbYSize={10} >

            <Card title="Start a conversation" footer="Send us a Message" onClick={onWidgetBack}>

            </Card>

            <Card title="Find your answer now">
              <input type="text" />
            </Card>



            <Card title="A mountain Winner" content="Mountain is the best place to chill out and rest cause it's has beautiful scenery and fresh air" image="https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
            </Card>

            <Card title="A mountain Winner" content="Mountain is the best place to chill out and rest cause it's has beautiful scenery and fresh air" image="https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
              <h2 className="wpcwv-">Card Content</h2>
              <h2 className="wpcwv-">Card Content2222</h2>
            </Card>

          </RSC>
        </div>

        <div className="wpcwv-FooterWraper wpcwv-dashboardFooter">We Are Nothing</div>

      </div>
    </div>
  )
}

export default ChatDashboard
