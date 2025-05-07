import { setWidget } from "@workspace/widget";

const container = document.getElementById('reading-bar-container');

if (container) setWidget(container, {});

window.addEventListener('message', event => {

    if (container && event.data.type === "updateWidget") 
        setWidget(container, event.data.config);
});