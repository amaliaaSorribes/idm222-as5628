const readMoreBtn = document.querySelector('.read-more-btn');
function myFunction2() {
    var x = document.getElementById("moreText");
    if (x.style.display === "block") {
    x.style.display = "none";
    readMoreBtn.textContent = 'Read More';
    } else {
    x.style.display = "block";
    readMoreBtn.textContent = 'Read Less';
    }
}

function openImageOverlay(event) {
    let imgSrc = event.target.src;
    console.log("img src: ", imgSrc);
    // let imgSrcParts = imgSrc.split('.');
    // let newImgSrc = imgSrcParts[0]+'.jpg'
    // console.log("img src 2: ", imgSrcParts)

    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.display = 'block';
    overlay.style.opacity = '0.25';
    overlay.style.transition = 'opacity 0.25s ease-in';

    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 100); 


    const image = document.createElement('img');
    image.src = imgSrc; //newImgSrc;
    image.className = "imageOverlay";
    // const right = document.createElement('button');
    // right.className = "buttonNext"
    image.style.opacity = '0.1'; 
    image.style.transform = 'translate(-50%, -50%) scale(0.5)';
    image.style.transition = 'opacity 0.5s ease, transform 0.3s ease 0.1s';

    const main = document.querySelector('main');
    main.appendChild(image);
    //main.appendChild(right);

    setTimeout(() => {
        image.style.opacity = '1'; // Fade in
        image.style.transform = 'translate(-50%, -50%) scale(1)'; 
    }, 100); 
}

function closeImageOverlay() {
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.opacity = '1';
    overlay.style.transition = 'opacity 0.5s ease-out';

    setTimeout(() => {
        overlay.style.opacity = '0';
    }, 300);

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 400);

    const image = document.getElementsByClassName('imageOverlay')[0];
    const main = document.querySelector('main');
    main.removeChild(image);
}


