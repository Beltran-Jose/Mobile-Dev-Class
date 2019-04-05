// var _el;

// function dragOver(e) {
//     if (isBefore(_el, e.target))
//         e.target.parentNode.insertBefore(_el, e.target);
//     else
//         e.target.parentNode.insertBefore(_el, e.target.nextSibling);
// }

// function dragEnd() {
//     _el = null;
// }

// function dragStart(e) {
//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("text/plain", null);
//     _el = e.target;
// }

// function isBefore(el1, el2) {
//     if (el2.parentNode === el1.parentNode)
//         for (var cur = el1.previousSibling; cur; cur = cur.previousSibling)
//             if (cur === el2)
//                 return true;
//     return false;
// }

var dragging = null;

document.addEventListener('dragstart', function(event) {
    var target = getLI( event.target );
    dragging = target;
    event.dataTransfer.setData('text/plain', null);
    event.dataTransfer.setDragImage(self.dragging,0,0);
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
    var target = getLI( event.target );
    var bounding = target.getBoundingClientRect()
    var offset = bounding.y + (bounding.height/2);
    if ( event.clientY - offset > 0 ) {
       	target.style['border-bottom'] = 'solid 4px blue';
        target.style['border-top'] = '';
    } else {
        target.style['border-top'] = 'solid 4px blue';
        target.style['border-bottom'] = '';
    }
});

document.addEventListener('dragleave', function(event) {
    var target = getLI( event.target );
    target.style['border-bottom'] = '';
    target.style['border-top'] = '';
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    var target = getLI( event.target );
    if ( target.style['border-bottom'] !== '' ) {
        target.style['border-bottom'] = '';
        target.parentNode.insertBefore(dragging, event.target.nextSibling);
    } else {
        target.style['border-top'] = '';
        target.parentNode.insertBefore(dragging, event.target);
    }
});

function getLI( target ) {
    while ( target.nodeName.toLowerCase() != 'li' && target.nodeName.toLowerCase() != 'body' ) {
        target = target.parentNode;
    }
    if ( target.nodeName.toLowerCase() == 'body' ) {
        return false;
    } else {
        return target;
    }
}