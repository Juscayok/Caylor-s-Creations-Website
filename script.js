// Image upload and gallery
const imageUpload = document.getElementById('image-upload');
const imageGallery = document.getElementById('image-gallery');
imageUpload.addEventListener('change', function() {
    for (const file of imageUpload.files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imageGallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Video upload and gallery
const videoUpload = document.getElementById('video-upload');
const videoGallery = document.getElementById('video-gallery');
videoUpload.addEventListener('change', function() {
    for (const file of videoUpload.files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            videoGallery.appendChild(video);
        };
        reader.readAsDataURL(file);
    }
});

// Game upload and gallery (HTML/JS files)
const gameUpload = document.getElementById('game-upload');
const gameGallery = document.getElementById('game-gallery');
gameUpload.addEventListener('change', function() {
    for (const file of gameUpload.files) {
        if (file.name.endsWith('.html')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const iframe = document.createElement('iframe');
                iframe.src = e.target.result;
                gameGallery.appendChild(iframe);
            };
            reader.readAsDataURL(file);
        } else {
            // For .js files, just show the filename
            const div = document.createElement('div');
            div.textContent = file.name;
            gameGallery.appendChild(div);
        }
    }
});

// 3D file upload (.fbx, .gbl)
const fileUpload = document.getElementById('file-upload');
const fileList = document.getElementById('file-list');
fileUpload.addEventListener('change', function() {
    for (const file of fileUpload.files) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.textContent = file.name;
        fileList.appendChild(link);
    }
});

// Social media sharing
function shareTo(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out my personal profile!');
    let shareUrl = '';
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
    }
    window.open(shareUrl, '_blank');
}
