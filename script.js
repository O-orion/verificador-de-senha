const passwordInput = document.querySelector('#password');
const passwordIcon = document.querySelector('#input-icon')

let visibility =  false;

passwordIcon.addEventListener('click', function() {
    let iconVisibility = visibility == true ? 'visibility_off' : 'visibility'
    let spanIcon = passwordIcon.querySelector('span')

    if (visibility == false ) {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }

    spanIcon.innerHTML = iconVisibility
    visibility = !visibility
})

passwordInput.addEventListener("input", function() {

    const password = this.value;
    const strengthIndicator = document.querySelector("#password-strength-indicador")
    const strengthText = document.querySelector("#password-strength-text")

    const strengths = {
        0: "Muito Fraco",
        1: "Fraco",
        2: "Moderada",
        3: "Forte",
        4: "Muito Forte"
    }

    let score = 0;

    // Requisitos para password
    if (password .length >= 8) score++; // Maior que 8 caracteres
    if (password.match(/[a-z]/) ) score++; // Letras minúsculas
    if (password.match(/[A-Z]/) ) score++; // Letras Maiúsculas
    if (password.match(/[^a-zA-Z0-9]/) ) score++; // Caracteres Especiais

    // Calculo da % da largura do indicador
    const width = (score / 4) * 100;

    switch(score) {
        case 1:
            strengthIndicator.style.backgroundColor = '#e70b0b'
            break;
        case 2:
            strengthIndicator.style.backgroundColor = '#FFB74D'
            break;
         case 3:
            strengthIndicator.style.backgroundColor = '#FFF176'
            break;
        case 4:
            strengthIndicator.style.backgroundColor = '#81C784'
            break;
    }

    strengthIndicator.style.width = width + '%';

    if (password.length > 0) {
        strengthText.innerHTML = `Força: ${strengths[score]}`
    } else {
        strengthText.innerHTML = ""
    }

})
