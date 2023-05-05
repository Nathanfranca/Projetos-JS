let nome = document.getElementById("nome");
let user = document.getElementById("user");
let email = document.getElementById("email");
let senha = document.getElementById("senha");

function enviar(event) {
    event.preventDefault();

    if (nome.value == '') {
        var errorMessage = document.createElement("span")
        errorMessage.textContent = "faltam dados"
        nome.parentNode.insertBefore(errorMessage, nome.nextElementSibling);
    } else {
        if (user.value == '') {
            var errorMessage = document.createElement("span");
            errorMessage.textContent = "Faltam dados";
            user.parentNode.insertBefore(errorMessage, user.nextElementSibling);
        } else {
            if(email.value == '') {
                var errorMessage = document.createElement("span");
                errorMessage.textContent ="Faltam dados!";
                email.parentNode.insertBefore(errorMessage, email.nextElementSibling);
            } else {
                if (senha.value == '') {
                    var errorMessage = document.createElement("span");
                    errorMessage.textContent = "faltam dados!";
                    senha.parentNode.insertBefore(errorMessage, senha.nextElementSibling);
                } else {
                    event.target.submit();
                }
            }
        }
    }
}

let form = document.querySelector('form');
form.addEventListener("submit", enviar);