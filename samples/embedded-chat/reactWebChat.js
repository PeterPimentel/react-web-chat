const iframeChat = document.querySelector('.ps-web-chat-iframe');
const buttonChat = document.querySelector('.ps-button-circle');
const chatSkeleton = document.querySelector('#ps-chat-skeleton');
let iframeLoaded = false;
let iframeState = false;

const iframeSkeleton = `
    <div>
        <div class="ps-skeleton-header">
            <div class="ps-skeleton-avatar"></div>
            <div class="ps-skeleton-name"></div>
        </div>
        <div class="ps-skeleton-content color-change-2x">
        </div>
        <div class="ps-skeleton-footer">
        </div>
    </div>
`
iframeChat.onload = () => {
    setInterval(() => {
        chatSkeleton.style.display = 'none';
        if(iframeState){
            iframeChat.style.display = 'inherit';
            buttonChat.classList.remove('ps-chat-closed-button');
            buttonChat.classList.add('ps-chat-opened-button');
        }
        iframeLoaded = true;
        console.log('INtervarl iframe is loaded');    
    }, 6000);
    console.log('iframe is completely loaded');
}

window.onload = () => {
    if(chatSkeleton){
        chatSkeleton.innerHTML = iframeSkeleton;
    }
    buttonChat.addEventListener('click', () => {
        if(iframeLoaded){
            iframeChat.style.display = iframeState ? 'none' : 'inherit';
            if(iframeState){
                buttonChat.classList.remove('ps-chat-opened-button');
                buttonChat.classList.add('ps-chat-closed-button');
            }else{
                buttonChat.classList.remove('ps-chat-closed-button');
                buttonChat.classList.add('ps-chat-opened-button');
            }
        }else{
            chatSkeleton.style.display = iframeState ? 'none' : 'inherit'
        }
        iframeState = !iframeState;
    });
}