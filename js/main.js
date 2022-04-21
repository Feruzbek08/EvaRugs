const modalbtn = document.querySelector('.btnToOrder'),
      modal = document.querySelector('.modal'),
      modalbtnclose = document.querySelector('.modal_close');


modalbtn.addEventListener('click', () => {
    // modal.classList.add('show');
    // modal.classList.remove('hide');
    modal.classList.toggle('show')
    document.body.style.overflow = 'hidden';
})
modalbtnclose.addEventListener('click', closemodal)

modal.addEventListener('click', e => {
    if(e.target === modal){
        closemodal();
    }
})
function closemodal() {
    modal.classList.toggle('show')
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if(e.code === "Escape") {
        closemodal();
    }
})

const btnS = document.querySelector('#send'),
form = document.querySelector('#formm')

btnS.addEventListener('click', (e) => {
    e.preventDefault();
    const personName = document.querySelector('#name').value,
      email = document.querySelector('#email').value,
      message = document.querySelector('#mess').value
      
    const req = {
        name: personName,
        email:email,
        message:message
    }
    console.log(personName)
    fetch('js/server.php', {
        method: "POST",
        body: JSON.stringify(req),
        headers:{
            'Content-type': 'application/json'
        }
    })
    
    form.reset()
    setTimeout(closemodal,200)
})