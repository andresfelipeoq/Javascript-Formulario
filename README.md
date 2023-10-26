# Javascript-Formulario



1. **HTML**:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Contacto</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Contacto</h1>
    <form id="contact-form">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Enviar</button>
    </form>
    
    <div id="confirmation-message" class="hidden">
        <p>¡Gracias por tu mensaje!</p>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

2. **CSS** (Guárdalo en un archivo llamado `styles.css`):

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f9f9f9;
}

h1 {
    color: #333;
}

form {
    width: 60%;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
}

label {
    display: block;
    margin-top: 10px;
    font-size: 18px;
    color: #333;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    font-size: 16px;
}

button {
    background-color: #333;
    color: #fff;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

#confirmation-message {
    display: none;
    margin: 20px auto;
    width: 50%;
    padding: 10px;
    background-color: #4CAF50;
    color: #fff;
    border-radius: 5px;
}
```

3. **JavaScript** (Guárdalo en un archivo llamado `script.js`):

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simular el envío del formulario (aquí, podrías realizar una solicitud AJAX real).
        // En este ejemplo, simplemente mostramos un mensaje de confirmación.
        confirmationMessage.style.display = 'block';

        // Restablecer el formulario después de unos segundos
        setTimeout(function () {
            contactForm.reset();
            confirmationMessage.style.display = 'none';
        }, 3000);
    });
});
```

En este ejemplo, hemos creado un formulario de contacto básico con campos para el nombre, el correo electrónico y el mensaje. Cuando el usuario envía el formulario, se muestra un mensaje de confirmación durante unos segundos y luego se restablece el formulario.
