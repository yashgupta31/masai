let buttons= document.querySelectorAll('button')

buttons.forEach((button)=>{
    let value= '';
    button.addEventListener('click', (e)=>{ 
        value+= e.target.innerText 
        // console.log(value)
        document.querySelector('.focused-input').value=  value;
        // let seperate= value.splice('')
        // console.log(seperate)
        const result = eval(value);
        console.log(result)

    })
    
})


