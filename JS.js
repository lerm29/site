const slides = document.querySelectorAll(".slide")
const buttons = document.querySelectorAll(".BTN")

for (const slide of slides) {
    slide.addEventListener("click",()=>{
        clearActiveClasses()

        slide.classList.add('active');

    })
    
}

for (const button of buttons) {
    button.addEventListener("click",()=>{
        clearActiveClasses();

        button.classList.remove('hidden');

    })
    
}

function clearActiveClasses(){
    slides.forEach((slide) =>{
        slide.classList.remove('active');

    });
    buttons.forEach((button) =>{
        button.classList.add('hidden');

    });
}
$(function() {
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });


});