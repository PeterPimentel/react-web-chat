const psIframeChat = document.querySelector('.ps-web-chat-iframe');
const psButtonChat = document.querySelector('.ps-button-circle');

psIframeChat.onload = () => {
    console.log('iframe is completely loaded');
}

window.onload = () => {
    let iframeState = false;
    psButtonChat.addEventListener('click', () => {
        psIframeChat.style.display = iframeState ? 'none' : 'inherit'
        iframeState = !iframeState;
    });
}