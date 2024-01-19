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

function updateCharCount() {
    const messageTextarea = document.getElementById('message');
    const charCountSpan = document.getElementById('charCount');
    
    const messageLength = messageTextarea.value.length;
    charCountSpan.innerText = `${messageLength}/2000`;

    if (messageLength > 2000) {
        charCountSpan.style.color = 'red';
    } else {
        charCountSpan.style.color = '';
    }
}
