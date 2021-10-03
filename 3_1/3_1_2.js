window.onload = function (){
    //side menu
    var menu1 = document.querySelector('#list1');
    var menu2 = document.querySelector('#list2');
    var menu3 = document.querySelector('#list3');
    var menu4 = document.querySelector('#list4');


    function clickopen() {
        var childhood = this.childNodes;
        if (childhood[3].style.display == 'none') {
            childhood[3].style.display = 'block';
            childhood[6].style.display = 'block';
            childhood[9].style.display = 'block';
            childhood[12].style.display = 'block';
        } else {
            childhood[3].style.display = 'none';
            childhood[6].style.display = 'none';
            childhood[9].style.display = 'none';
            childhood[12].style.display = 'none';
        }
    }

    menu1.addEventListener('click', clickopen);
    menu2.addEventListener('click', clickopen);
    menu3.addEventListener('click', clickopen);
    menu4.addEventListener('click', clickopen);


    //img slide
    let slides = document.querySelector(".slides");
    let slideImg = document.querySelectorAll(".slides li");
    currentIdx =0;
    slideCount = slideImg.length;
    prev = document.querySelector(".prev");
    next = document.querySelector(".next");

    slideWidth= 520;
    slideMargin =0;

    makeClone();
    initfuction();

    function makeClone() {
        let cloneSlide_first = slideImg[0].cloneNode(true);
        let cloneSlide_last = slides.lastElementChild.cloneNode(true);
        slides.append(cloneSlide_first);
        slides.insertBefore(cloneSlide_last,slides.firstElementChild);
    }

    function  initfuction(){
        slides.style.width = (slideWidth + slideMargin) * (slideCount +2) + "px";
        slides.style.left = -(slideWidth + slideMargin) + "px";
        slides.classList.add('slide_active')
    }

    next.addEventListener('click', function () {
        if (currentIdx <= slideCount-1) {
            slides.style.left = -(currentIdx+2) * (slideWidth + slideMargin) + "px";
            slides.style.transition = '500ms';
        }if (currentIdx ===slideCount-1) {
            setTimeout(function () {
                slides.style.left = -(slideWidth + slideMargin) + "px";
                slides.style.transition = '0ms';
            }, 500);
            currentIdx = -1;
            }
            currentIdx +=1;
        }
    );

    prev.addEventListener('click', function (){
        console.log(currentIdx);
        if (currentIdx >=0) {
            slides.style.left = -(currentIdx) * (slideWidth + slideMargin) + "px";
            slides.style.transition = '500ms';
        }if (currentIdx ===0) {
            setTimeout(function () {
                slides.style.left = -(slideCount) * (slideWidth + slideMargin) + "px";
                slides.style.transition = '0ms';
            }, 500);
            currentIdx = slideCount;
            }
            currentIdx-=1;
        }
    );
}