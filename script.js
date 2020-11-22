document.addEventListener('DOMContentLoaded', function() {

    let timer = null;
    let interval = null;
    let screenSaver = false;
    let wait = 10000;
    let overlay = document.querySelector('.overlay');
    let wrapper = document.querySelector('.image__wrapper');
    let image = document.querySelector('img');

    function showScreenSaver() {
        clearTimeout(timer);
        clearInterval(interval)
        overlay.style.left = '-9999px';
        screenSaver = false;
        timer = setTimeout(function() {
            overlay.style.left = '0';
            
            wrapper.innerHTML = getImage();
            wrapper.style.top = getYPositionOfElement() + 'px';
            wrapper.style.left = getXPositionOfElement() + 'px';
            interval = setInterval(function() {
                image = document.querySelector('img');
                // console.log(image.offsetWidth);
                // console.log(image.offsetHeight);
                // console.log(image.getBoundingClientRect().top);
                // console.log(image.getBoundingClientRect().left);
                // let coords = image.getBoundingClientRect();
                let coordsX = getXPositionOfElement();
                let coordsY = getYPositionOfElement();
                console.log('___________');
                if ((coordsX + image.offsetWidth) > document.documentElement.clientWidth) {
                    coordsX = coordsX - ((coordsX + image.offsetWidth) - document.documentElement.clientWidth);
                } else {
                    coordsX = 0;
                }
                if ((coordsY + image.offsetHeight) > document.documentElement.clientHeight) {
                    coordsY = coordsY - ((coordsY + image.offsetHeight) - document.documentElement.clientHeight);
                } else {
                    coordsY = 0;
                }
                if(coordsX < 0) {
                    coordsX = 0;
                } 
                if(coordsY < 0) {
                    coordsY = 0;
                }
                wrapper.style.top = coordsY + 'px';
                wrapper.style.left = coordsX + 'px';
                wrapper.innerHTML = getImage();
            }, 5000);

            // console.log(window.getComputedStyle(image).getPropertyValue(width));
            screenSaver = true;
        }, wait);
    }

    function getImage () {
            const random = Math.floor((Math.random() * 7) + 1);
            let img = `<img src="img/screenSaver-img-${random}.jpeg" />`;
            return img;
    } 

    function getXPositionOfElement() {
        let xPosition = Math.floor(Math.random() * document.documentElement.clientWidth);
        return xPosition;
    }
     
    function getYPositionOfElement() {
        var yPosition = Math.floor(Math.random() * document.documentElement.clientHeight);
        return yPosition;
    }

    document.addEventListener('click', function() {
        showScreenSaver();
    });
    document.addEventListener('keydown', function() {
        showScreenSaver();
    });
    document.addEventListener('scroll', function() {
        showScreenSaver();
    });
    document.addEventListener('mousemove', function() {
        showScreenSaver();
    });

    showScreenSaver();

 });


 