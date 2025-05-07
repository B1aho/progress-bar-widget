import { setWidget } from "@workspace/widget";

const container = document.getElementById('reading-bar-container');

// первый рендер, если нужно:
if (container) setWidget(container, {});

window.addEventListener('message', event => {

    //if (event.data.type === 'updateConfig') {
    if (container && event.data === "updateWidget") setWidget(container, event.data.config);
    // }
});