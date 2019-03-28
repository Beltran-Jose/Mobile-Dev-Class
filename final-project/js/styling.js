function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("main").style.marginLeft = "70%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }