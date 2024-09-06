
let textbtn = document.querySelectorAll("#textbtn")

textbtn.forEach(div => {
    div.addEventListener('click' , () =>{
        document.querySelector('.textactive')?.classList.remove('textactive');
        div.classList.add('textactive')
    })
})