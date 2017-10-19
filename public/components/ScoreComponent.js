
// TODO: Unit Test
const ScoreComponent = ({score, maxScore}) => (
    <div style={{float:"right"}}>
        <div>
            {`${score}/${maxScore}`}
        </div>
    </div>
)