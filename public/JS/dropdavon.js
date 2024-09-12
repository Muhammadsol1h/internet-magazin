let DropDownbutton = document.querySelector('#btn');

console.log(DropDownbutton);

DropDownbutton.addEventListener("click" , function toggleFropdown() {
    console.log("clicked", document.querySelector(".DropDownPerent"));
    
    document.querySelector(".DropDownPerent").classList.toggle("hidden")
})
