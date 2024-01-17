document.body.classList.add('dark-mode');

function sendMessage() {
    const webhookUrl = document.getElementById('webhookUrl').value;
    const message = document.getElementById('message').value;

    if (!webhookUrl || !message) {
        alert('Webhook URL and message are required!');
        return;
    }

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    })
    .then(() => {
        document.getElementById('response').innerText = `Message sent successfully!`;
    })
    .catch(error => {
        document.getElementById('response').innerText = `Error sending message: ${error.message}`;
    });
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const darkModeIcon = document.getElementById('darkModeIcon');
    darkModeIcon.innerText = body.classList.contains('dark-mode') ? '🌜' : '🌞';
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.left = menu.style.left === '0px' ? '-200px' : '0px';
}

function showNormalMessage() {
    document.getElementById('messageType').innerText = 'Normal Message';
}

function showEmbedMessage() {
    document.getElementById('messageType').innerText = 'Embed Message';
}
