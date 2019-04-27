const iframeChat = document.querySelector('.ps-web-chat-iframe');
const buttonChat = document.querySelector('.ps-button-circle');
const chatSkeleton = document.querySelector('#ps-chat-skeleton');
let iframeLoaded = false;
let iframeState = false;

const iframeSkeleton = `
    <div class="ps-skeleton-header">
        <div class="ps-skeleton-avatar"></div>
        <div class="ps-skeleton-name"></div>
    </div>
    <div class="ps-skeleton-content color-change-2x"></div>
    <div class="ps-skeleton-footer">
        <div class="ps-skeleton-footer-input"></div>
    </div>
`

function buttonClick(chat,skeleton, button,loaded) {
    if(loaded){
        toggleChat(chat, button, iframeState)
    }else{
        toggleChat(skeleton, button, iframeState)
    }
}

function toggleChat(iframe, button, hide) {
    if(hide){
        iframe.style.display = 'none';
        button.classList.remove('ps-chat-opened-button');
        button.classList.add('ps-chat-closed-button');
    }else{
        iframe.style.display = 'inherit';
        button.classList.remove('ps-chat-closed-button');
        button.classList.add('ps-chat-opened-button');
    }
}

iframeChat.onload = () => {
    if(chatSkeleton)
        chatSkeleton.style.display = 'none';

    if(iframeState)
        toggleChat(iframeChat, buttonChat, false)
    iframeLoaded = true;
}

window.onload = () => {
    buttonChat.style.display = 'block';
    
    if(chatSkeleton)
        chatSkeleton.innerHTML = iframeSkeleton;

    buttonChat.addEventListener('click', () => {
        buttonClick(iframeChat,chatSkeleton, buttonChat,iframeLoaded)
        iframeState = !iframeState;
    });
}
