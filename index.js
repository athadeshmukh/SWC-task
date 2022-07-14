const toggle = document.querySelector('#toggle')
const list = document.querySelector('#list')
const pad = document.querySelector('.pad')

toggle.addEventListener('click', () =>{
    if(list.classList.contains('hidden') && pad.classList.contains('pt-56')) {
        list.classList.remove('hidden');
        pad.classList.remove('pt-56');
    } else {
        list.classList.add('hidden');
        pad.classList.add('pt-56');
    }
})
