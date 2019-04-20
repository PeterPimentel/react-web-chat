window.onload = function () {
    // First we check if you support touch, otherwise it's click:
    let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
    const psButtonChat = document.querySelector('.ps-button-circle');
    const psIframeChat = document.querySelector('.ps-web-chat-iframe');

    let iframeState = false;
    psIframeChat.style.display = 'none';

    psButtonChat.addEventListener(touchEvent, () => {
        if(iframeState){
            psIframeChat.style.display = 'none'
        }else{
            psIframeChat.style.display = 'initial'
        }
        iframeState = !iframeState;
    });
}