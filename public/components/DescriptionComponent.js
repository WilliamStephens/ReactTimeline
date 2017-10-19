

// TODO: Unit Test
const DescriptionComponent = ({event}) => (
    <div style={{marginLeft: "5%", border: "2px black solid", width:"75%", fontFamily: "Open Sans"}}>
        <div>
            <div style={{padding:"10px", backgroundColor: colorPicker(event.backgroundColor)}}>
                <TitleComponent title={event.title} backgroundColor={event.backgroundColor} judgmentIcon={event.judgmentIcon}/>
                <SubtitleComponent subtitle={event.subtitle} color={event.color} />
                <NotesComponent notes={event.notes}/>
            </div>
            {event.evaluation ? (<EvaluationComponent evaluation={event.evaluation} color={event.color}/>) : null}
        </div>
    </div>
)