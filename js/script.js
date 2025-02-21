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
    const imgSrc = event.target.src;
    console.log("img src: ", imgSrc);

    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.display = 'block';

    const image = document.createElement('img');
    image.src = imgSrc;
    image.className = "imageOverlay";
    const main = document.querySelector('main');
    main.appendChild(image);
}

function closeImageOverlay() {
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.display = 'none';

    const image = document.getElementsByClassName('imageOverlay')[0];
    const main = document.querySelector('main');
    main.removeChild(image);
}


