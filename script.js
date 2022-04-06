var mainImg = document.querySelector('.main-image img')
var listImg = document.querySelectorAll('.list-image img')
var imgItem = document.querySelectorAll('.image-item')
var prev = document.querySelector('.control-prev')
var next = document.querySelector('.control-next')

var currentIndex = 0

function updateImgByIndex(index){
    imgItem.forEach(item=>{
        item.classList.remove('active')
    });
    currentIndex = index;
    mainImg.src = listImg[index].src;
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imageItem, index)=>{
    imageItem.addEventListener('click', function(){
        mainImg.style.opacity = '0';
        setTimeout(function(){
            updateImgByIndex(index);
            mainImg.style.opacity = '1';
        },500)
    })
})

prev.addEventListener('click', function(){
    if (currentIndex == 0){
        currentIndex = listImg.length - 1
    } else {
    currentIndex--;
    };
    mainImg.style.animation = ''
    setTimeout(function(){
        updateImgByIndex(currentIndex);
        mainImg.style.animation = 'slideLeft 1s ease-in-out';
    },500)
})

next.addEventListener('click', function(){
    if (currentIndex == listImg.length - 1){
        currentIndex = 0
    } else {
    currentIndex++;
    };
    mainImg.style.animation = ''
    setTimeout(function(){
        updateImgByIndex(currentIndex);
        mainImg.style.animation = 'slideRight 1s ease-in-out';
    },500)
})

updateImgByIndex(0)