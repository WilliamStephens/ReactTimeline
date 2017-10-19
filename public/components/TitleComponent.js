
// TODO: Unit Test
// TODO: Refactor to not use set inner HTML
const TitleComponent = ({title, backgroundColor, judgmentIcon}) => (
    <div>
        <div dangerouslySetInnerHTML={chooseSVG(judgmentIcon)} style={{float:"right"}}>
        </div>
        <div style={{fontWeight: "bold", fontSize:"18px", color: backgroundColor === null ? "black" : "white" }}>
            {title}
        </div>
    </div>
)