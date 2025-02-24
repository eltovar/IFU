/**
 @param {string} tagName
 @param {object} [attributes={}]
 @param {string|HTMLElement|Array<HTMLElement>} [content='']
 @returns {HTMLElement}
 */

function createElement(tagName, attributes = {}, content = '') {
    const element = document.createElement(tagName);

    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }


    if (typeof content === 'string') {
        element.textContent = content;
    } else if (content instanceof HTMLElement) {
        element.appendChild(content);
    } else if (Array.isArray(content)) {
        content.forEach(child => {
            if (child instanceof HTMLElement) {
                element.appendChild(child);
            }
        });
    }
    return element;
}


function createModal() {
    const modal = createElement('div', { id: 'contactModal', class: 'modal' });
    const modalContent = createElement('div', { class: 'modal-content' });
    const closeButton = createElement('span', { class: 'close-button' }, '&times;');
    closeButton.onclick = closeModal;
    const title = createElement('h2', {}, 'Contact Us');
    const form = createElement('form', { id: 'contactForm' });
    form.onsubmit = submitForm; 

    const nameLabel = createElement('label', { for: 'name' }, 'Name:');
    const nameInput = createElement('input', { type: 'text', id: 'name', name: 'name', required: 'true' });
    const emailLabel = createElement('label', { for: 'email' }, 'Email:');
    const emailInput = createElement('input', { type: 'email', id: 'email', name: 'email', required: 'true' });
    const messageLabel = createElement('label', { for: 'message' }, 'Message:');
    const messageTextarea = createElement('textarea', { id: 'message', name: 'message', rows: '4', required: 'true' });
    const submitButton = createElement('button', { type: 'submit' }, 'Send');
    const messageResult = createElement('div', { id: 'messageResult' });

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    form.appendChild(submitButton);
    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(form);
    modalContent.appendChild(messageResult);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    return modal;

}


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

document.addEventListener('DOMContentLoaded', () => {
     const miModal = createModal();
});
