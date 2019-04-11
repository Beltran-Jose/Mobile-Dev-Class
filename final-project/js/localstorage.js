var theList = document.getElementById('ulList').innerHTML;
localStorage.setItem('listItems', theList);

function loadItems (){
    document.getElementById('ulList').innerHTML = localStorage.getItem('listItems');
}