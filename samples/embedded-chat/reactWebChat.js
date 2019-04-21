const psIframeChat = document.querySelector('.ps-web-chat-iframe');
const psButtonChat = document.querySelector('.ps-button-circle');
const psChatSkeleton = document.querySelector('#ps-chat-skeleton');
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
psIframeChat.onload = () => {
    setInterval(() => {
        psChatSkeleton.style.display = 'none';
        if(iframeState){
            psIframeChat.style.display = 'inherit';
        }
        iframeLoaded = true;
        console.log('INtervarl iframe is loaded');    
    }, 6000);
    console.log('iframe is completely loaded');
}

window.onload = () => {
    if(psChatSkeleton){
        psChatSkeleton.innerHTML = iframeSkeleton;
    }
    psButtonChat.addEventListener('click', () => {
        if(iframeLoaded){
            psIframeChat.style.display = iframeState ? 'none' : 'inherit';
        }else{
            psChatSkeleton.style.display = iframeState ? 'none' : 'inherit'
        }
        iframeState = !iframeState;
    });
}