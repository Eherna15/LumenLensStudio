const galleries = {
    event: ['../Images/Portfolio/Events/Events (1).jpg', 
            '../Images/Portfolio/Events/Events (2).jpg',
            '../Images/Portfolio/Events/Events (3).jpg'],
    landscape: ['../Images/Portfolio/Landscapes/Landscape (1).jpg',
                '../Images/Portfolio/Landscapes/Landscape (2).jpg',
                '../Images/Portfolio/Landscapes/Landscape (3).jpg'],
    portrait: ['../Images/Portfolio/Portraits/Portrait (1).jpg',
               '../Images/Portfolio/Portraits/Portrait (2).jpg',    
               '../Images/Portfolio/Portraits/Portrait (3).jpg'],
    sports: ['../Images/Portfolio/Sports/Sports (1).jpg',
             '../Images/Portfolio/Sports/Sports (2).jpg',
             '../Images/Portfolio/Sports/Sports (3).jpg'],
    street: ['../Images/Portfolio/Street/Street (1).jpg',
             '../Images/Portfolio/Street/Street (2).jpg',
             '../Images/Portfolio/Street/Street (3).jpg'],
    wildlife: ['../Images/Portfolio/Wildlife/Wildlife (1).jpg',
               '../Images/Portfolio/Wildlife/Wildlife (2).jpg',
               '../Images/Portfolio/Wildlife/Wildlife (3).jpg']
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(category) {
    currentGallery = galleries[category];
    currentIndex = 0;
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-image').src = currentGallery[currentIndex];
}

function closeGallery() {
    document.getElementById('lightbox').style.display = 'none';
    currentGallery = [];
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;
    document.getElementById('lightbox-image').src = currentGallery[currentIndex];
}
