window.onload = function () {
    let p = localStorage.getItem('p');
    if (p == 1) {
        setTimeout(() => {
            popuap()
        }, 40000);
    } else if (p == 2) {

    } else {
        setTimeout(() => {
            popuap()
        }, 3000);
    }
    setTimeout(function () {
        fadeOutnojquery(preloader);
    }, 1000);
};

// ------------------------------------- прелодер-------------------------------
let preloader = document.getElementById("preloader_preload");

function fadeOutnojquery(el) {
    el.style.opacity = 1;
    let interpreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interpreloader);
            preloader.style.display = "none";
        }
    }, 16);
}

//------------------------------------- анимация фото-----------------------------
let bounceInLeft = document.getElementById('bounceInLeft');
let bounceInRight = document.getElementById('bounceInRight');

window.addEventListener('scroll', boun);
function boun(e) {
    if (widthViewport > 1300) {
        AnimationBounceLeft(e)
    } else if (widthViewport < 1300){
        AnimationBounceRight(e)
    }
}
function AnimationBounceLeft(e) {
    if (pageYOffset > 450) {
        bounceInLeft.style.animationPlayState = 'running';
        bounceInRight.style.animationPlayState = 'running';
        window.removeEventListener('scroll', boun);
    }
}
function AnimationBounceRight(e) {
    if (pageYOffset > 270 && pageYOffset < 550 ) {
        bounceInLeft.style.animationPlayState = 'running';
    } else if (pageYOffset > 885){
        bounceInRight.style.animationPlayState = 'running';
        bounceInLeft.style.animationPlayState = 'running';
        window.removeEventListener('scroll', boun);
    }
}

let widthViewport = screen.availWidth;

// ------------------------------------- попап------------------------------------

let popapNew = document.getElementById("modal-11"),
    mdBtnOk = document.getElementById("md-btn_ok"),
    mdBtnNo = document.getElementById("md-btn_no"),
    overlay = document.getElementById("md-overlay");

function popuap() {
    popapNew.classList.add('md-show');
    popapNew.style.display = 'block';
    overlay.classList.add('open');
    document.body.classList.add('overflow');
}

mdBtnOk.onclick = function () {
    popapNew.classList.remove('md-show');
    localStorage.setItem('p', '2');
    document.body.classList.add('md-perspective');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = 0;
    setTimeout(displayNone(), 2000);
    document.body.classList.remove('overflow');
};

mdBtnNo.onclick = function () {
    popapNew.classList.remove('md-show');
    localStorage.setItem('p', '1');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = 0;
    setTimeout(() => {
        displayNone()
    }, 800);
    setTimeout(popuap, 100000);
    document.body.classList.remove('overflow');
};

function displayNone() {
    popapNew.style.display = 'none';
    overlay.style.display = 'none';
}

// ------------------------------------- попап стр приглашения------------------------------------

let popapConfirm = document.getElementById('modal-12'),
    btnConfirm = document.getElementById('btn__invitation');

btnConfirm.onclick = function () {
    localStorage.setItem('p', 2);
    popapConfirm.classList.add('md-show');
    popapConfirm.style.display = 'block';
};


// setTimeout(() => {
//     localStorage.clear(); // Чтоб очистить весь localStorage
// }, 4000); //


// ------------------------------- - - - - - - звук скрола- - -- - --------------------------------------


function playAudio() {
    let myAudio = new Audio;
    myAudio.src = 'audio/scroll.mp3';
    myAudio.play();
}

//--------------------------------- плавный скрол -------------------------------------------------------


var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.4;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}



//------------------------------------- анимация распорядка дня---------------------
// let animated = document.querySelectorAll('.animated');
// window.addEventListener('scroll', animatedFlip);
//
// function animatedFlip(e) {
//     if (pageYOffset > 2350 && pageYOffset < 2400) {
//         animated[0].style.animationPlayState = 'running';
//     } else if (pageYOffset > 2400 && pageYOffset < 2500) {
//         animated[1].style.animationPlayState = 'running';
//     } else if (pageYOffset > 2500 && pageYOffset < 2600) {
//         animated[2].style.animationPlayState = 'running';
//     } else if (pageYOffset > 2600 && pageYOffset < 2700) {
//         animated[3].style.animationPlayState = 'running';
//     } else if (pageYOffset > 2800 && pageYOffset < 2900) {
//         animated[4].style.animationPlayState = 'running';
//         window.removeEventListener('scroll', animatedFlip)
//     }
// }

// window.addEventListener('scroll', () => {
//     console.log(pageYOffset);
// } );
















