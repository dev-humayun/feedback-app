import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Conditional from './Conditional';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
export default function App() {
  /* 
    Global UseState
   */
  return (
    <FeedbackProvider>
      <Router>
        <Header text={"FeedBack UI"} />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                {/* <FeedbackForm />
            <FeedbackStats />
            <FeedbackList /> */}
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>

            </Route>
            <Route path='/about' element={<><AboutPage /></>} />


          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>

  )
}


