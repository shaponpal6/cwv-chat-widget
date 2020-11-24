import React from 'react'
import Header from './components/Header'

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/animate.css'
// import './assets/css/font-awesome.min.css'
// import './assets/css/ionicons.min.css'
// import './assets/css/cryptocoins.css'
// import './assets/css/magnific-popup.css'
// import './assets/css/spop.min.css'
import './assets/css/responsive.css'
import './assets/color/theme.css'
import './assets/css/custom.css'
import Banner from './components/Banner'
import Section from './components/Section'
// import './assets/owlcarousel/css/owl.carousel.min.css'
// import './assets/owlcarousel/css/owl.theme.default.min.css'


// js
// import './assets/js/iconify.min'


  

function HomePage() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Section id="chat-with-visitors" title="Manage multiple website Visitors in one place" desc="Chatbot is a faster way of connecting, Engage, and support your every website visitors in one chat control panel in real-time."/>
        
        
        
        
        
        </div>
    )
}

export default HomePage
