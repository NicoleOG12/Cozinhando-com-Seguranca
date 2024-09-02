document.addEventListener('DOMContentLoaded', () => {
    const slotContainers = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3'),
        document.getElementById('slot4'),
        document.getElementById('slot5'),
        document.getElementById('slot6'),
        document.getElementById('slot7'),
        document.getElementById('slot8')
    ];

    const savedImages = JSON.parse(sessionStorage.getItem('usedImages')) || [];
    const uniqueImages = Array.from(new Set(savedImages));

    uniqueImages.forEach((imageSrc, index) => {
        if (index < slotContainers.length) {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.style.width = '100%'; 
            imgElement.style.height = 'auto'; 

            slotContainers[index].appendChild(imgElement);
        }
    });
    
    sessionStorage.removeItem('usedImages');
});

function revealImage() {
    var element = document.getElementById('batedeira');
    if (element) element.classList.add('reveal');
}