const range = document.querySelector('input[type="range"]');
const labels = document.querySelectorAll('label');

range.addEventListener('input', ()=>{
    labels[0].innerText = `${range.value} x ${range.value}`;
})