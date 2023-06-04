import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import "./components/Header"
import Header from './components/Header';

function App() {
  return (

    // <Router>
    // <div className="pt-20">

    // </div> 
    // </Router>
    <main>
      <Header/>
      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <div className = "text">
        <p className='title'>Electric Vehicle Benefits and Considerations</p>
        <a href="" className="author">Prateek Sharma</a>
        <time>2023-04-06</time>
        <p classname = "info">The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet.</p></div>
        
      </div>

      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <div className = "text">
        <p className='title'>Electric Vehicle Benefits and Considerations</p>
        <a href="" className="author">Prateek Sharma  </a>
        <time>2023-04-06</time>
        <p classname = "info">The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet.</p></div>
      </div>

      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <div className = "text">
        <p className='title'>Electric Vehicle Benefits and Considerations</p>
        <a href="" className="author">Prateek Sharma</a>
        <time>2023-04-06</time>
        <p classname = "info">The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet. </p></div>
      </div>

      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <div className = "text">
        <p className='title'>Electric Vehicle Benefits and Considerations</p>
        <a href="" className="author">Prateek Sharma  </a>
        <time>2023-04-06</time>
        <p classname = "info">The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet.</p></div>
      </div>
    </main>
  )
}

export default App

// \\\  <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<About />} />
//       </Routes>
