const iframeChat = document.querySelector('.ps-web-chat-iframe');
const buttonChat = document.querySelector('.ps-button-circle');
const chatSkeleton = document.querySelector('#ps-chat-skeleton');
let iframeLoaded = false;
let iframeState = false;

const iframeSkeleton = `
    <div class="ps-skeleton-header">
        <div class="ps-skeleton-avatar ps-loading"></div>
        <div class="ps-skeleton-name ps-loading"></div>
    </div>
    <div class="ps-skeleton-content ps-loading"></div>
    <div class="ps-skeleton-footer">
        <div class="ps-skeleton-footer-input ps-loading"></div>
    </div>
`;

function toggleChat(iframe, hide) {
    if (hide) {
        iframe.style.display = 'none';
        buttonChat.classList.remove('ps-chat-opened-button');
        buttonChat.classList.add('ps-chat-closed-button');
    } else {
        iframe.style.display = 'inherit';
        buttonChat.classList.remove('ps-chat-closed-button');
        buttonChat.classList.add('ps-chat-opened-button');
    }
}

function buttonClick(chat, skeleton, loaded, frameState) {
    if (loaded) {
        toggleChat(chat, frameState);
    } else {
        toggleChat(skeleton, frameState);
    }
}

iframeChat.onload = () => {
    if (chatSkeleton) chatSkeleton.style.display = 'none';

    if (iframeState) toggleChat(iframeChat, false);
    iframeLoaded = true;
};

window.onload = () => {
    buttonChat.style.display = 'block';

    if (chatSkeleton) chatSkeleton.innerHTML = iframeSkeleton;

    buttonChat.addEventListener('click', () => {
        buttonClick(iframeChat, chatSkeleton, iframeLoaded, iframeState);
        iframeState = !iframeState;
    });
};
