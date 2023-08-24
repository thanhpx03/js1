var arrImg = []
arrImg[0]="img/banner1.jpg"
arrImg[1]="img/banner2.jpg"
arrImg[2]="img/banner3.jpg"
arrImg[3]="img/banner4.jpg"
arrImg[4]="img/banner5.jpg"
var i = 0
var img_auto
function slideauto(){
    i++
    document.getElementById("slideshow").src=arrImg[i]
    if(i == arrImg.length-1){
        i= -1
    }
    img_auto= setTimeout(slideauto,1000);
}
window.onload=function(){
    img_auto= setTimeout(slideauto,1000);
}