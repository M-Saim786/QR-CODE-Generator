container = document.querySelector('.container')
// console.log(container)
// btn = document.querySelector('.button')
// console.log(img)
// console.log(input)
// console.log(btn)
btn = document.getElementById('btn')
input = document.getElementById('input')
img = document.getElementById('img')

const generate = ()=>{
    inputval = input.value
    // console.log(inputval)
    if (!inputval)return alert('Please Paste URL!')              
            // (inputval>0) simple
     {
        img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`
        container.classList.add('active')
    }
    // console.log('click')
}