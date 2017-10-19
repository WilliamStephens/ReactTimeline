
const EvaluationComponent = ({evaluation, color}) => (
    <div style={{display: "inline"}}>
        <div style={{padding:"10px", fontSize:"14px", color:color, borderTop:"1px solid black", backgroundColor: "white"}}>
            {evaluation.text}
            {evaluation.score ? (<ScoreComponent score={evaluation.score} maxScore={evaluation.maxScore} color={event.color}/>) : null}
        </div>
    </div>
)