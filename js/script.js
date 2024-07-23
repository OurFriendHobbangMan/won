
  $(".sub").hide();

  $(".gnb>li>a, .sub").hover(function(){

    $(this).parents().children(".sub").stop().slideToggle();
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    let currentSection = 0;
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    let isScrolling = false;

    const scrollToSection = (index) => {
        window.scrollTo({
            top: sections[index].offsetTop,
            behavior: 'smooth'
        });
    };

    const handleScroll = (event) => {
        if (isScrolling) return;

        isScrolling = true;

        if (event.deltaY > 0) {
            if (currentSection < totalSections - 1) {
                currentSection++;
            }
        } else if (event.deltaY < 0) {
            if (currentSection > 0) {
                currentSection--;
            }
        }

        scrollToSection(currentSection);

        setTimeout(() => {
            isScrolling = false;
        }, 500);  // Adjust the timeout duration as needed
    };

    document.addEventListener('wheel', handleScroll);

    document.addEventListener('keydown', (event) => {
        if (isScrolling) return;

        isScrolling = true;

        if (event.key === 'ArrowDown') {
            if (currentSection < totalSections - 1) {
                currentSection++;
            }
        } else if (event.key === 'ArrowUp') {
            if (currentSection > 0) {
                currentSection--;
            }
        }

        scrollToSection(currentSection);

        setTimeout(() => {
            isScrolling = false;
        }, 500);  // Adjust the timeout duration as needed
    });
});

window.addEventListener("scroll", ()=>{


const page2 = document.querySelector(".page2_img");

const header = document.querySelector("header");

const txt2 = document.querySelector(".page2_txt");

const txt3h = document.querySelector(".page3_txt h3");

const txt3p = document.querySelector(".page3_txt p");

let value = window.scrollY;

if(value > 780){
  header.style.top = "-200px";

} else{
  header.style.top = "0";
};

if(value > 900){
  page2.style.left = "0",
  page2.style.opacity = "1"
} else {
  page2.style.left = "-600px",
  page2.style.opacity = "0";
};

if(value > 900){
  txt2.style.top = "0",
  txt2.style.opacity = "1";
}else{
  txt2.style.top = "200px",
  txt2.style.opacity = "0";
};

if(value > 1700){
  txt3h.style.marginTop = "0",
  txt3h.style.opacity = "1"
} else {
  txt3h.style.marginTop = "-50px",
  txt3h.style.opacity = "0";
};

if(value > 1800){
  txt3p.style.opacity = "1"
} else {
  txt3p.style.top = "100px",
  txt3p.style.opacity = "0";
};



});








