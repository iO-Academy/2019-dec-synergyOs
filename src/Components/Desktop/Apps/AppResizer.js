function resizeApp(target, activateApp) {
    activateApp()
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
    
    target.onmousedown = dragMouseDown;
    console.log(target.parentElement)
    let elmnt = target.parentElement.querySelector('.app-content')

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
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
}

module.exports = resizeApp 