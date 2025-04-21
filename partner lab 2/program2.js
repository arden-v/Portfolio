

//make selected color of drop down as background color of the page
function submitchanges() {
    //1
    let name = document.getElementById("name").value;
    namechange.textContent = "Hello User " + name;

    let message = document.getElementById("message").value;
    messagechange.textContent = message;
    

    
//2





  
    let color = document.getElementById("coloroptions");
    console.log(color.value);
    document.body.style.backgroundColor = color.value;
  
}
        
    
