function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageResult = document.getElementById('messageResult');

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        messageResult.textContent = 'Por favor, complete todos los campos.';
        messageResult.style.color = 'red';
        return false; 
    }

    setTimeout(() => {
        messageResult.textContent = '¡Mensaje enviado con éxito!';
        messageResult.style.color = 'green';
        document.getElementById('contactForm').reset();
    }, 500);

    return false;
}

window.onclick = function (event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeModal();
    }
}