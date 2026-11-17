
const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const send = document.getElementById('send');

function add(text, who) {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.innerText = text;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
    return d;
}

function sendMessage() {
    const t = input.value.trim();

    if (!t) return;

    add('YOU: ' + t, 'user');
    input.value = '';

    const reply = add(
        'J.A.R.V.I.S: Message received, Boss. AI connection pending.',
        'ai'
    );
}

send.onclick = sendMessage;

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
