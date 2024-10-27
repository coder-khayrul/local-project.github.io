
//********Script for Mega Menu Handling */

const megaMenuButton = document.querySelector(".mega-menu--btn");
const megaMenuArea = document.querySelector(".mega-menu");

const handleMegaMenuToggle = (e) => {
    e.stopPropagation();
    megaMenuArea.classList.toggle("mega-menu--open");
};

const handleMegaMenuExit = (e) => {

    if (!megaMenuArea.contains(e.target) && !megaMenuButton.contains(e.target)) {
        megaMenuArea.classList.remove("mega-menu--open");
    }
};

megaMenuButton.addEventListener("click", handleMegaMenuToggle);
document.addEventListener("click", handleMegaMenuExit);



//***Currancy Dropdown Control */

const currancyDropDownButton = document.querySelector(".current-currancy")
const currancyDropDownArea = document.querySelector(".currancy-dropdown")
const currancyItems = document.querySelectorAll(".currancy-dropdown li")


currancyItems.forEach(item => {
    item.addEventListener("click", () => {
        currancyDropDownButton.textContent = item.textContent;
    })
})

const handleDropDownToggle = (e) => {
    e.stopPropagation();
    currancyDropDownArea.classList.toggle("currancy-dropdown--open");
};

const handleDropDownExit = (e) => {

    if (!currancyDropDownArea.contains(e.target) && !currancyDropDownButton.contains(e.target)) {
        currancyDropDownArea.classList.remove("currancy-dropdown--open");
    }
};

currancyDropDownButton.addEventListener("click", handleDropDownToggle);
document.addEventListener("click", handleDropDownExit);




//**********Side Cart Handler */

const sideBarOpenButton = document.querySelector(".sidebar-button");
const sideBarCloseButton = document.querySelector(".sidebar-close");
const sideBarArea = document.querySelector(".sidebar");
const sideBarWarpper = document.querySelector(".sidebar-wrapper")

const handleSideBarToggle = (e) => {
    e.stopPropagation();
    sideBarArea.classList.toggle("sidebar--open");
    sideBarWarpper.classList.toggle("sidebar-wrapper--open");
};

const handleSideBarExit = (e) => {

    if (sideBarArea.classList.contains("sidebar--open") && !sideBarWarpper.contains(e.target)) {

        sideBarArea.classList.remove("sidebar--open");
        sideBarWarpper.classList.remove("sidebar-wrapper--open");
    }
};

sideBarOpenButton.addEventListener("click", handleSideBarToggle);
sideBarCloseButton.addEventListener("click", () => {
    sideBarArea.classList.remove("sidebar--open");
    sideBarWarpper.classList.remove("sidebar-wrapper--open");
})

document.addEventListener("click", handleSideBarExit);



//*****Script for handling hover effect on product */
document.querySelectorAll('.product-slider .single-product').forEach((product) => {
    product.querySelectorAll(".product-details").forEach((details => {
        details.addEventListener('mouseenter', () => {

            document.querySelectorAll('.single-product').forEach(otherProduct => {
                if (otherProduct !== product) {
                    otherProduct.querySelector('.product-img').classList.add('expand-image');
                }
            });
        });



        details.addEventListener('mouseleave', () => {
            
            document.querySelectorAll('.product-img').forEach(img => {
                img.classList.remove('expand-image');
            });

        });
    }))
});


//*****Script for handling hover effect on product */
document.querySelectorAll('.product-grid .single-product').forEach((product) => {
    product.querySelectorAll(".product-details").forEach((details => {
        details.addEventListener('mouseenter', () => {

            document.querySelectorAll('.single-product').forEach(otherProduct => {
                if (otherProduct !== product) {
                    otherProduct.querySelector('.product-img').classList.add('expand-grid-image');
                }
            });
        });



        details.addEventListener('mouseleave', () => {
            
            document.querySelectorAll('.product-img').forEach(img => {
                img.classList.remove('expand-grid-image');
            });

        });
    }))
});







//******Swiper Js for Product slider ***** */

var swiper = new Swiper(".productSlider", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});