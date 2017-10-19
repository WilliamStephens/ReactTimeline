document.body.style.backgroundColor = "lightgray"

function render(data) {
    ReactDOM.render(
        <TimeLineContainer data={data}/>,
        document.querySelector("#app")
    );
}

// Request failed because of CORS
// const getData = async () => {
//     const response = await fetch('https://s3.amazonaws.com/topbox-frontend-project/data1.json');
//     const data = await response.json();
//     render(data);
// }
// getData();

//TODO: Function to draw svg lines to connect the icons and the components that have reference ids 

// TODO: Unit Test
function chooseSVG(svgName) {
    console.log(svgName)
    if(svgName === null) {
        return {__html: ''};
    }
    let svgTag;
    switch (svgName) {
        //TODO: Names inconsistent with JSON such as success and successIcon
        case "errorIcon":
            svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>error</title><path fill="#464646" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.8 10.7c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0L8 9.1l-2.7 2.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1L6.9 8 4.3 5.4C4 5 4 4.6 4.3 4.3c.3-.3.7-.3 1 0L8 6.9l2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9.1 8l2.7 2.7z"></path></svg>`
            break;
        case "lockIcon":
            svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><title>security</title><path fill="#464646" d="M23 14v-3c0-.5-.5-1-1-1h-2V5.3C20 4.2 18.9 0 12.5 0S5 4.2 5 5.3V10H3c-.5 0-1 .5-1 1v3c0 .5.5 1 1 1-.5 0-1 .5-1 1v3c0 .5.5 1 1 1-.5 0-1 .5-1 1v3c0 .5.5 1 1 1h19c.5 0 1-.5 1-1v-3c0-.5-.5-1-1-1 .5 0 1-.5 1-1v-3c0-.5-.5-1-1-1 .5 0 1-.5 1-1zm-9.5 4.8V20c0 .5-.4 1-1 1s-1-.4-1-1v-1.2c-.9-.4-1.5-1.3-1.5-2.3 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1-.6 1.9-1.5 2.3zM17 10H8V5.4c0-.3.3-2.4 4.5-2.4S17 5.1 17 5.4V10z"></path></svg>`
            break;
        case "sentimentIconNegative":
            svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><title>sentiment - negative</title><circle fill="#464646" cx="15" cy="8" r="1"></circle><circle fill="#464646" cx="10" cy="8" r="1"></circle><path fill="#464646" d="M17 15.5c-.3 0-.5-.2-.5-.5 0-1.8-1-2.5-4-2.5s-4 .7-4 2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-3.5 3.4-3.5 5-3.5s5 0 5 3.5c0 .3-.2.5-.5.5z"></path><path fill="#464646" d="M23 10.2C23 7.5 21.6 5 19.7 3c-1.9-1.9-4.5-3-7.2-3S7.2 1.1 5.3 3C3.4 5 2 7.5 2 10.2c0 2.9 1.4 5.5 3.3 7.5l6.6 7c.1.1.2.2.3.2.1 0 .2.1.3.1.2 0 .5-.1.6-.3l6.6-7c1.9-1.9 3.3-4.6 3.3-7.5zm-2 0c0 2.4-.9 4.7-2.5 6.4L15.3 20l-1.9 2-.3.3c-.3.3-.8.3-1.1 0l-.4-.3-1.9-2-3.2-3.4c-1.6-1.7-2.5-4-2.5-6.4 0-2.2.9-4.4 2.5-6 1.6-1.6 3.7-2.5 6-2.5s4.4.9 6 2.5c1.6 1.6 2.5 3.7 2.5 6z"></path></svg>`
            break;
        case "success":
            svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>success</title><path fill="#464646" d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm4 5.8l-4.69 5.4a.68.68 0 0 1-.15.13.75.75 0 0 1-1 0L4.07 9.25A.82.82 0 0 1 4 8.13a.74.74 0 0 1 1.07 0L6.62 9.6l4.22-4.86a.74.74 0 0 1 1.07-.05A.82.82 0 0 1 12 5.8z"></path></svg>`
            break;
        case "troubleshootIcon":
            svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><title>troubleshoot</title><path fill="#464646" d="M21.08 17.17a3.88 3.88 0 0 0-1 .13l-7.8-7.84A6.49 6.49 0 0 0 6.5 0h-.61l-.81.84 2.09 2.09a1.05 1.05 0 0 1 0 1.48L4.41 7.17a1.05 1.05 0 0 1-1.48 0L.84 5.08 0 5.89v.61a6.49 6.49 0 0 0 9.46 5.78l7.84 7.84a3.91 3.91 0 1 0 3.79-3zm0 5.88a2 2 0 1 1 2-2 2 2 0 0 1-2 1.95z"></path></svg>`
            break;
        case "verificationIcon":
            svgTag = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><title>survey</title><path fill="#464646" d="M20 2h-3.3l-.7-.7c-.2-.2-.4-.3-.7-.3H15V.5c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5V1h-.5c-.2 0-.5.1-.7.3l-.7.7H5c-1.1 0-2 .9-2 2v19c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 21H5V4h3.3l.5.5c.2.1.5.3.7.3h5.8c.3 0 .5-.1.7-.3l.5-.5H20v19z"></path><path fill="#464646" d="M16.8 10.2c-.3-.3-.7-.2-1 0l-5.3 6.1L9.1 15c-.3-.3-.7-.3-1 0-.3.3-.3.7 0 1l1.9 1.8c.1.1.3.2.5.2s.3 0 .4-.2l.1-.1 5.7-6.5c.4-.3.4-.8.1-1z"></path></svg>`
            break;
        default:
            break;
    }
    return {__html: svgTag};
}

render([
    {
        "id": 1,
        "title": "Start",
        "subtitle": null,
        "color": "red",
        "backgroundColor": null,
        "lineColor": null,
        "icon": null,
        "judgmentIcon": null,
        "time": 0,
        "evaluation": {
            "text": "Some question category",
            "score": 3,
            "maxScore": 10,
            "icon": "checkbox"
        },
        "references": []
    },{
        "id": 2,
        "title": "Start of Some Event",
        "subtitle": "Customer failed to blah blah",
        "color": "red",
        "backgroundColor": null,
        "lineColor": null,
        "icon": "lockIcon",
        "judgmentIcon": "errorIcon",
        "time": 15,
        "evaluation": null,
        "notes": "Lots of notes about something enean nec auctor leo. Praesent facilisis quis turpis ac scelerisque.",
        "references": [5]
    },{
        "id": 3,
        "title": "Customer Unhappy",
        "subtitle": null,
        "color": null,
        "backgroundColor": "red",
        "lineColor": "red",
        "icon": "sentimentIconNegative",
        "judgmentIcon": null,
        "time": 20,
        "evaluation": null,
        "references": []
    },{
        "id": 4,
        "title": "Verification",
        "subtitle": null,
        "color": null,
        "backgroundColor": null,
        "lineColor": null,
        "icon": "verificationIcon",
        "judgmentIcon": null,
        "time": 76,
        "evaluation": {
            "text": "Some question category",
            "score": null,
            "maxScore": null,
            "icon": "checkbox"
        },
        "references": []
    },{
        "id": 5,
        "title": "End of Some Event",
        "subtitle": null,
        "color": "green",
        "backgroundColor": null,
        "lineColor": null,
        "icon": "lockIcon",
        "judgmentIcon": "success",
        "time": 121,
        "evaluation": null,
        "references": [2]
    },{
        "id": 6,
        "title": "Resolution",
        "subtitle": null,
        "color": null,
        "backgroundColor": null,
        "lineColor": null,
        "icon": "troubleshootIcon",
        "judgmentIcon": null,
        "time": 142,
        "evaluation": null,
        "references": []
    },{
        "id": 7,
        "title": "End",
        "subtitle": null,
        "color": null,
        "backgroundColor": null,
        "lineColor": null,
        "icon": null,
        "judgmentIcon": null,
        "time": 160,
        "evaluation": null,
        "references": []
    }
])