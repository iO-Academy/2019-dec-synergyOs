function resizeApp(target, activateApp) {
    activateApp()
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0

    target.onmousedown = dragMouseDown;
    let elmnt = target.parentElement.querySelector('.app-content')
    console.log(target.parentElement.querySelector('.app-content'))

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.height = (elmnt.offsetHeight - pos2) + "px";
        elmnt.style.width = (elmnt.offsetWidth - pos1) + "px";

        console.log(elmnt.offsetWidth)

        if (elmnt.offsetWidth < 100) {
            elmnt.offsetWidth = 100
        }

        if (elmnt.offsetHeight < 100) {
            elmnt.offsetHeight = 100
        }
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        if (elmnt.offsetWidth < 100) {
            elmnt.style.width = 100
        }

        if (elmnt.offsetHeight < 100) {
            elmnt.style.height = 100
        }
    }

}

module.exports = resizeApp 