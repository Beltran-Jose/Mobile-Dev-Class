function newToDoey() {
    //variables
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var theText = document.createTextNode(inputValue);

    //append, attributes & class name
    li.appendChild(theText);
    li.className = "list-item";
    li.setAttribute('draggable', 'true');

    //attach the new li to the ul
    if (inputValue === '') {
        alert("TO-DOey is empty");
    } else {
        document.getElementById("ulList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'li') {
        e.target.classList.toggle('checked');
    }
}, false);