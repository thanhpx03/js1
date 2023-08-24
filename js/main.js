var arrImg = []
arrImg[0] = "img/banner1.jpg"
arrImg[1] = "img/banner2.jpg"
arrImg[2] = "img/banner3.jpg"
arrImg[3] = "img/banner4.jpg"
arrImg[4] = "img/banner5.jpg"
var i = 0
var img_auto

function slideauto() {
    i++
    document.getElementById("slideshow").src = arrImg[i]
    if (i == arrImg.length - 1) {
        i = -1
    }
    img_auto = setTimeout(slideauto, 1000);
}
window.onload = function () {
    img_auto = setTimeout(slideauto, 1000);
}

function stop() {
    clearTimeout(img_auto)
}

function first() {
    document.getElementById("slideshow").src = arrImg[0]
}

function last() {
    document.getElementById("slideshow").src = arrImg[arrImg.length - 1]
}

function next() {
    i++
    document.getElementById("slideshow").src = arrImg[i]
    if (i == arrImg.length - 1) {
        i = -1
    }
}

function pre() {
    document.getElementById("slideshow").src = arrImg[i]
    if (i <= 0) {
        i = arrImg.length
    }
    i--
}

function dangki() {
    // check mã sinh viên
    if (document.getElementById("masinhvien").value == "") {
        document.getElementById("masinhvien_error").innerHTML = "Vui lòng nhập mã sinh viên !!!"
        return false;
    } else document.getElementById("masinhvien_error").innerHTML = ""
    // check họ và tên
    if (document.getElementById("hovaten").value == "") {
        document.getElementById("hovaten_error").innerHTML = "Vui lòng nhập họ và tên !!!"
        return false;
    } else document.getElementById("hovaten_error").innerHTML = ""
    // check email
    if (document.getElementById("email").value == "") {
        document.getElementById("email_error").innerHTML = "Vui lòng nhập email !!!"
        return false;
    }
    if (document.getElementById("email").value.indexOf("@") < 0) {
        document.getElementById("email_error").innerHTML = "Vui lòng đúng định dạng email 'example@gmail.com' !!!"
        return false;
    } else if (document.getElementById("email").value
        .indexOf(".") < 0) {
        document.getElementById("email_error").innerHTML = "Vui lòng đúng định dạng email 'example@gmail.com'!!!"
        return false;
    } else {
        document.getElementById("email_error").innerHTML = ""
    }
    // check giới tính
    var arrgender = document.getElementsByClassName("gender");
    dem = 0;
    for (var i = 0; i < arrgender.length; i++) {
        if (arrgender[i].checked) {
            dem++;
        }
    }
    if (dem == 0) {
        document.getElementById("gender_error").innerHTML = "Vui lòng chọn giới tính !!!"
        return false;
    } else document.getElementById("gender_error").innerHTML = ""
    // check ngày sinh
    if (document.getElementById("date").value == "") {
        document.getElementById("date_error").innerHTML = "Vui lòng chọn ngày sinh !!!"
        return false;
    } else document.getElementById("date_error").innerHTML = ""
    // check quốc tịch
    if (document.getElementById("quoctich").value == "") {
        document.getElementById("quoctich_error").innerHTML = "Vui lòng chọn quốc tịch !!!"
        return false;
    } else document.getElementById("quoctich_error").innerHTML = ""
    // check sở thích
    var arrsothich = document.getElementsByClassName("sothich");
    dem1 = 0;
    for (var i = 0; i < arrsothich.length; i++) {
        if (arrsothich[i].checked) {
            dem1++;
        }
    }
    if (dem1 == 0) {
        document.getElementById("chonsothich").innerHTML = "Vui lòng chọn sở thích !!!"
        return false;
    } else document.getElementById("chonsothich").innerHTML = ""
    // check ghi chú
    var note = document.getElementById('note').value;
    if (note == "") {
        document.getElementById("note_error").innerHTML = "Vui lòng điền ghi chú."
        return false;
    } else if (note.length > 200) {
        document.getElementById("note_error").innerHTML = "Ghi chú phải ít hơn 200 kí tự. "+note.length
        return false;
    } else {
        document.getElementById("note_error").innerHTML = ""
    }
    // THÀNH CÔNG
    alert("Đăng kí thành công !!!")
    window.location.href = "index.html";
    return true;
}

function login() {
    // check mã sinh viên
    if (document.getElementById("login_msv").value == "") {
        alert("Vui lòng nhập mã sinh viên !!!")
        return false;
    }
    if (document.getElementById("login_msv").value != "PH19316") {
        alert("Mã sinh viên không chính sác !!!")
        return false;
    }
    // check email
    if (document.getElementById("login_email").value == "") {
        alert("Vui lòng nhập email !!!")
        return false;
    }
    if (document.getElementById("login_email").value != "doquanglinhdev@gmail.com") {
        alert("Email không đúng !!!");
        return false;
    }
    // THÀNH CÔNG
    alert("Đăng nhập thành công !!!");
    window.location.href = "index.html";
    return true
}
function demkitu(){
    var note = document.getElementById('note').value;
    document.getElementById("note_error").innerHTML = note.length
}