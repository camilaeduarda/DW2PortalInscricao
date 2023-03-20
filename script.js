
let oldScreen = null


function openShowcase(screen) {

    if (oldScreen == screen) {
        document.querySelector('#showcase-container').innerHTML = ''
        document.querySelectorAll('.show-option').forEach(
            (e, i) => e.className = 'show-option'
        )
        document.querySelector('#showcase-container').style.display = 'none'
    } else {
        document.querySelector('#showcase-container').innerHTML = document.querySelector(`#screen-${screen}`).innerHTML
        document.querySelectorAll('.show-option').forEach(
            (e, i) => e.className = i === screen ? 'show-option active' : 'show-option'
        )
        document.querySelector('#showcase-container').style.display = 'block'
    }

    oldScreen = screen
}

window.onload = () => {
    let modal = document.getElementById('myModal');
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];
    
    btn.onclick = () => {
        modal.style.display = "block";
    }
    
    span.onclick = () => {
        modal.style.display = "none";
    }
    
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('cpf').addEventListener('keyup', (e) => {
        const cpf = e.target.value;
        const cpfSomenteNumeros = cpf.replace(/\D/g, '');

        if (cpfSomenteNumeros.length === 11 && validaCPF(cpf)) {
            e.target.value = formataCPF(cpf);
        } else if (cpf.length === 14 && !validaCPF(cpf)) {
            alert('CPF inválido!');
            e.target.value = '';
        }
    });
}