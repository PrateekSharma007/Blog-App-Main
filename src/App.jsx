import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {
  return (

    // <Router>
    // <div className="pt-20">

    // </div> 
    // </Router>
    <main>
      <header>
        <a href="">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <p>The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet. The multiple fuel sources used to generate electricity results in a more secure energy source for the electrified portion of the transportation sector. All of this adds to our nation’s energy security.</p>
      </div>

      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <p>The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet. The multiple fuel sources used to generate electricity results in a more secure energy source for the electrified portion of the transportation sector. All of this adds to our nation’s energy security.</p>
      </div>

      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <p>The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet. The multiple fuel sources used to generate electricity results in a more secure energy source for the electrified portion of the transportation sector. All of this adds to our nation’s energy security.</p>
      </div>

      <div className='entry'>
        <img src="https://s3-ap-southeast-1.amazonaws.com/subscriber.images/the-learning-tree/wp-content/uploads/2020/06/26091250/June20_SE_Electric-Car_Blog-Banner.jpg" alt="" />
        <p>The United States became a net exporter of petroleum in 2020 with exports surpassing imports, although imports of 7.86 million barrels per day remained an important part of balancing supply and demand for domestic and international markets. Overall, the transportation sector accounts for approximately 30% of total U.S. energy needs and 70% of U.S. petroleum consumption. Using more energy efficient vehicles like hybrid and electric vehicles supports the U.S. economy and helps diversify the U.S. transportation fleet. The multiple fuel sources used to generate electricity results in a more secure energy source for the electrified portion of the transportation sector. All of this adds to our nation’s energy security.</p>
      </div>
    </main>
  )
}

export default App

// \\\  <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<About />} />
//       </Routes>
