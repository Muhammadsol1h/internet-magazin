
let textbtn = document.querySelectorAll("#textbtn")

divbtn.forEach(div => {
    div.addEventListener('click' , () =>{
        document.querySelector('.textactive')?.classList.remove('textactive');
        div.classList.add('textactive')
    })
})