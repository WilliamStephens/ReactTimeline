
const convertTime = seconds => {
    const date = new Date(null)
    date.setSeconds(seconds)
    return date.toISOString().substr(11, 8)
}

// TODO: Unit Test
const TimerComponent = ({time}) => (
    <div style={{height: "50px", width: "100px", border:"2px black solid", margin:"10px", backgroundColor: "white"}}>
        <div style={{fontFamily: "Open Sans", fontSize: "16px", textAlign: "center", verticalAlign:"center", lineHeight:"50px"}}>
            {convertTime(time)}
        </div>
    </div>
)