
// BURGER
const header = document.querySelector('header')
const burgerBtn = document.querySelector('.burger-btn')
const burgerDropdown = document.querySelector('.main-menu-list')
burgerBtn.onclick = () => {
    header.classList.toggle('openBurger')
}

// PROJECTS TABS
const tabBody = document.querySelector('.projects-acardion')
const tabs = Array.from(document.querySelector('.projects-tab').children)

class ProjectsTabs {
    constructor(tabBtn,acardionNum) { 
        this.tabBtn = tabBtn
        this.acardionNum = acardionNum
    }
    addTitle() {
        const acardionTitle = document.createElement('h3')
        acardionTitle.innerText = this.tabBtn.innerText
        tabBody.append(acardionTitle)
    }
    addAcardion() {
        // Создание оболочки акардиона
        const acardionBody = document.createElement('div')
        acardionBody.className = 'acardion-body'

        let acardionText;
        for (let i = 1; i!=this.acardionNum+1; i++) {

            // Создание самого акардиона
            let acardion = document.createElement('div')
            acardion.className = 'acardion'

            acardionBody.append(acardion)

            // Создание заголовка акардиона
            const acaerdionTitle = document.createElement('h3')
            acaerdionTitle.innerText = `Blog ${i}`
            acardion.append(acaerdionTitle)

            // Создание стралочки акардиона
            let acardionImg = document.createElement('img')
            acardionImg.setAttribute('src','./img/projects/check-arrow.svg')
            acardion.append(acardionImg)

            // Контент акардиона
            const acardionCont = document.createElement('div')
            acardionCont.className = 'none'

            // Добавления текста
            acardionText = document.createElement('p')
            acardionText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi nesciunt unde nemo perspiciatis, sapiente quod soluta in laudantium iste quibusdam odio sint ratione molestias ut debitis totam!'


            acardion.append(acardionCont)
            acardionCont.append(acardionText)
        }

        tabBody.append(acardionBody)

        //Нажатие на таб
        Array.from(acardionBody.querySelectorAll('.acardion')).forEach((i) => {
            i.addEventListener('click',() => {
                i.classList.toggle('acrdion-active')
                i.querySelector('div').classList.toggle('none')
            })
        })

    }
}

// Активация табов
tabs.forEach((i) => {
    i.addEventListener('click',() => {
        // Удаление всех предыдущих элементов
        Array.from(tabBody.children).forEach((i) => i.remove())
        tabs.forEach((value, index, array) => value.classList.remove('active-tab'))

        i.classList.toggle('active-tab')
        // Добавление объекта
        const tab = new ProjectsTabs(i,3)
        tab.addTitle()
        tab.addAcardion()
    })
})

// MODAL CONTACTS
const contactBtn = document.querySelector('.contact .contact-btn')
const contactForm = document.querySelector('.contact .modal')
const formBtn = document.querySelector('.contact .modal .modal-form-btn')

const CloseOrOpenModal = (btn) => {
    btn.addEventListener('click', () => {
        contactForm.classList.toggle('form-active')
        document.querySelector('body').classList.toggle('no-scroll') 
    })
}
formBtn.onclick = function () {
}

CloseOrOpenModal(contactBtn)
CloseOrOpenModal(contactForm.querySelector('.close-modal'))

// SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 24,
  
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
        }
      }
  
  });

// МАСКА ТЕЛЕФОНА

// Jq cdn - <script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js" type="text/javascript"></script>
// Js cdn - <script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>

$(".phone-input").mask("8(999) 999-9999");


//Плавный скрол

// cdn - script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>

const scroll = new SmoothScroll('a[href*="#"]',{
    speed: 500
});


// Change cursor 

function changeCursor() {
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.follower')
    const links = document.querySelectorAll('.link')

    let posX = 0,
        posY = 0
    
    let mouseX = 0,
        mouseY = 0

    TweenMax.to({}, 0.01, {
        repeat: -1,
        onRepeat: () => {

            posX += (mouseX - posX) / 5
            posY += (mouseY - posY) / 5

            TweenMax.set(follower,{
                css:{
                    left:posX - 12,
                    top:posY - 12
                }
            })

            TweenMax.set(cursor,{
                css: {
                    left:mouseX,
                    top:mouseY
                }
            })
        }
    })

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX
        mouseY = e.clientY
        
    })

    links.forEach(link => {
        link.addEventListener('mouseenter',() => {
            cursor.classList.add('active')
            follower.classList.add('active')

        })
        link.addEventListener('mouseleave',() => {
            cursor.classList.remove('active')
            follower.classList.remove('active')

        })
    })

}

changeCursor()