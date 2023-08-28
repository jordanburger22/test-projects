

function EventList(props){

    const { eventResults } = props


    const events = eventResults.map(event => {
        const date = new Date(event.datetime_local).toDateString()
        return(
            
            <div className="event-container">
                <div>
                    <img src={event.performers[0].image}/>
                </div>
                <div className="event-info">
                    <h1>{event.performers[0].name}</h1>
                    <p>{date}</p>
                </div>
            </div>
        )
    })

    return(
        <div>
            {events}
        </div>
    )
}

export default EventList