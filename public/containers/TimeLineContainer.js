
// TODO: Unit Test
const TimeLineContainer = ({data}) => (
    <div>
        {data.map(event => <EventComponent event={event} />)}
    </div>
)
