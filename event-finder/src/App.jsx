import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import EventList from './components/EventList'

const apiUsername = import.meta.env.VITE_USERNAME
const apiPassword = import.meta.env.VITE_PASSWORD



function App() {

  const [selectedState, setSelectedState] = useState('')


  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const [selectedEventType, setSelectedEventType] = useState('');

  const handleEventTypeChange = (event) => {
    setSelectedEventType(event.target.value);
  };

  const [eventResults, setEventResults] = useState([])

  function getByState(e){
    e.preventDefault()
    axios.get(`https://api.seatgeek.com/2/events?client_id=${apiUsername}&client_secret=${apiPassword}&venue.state=${selectedState}&type=${selectedEventType}`)
      .then(res => setEventResults(res.data.events))
      .catch(err => console.log(err))
  }


  console.log(eventResults)

  return (
    <>
      <FilterForm 
        handleStateChange = {handleStateChange}
        handleEventTypeChange ={handleEventTypeChange}
        selectedState={selectedState}
        selectedEventType={selectedEventType}
        getByState = {getByState}
      />

      <EventList eventResults= {eventResults} />
    </>
  )
}

export default App
