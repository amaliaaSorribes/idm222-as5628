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