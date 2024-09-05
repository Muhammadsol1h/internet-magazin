let plus = document.querySelectorAll("#plus");
let minus = document.querySelectorAll("#minus");
let cartdiv = document.querySelectorAll("#cartdiv");
plus.forEach((btn, index) => {
    btn.addEventListener('click', () =>{
        cartdiv[index].classList.remove('hidden')
    });
});

minus.forEach((mins , index) =>{
    mins.addEventListener('click', () =>{
        cartdiv[index].classList.add('hidden')
    })
})