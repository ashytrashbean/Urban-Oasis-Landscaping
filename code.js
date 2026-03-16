
const lightbox = document.querySelector('#lightbox');

const images = document.querySelectorAll('.imgGallery');
let currentIndex = 0;

const nextBtn = document.createElement('button');
nextBtn.innerHTML=">";
nextBtn.classList.add('next-btn');

const prevBtn = document.createElement('button');
prevBtn.innerHTML ="<";
prevBtn.classList.add('prev-btn');

const lightboxImg = document.createElement('img');
const projectLink=document.createElement('a');

projectLink.classList.add('project-button');
projectLink.innerText = "View Project";


function updateLightbox(){
    const currentImgData = images[currentIndex];
    lightboxImg.src = currentImgData.src;

    const projectID = currentImgData.getAttribute('data-id');
    projectLink.href = `project-detail.html?id=${projectID}`;
}

images.forEach((image, index) =>{
    image.addEventListener('click',()=>{
        currentIndex = index;
        lightbox.classList.add('active');

        lightbox.innerHTML='';
        lightbox.append(prevBtn, lightboxImg,nextBtn,projectLink);
        updateLightbox();
    })
})

nextBtn.addEventListener('click', (e) =>{
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

prevBtn.addEventListener('click', (e) =>{
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

lightbox.addEventListener('click', (e)=>{
    if(e.target === lightbox){
        lightbox.classList.remove('active');
    }
});