const slider=document.querySelectorAll('.slide');
var counter=0;
slider.forEach(
    (slide,index) => {
        slider.style.left= `${index *100}%`;
        //it will start sliding from left

    }
)
function goPrev()
{
   counter--;
   slideImage();

}
function goNext()
{
    counter++;
    slideImage();
}


function slideImage()
{
    slider.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
            //it'll slides image in X-axis we can change it into Y-axis according to our need
        }
    )
}

