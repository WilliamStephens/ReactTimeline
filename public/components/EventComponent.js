
const colorPicker = backgroundColor => backgroundColor === null ? "white" : backgroundColor

// TODO: Unit Test
const EventComponent = ({event}) => (
    <div style={{display: "flex", alignItems:"center", marginBottom:"25px"}}>
        <TimerComponent time={event.time}/>
        <IconComponent icon={event.icon} backgroundColor={colorPicker(event.backgroundColor)}/>
        <DescriptionComponent event={event} />
    </div>
)