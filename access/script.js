
function changeHeader(){
    var scrollPosition = document.documentElement.scrollTop;
    var objHeader = document.getElementById('header');
    if(scrollPosition > 0)
    {
        objHeader.style.padding = '13px 0';
        objHeader.style.opacity = 1;
    }
    else
    {
        objHeader.style.padding = '35px 0';
        objHeader.style.opacity = 0.7;
    }
}
window.addEventListener('scroll', changeHeader);

var presentBorder = document.getElementById('headerHome');
function borderAdd1(){
    presentBorder.classList.remove('afterAdd');
    var h = document.getElementById('headerHome');
    h.classList.add('afterAdd');
    presentBorder = h;
}
function borderAdd2(){
    presentBorder.classList.remove('afterAdd');
    var h = document.getElementById('headerAbout');
    h.classList.add('afterAdd');
    presentBorder = h;
}
function borderAdd3(){
    presentBorder.classList.remove('afterAdd');
    var h = document.getElementById('headerDes');
    h.classList.add('afterAdd');
    presentBorder = h;
}
function borderAdd4(){
    presentBorder.classList.remove('afterAdd');
    var h = document.getElementById('headerTour');
    h.classList.add('afterAdd');
    presentBorder = h;
}
function borderAdd5(){
    presentBorder.classList.remove('afterAdd');
    var h = document.getElementById('headerBlog');
    h.classList.add('afterAdd');
    presentBorder = h;
}

function rotateTextReverse(){
    let lists = document.querySelectorAll('.review__body--author');
    document.getElementById('col-cd').prepend(lists[lists.length-1]);
}

function rotateText(){
    
    let lists = document.querySelectorAll('.review__body--author');
    document.getElementById('col-cd').appendChild(lists[0]);
}
setInterval(rotateText, 4000);
var tmpbefore = document.getElementById('up3');
var tmpbeforeDes = document.getElementById('des-mobile3');
function uptoshow1(){
    tmpbefore.style.width = '150px';
    tmpbefore.style.height= '113px';
    var sett = document.getElementById('up1');
    if(window.innerWidth >=600)
    {
        sett.style.width = '200px';
        sett.style.height = '200px';
    }
    else
    {
        var beforeDes = document.getElementById('des-mobile1');
        tmpbeforeDes.style.display = 'none';
        beforeDes.style.display = 'block';;
        sett.style.height = '270px';
        sett.style.width = '270px';
        tmpbeforeDes = beforeDes;
    }
    tmpbefore = sett;
}
function uptoshow2(){
    tmpbefore.style.width = '150px';
    tmpbefore.style.height= '113px';
    var sett = document.getElementById('up2');
    if(window.innerWidth >=600)
    {
        sett.style.width = '200px';
        sett.style.height = '200px';
    }
    else
    {
        var beforeDes = document.getElementById('des-mobile2');
        tmpbeforeDes.style.display = 'none';
        beforeDes.style.display = 'block';
        sett.style.height = '270px';
        sett.style.width = '270px';
        tmpbeforeDes = beforeDes;
    }
    tmpbefore = sett;
}
function uptoshow3(){
    tmpbefore.style.width = '150px';
    tmpbefore.style.height= '113px';
    var sett = document.getElementById('up3');
    if(window.innerWidth >=600)
    {
        sett.style.width = '200px';
        sett.style.height = '200px';
    }
    else
    {
        var beforeDes = document.getElementById('des-mobile3');
        tmpbeforeDes.style.display = 'none';
        beforeDes.style.display = 'block';
        sett.style.height = '270px';
        sett.style.width = '270px';
        tmpbeforeDes = beforeDes;
    }
    tmpbefore = sett;
}
function uptoshow4(){
    tmpbefore.style.width = '150px';
    tmpbefore.style.height= '113px';
    var sett = document.getElementById('up4');
    if(window.innerWidth >=600)
    {
        sett.style.width = '200px';
        sett.style.height = '200px';
    }
    else
    {
        var beforeDes = document.getElementById('des-mobile4');
        tmpbeforeDes.style.display = 'none';
        beforeDes.style.display = 'block';
        sett.style.height = '270px';
        sett.style.width = '270px';
        tmpbeforeDes = beforeDes;
    }
    tmpbefore = sett;
}
function uptoshow5(){
    tmpbefore.style.width = '150px';
    tmpbefore.style.height= '113px';
    var sett = document.getElementById('up5');
    if(window.innerWidth >=600)
    {
        sett.style.width = '200px';
        sett.style.height = '200px';
    }
    else
    {
        var beforeDes = document.getElementById('des-mobile5');
        tmpbeforeDes.style.display = 'none';
        beforeDes.style.display = 'block';
        sett.style.height = '270px';
        sett.style.width = '270px';
        tmpbeforeDes = beforeDes;
    }
    tmpbefore = sett;
}

var tmpAnhShow = document.getElementById('VietNam');
var tmpAnhShowContent = document.getElementById('VietNam_content')
function anhShow1(){
    tmpAnhShow.style.opacity = 0;
    var anh = document.getElementById('thuysi');
    anh.style.opacity = 1;
    var anhct = document.getElementById('thuysi_content');
    tmpAnhShowContent.style.display = 'none';
    anhct.style.display = 'block';
    tmpAnhShow = anh;
    tmpAnhShowContent = anhct;
}
function anhShow2(){
    tmpAnhShow.style.opacity = 0;
    var anh = document.getElementById('singapore');
    anh.style.opacity = 1;
    var anhct = document.getElementById('singapore_content');
    tmpAnhShowContent.style.display = 'none';
    anhct.style.display = 'block';
    tmpAnhShow = anh;
    tmpAnhShowContent = anhct;
}
function anhShow3(){
    tmpAnhShow.style.opacity = 0;
    var anh = document.getElementById('VietNam');
    anh.style.opacity = 1;
    var anhct = document.getElementById('VietNam_content');
    tmpAnhShowContent.style.display = 'none';
    anhct.style.display = 'block';
    tmpAnhShow = anh;
    tmpAnhShowContent = anhct;
}
function anhShow4(){
    tmpAnhShow.style.opacity = 0;
    var anh = document.getElementById('uc');
    anh.style.opacity = 1;
    var anhct = document.getElementById('uc_content');
    tmpAnhShowContent.style.display = 'none';
    anhct.style.display = 'block';
    tmpAnhShow = anh;
    tmpAnhShowContent = anhct;
}
function anhShow5(){
    tmpAnhShow.style.opacity = 0;
    var anh = document.getElementById('china');
    anh.style.opacity = 1;
    var anhct = document.getElementById('china_content');
    tmpAnhShowContent.style.display = 'none';
    anhct.style.display = 'block';
    tmpAnhShow = anh;
    tmpAnhShowContent = anhct;
}

function openHeader(){
    var a = document.getElementById('header--hide-open');
    a.style.display = 'block';
    a.style.animation = 'OpenHeader 0.5s ease-in-out forwards';
    var b = document.getElementById('modal');
    b.style.display = 'block';


}
function hideHeader(){
    var a = document.getElementById('header--hide-open');
    a.style.animation = 'HideHeader 0.5s ease-in-out forwards';
    var b = document.getElementById('modal');
    b.style.display = 'none';
    setTimeout(() => {
        a.style.display = 'none';
      }, 500);
    
}

var tmp = document.getElementById('headerHideHome');
function changeColor1(){
    tmp.style.color = 'white';
    var tmp2 = document.getElementById('headerHideHome');
    tmp2.style.color = 'orange';
    tmp = tmp2;
}
function changeColor2(){
    tmp.style.color = 'white';
    var tmp2 = document.getElementById('headerHideAbout');
    tmp2.style.color = 'orange';
    tmp = tmp2;
}
function changeColor3(){
    tmp.style.color = 'white';
    var tmp2 = document.getElementById('headerHideDes');
    tmp2.style.color = 'orange';
    tmp = tmp2;
}
function changeColor4(){
    tmp.style.color = 'white';
    var tmp2 = document.getElementById('headerHideTour');
    tmp2.style.color = 'orange';
    tmp = tmp2;
}
function changeColor5(){
    tmp.style.color = 'white';
    var tmp2 = document.getElementById('headerHideBlog');
    tmp2.style.color = 'orange';
    tmp = tmp2;
}
