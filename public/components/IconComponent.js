

// TODO: Unit Test
const IconComponent = ({icon, backgroundColor}) => (
    <div style={{marginLeft: "5%" }}>
        {
            //TODO: Case statement to fill svg circle with the correct icon
            <svg height="90" width="90">
                <circle cx="45" cy="45" r="35" fill={`${backgroundColor}`} />
            </svg> 
        }
    </div>
)