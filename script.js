const form = document.getElementById("signup-form"); 
form.addEventListener('submit', function(e){ 
    alert("Form Submitted")
    console.log(e); 
    e.preventDefault();  
}); 
