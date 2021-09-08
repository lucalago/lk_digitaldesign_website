function changePage(clickedlink) {
    nohoverCurrentPage(clickedlink);
    translateNavPill(clickedlink);
    displayPage(clickedlink);
    // transitionPage(clickedlink);
}

function displayPage(clickedlink) {
var sections = document.getElementsByClassName('section');

for (var i=0; i<sections.length; i++) { 
  if (sections[i].id != clickedlink) { 
      sections[i].style.display = 'none'; 
    }
}

var displayMode = document.getElementById(clickedlink).style.display;
var initSection = 'section0';
var newSection = clickedlink;
var scrollTop = window.pageYOffset;

if (displayMode == 'block' && newSection != initSection) { 
    document.getElementById(clickedlink).style.display = 'none';
}   else {
        document.getElementById(clickedlink).style.display = 'block';
        initSection = clickedlink;
    }
scrollTop = 0;
return false;

}

// function transitionPage(e) {
//     var initSection = 'section0';
//     var initSectionElement = document.getElementById(initSection);
//     var newSection = e;
//     var newSectionElement = document.getElementById(e);
//     if (newSection == 'section0' && newSection != initSection){
//         initSectionElement.style.opacity="0.8";
//         wait(200);
//         initSectionElement.style.transform="scale(0.8)";
//         wait(200);
//         newSectionElement.style.transform="scale(1)";
//         wait(200);
//         newSectionElement.style.opacity="1";
//         initSection == e;
//         console.log(initSectionElement);
//     } else if (newSection == 'section1' && newSection != initSection){
//         initSectionElement.style.opacity="0.8";
//         wait(200);
//         initSectionElement.style.transform="scale(0.8)";
//         wait(200);
//         newSectionElement.style.transform="scale(1)";
//         wait(200);
//         newSectionElement.style.opacity="1";
//         initSection == e;
//     } else if (newSection == 'section2' && newSection != initSection){
//         initSectionElement.style.opacity="0.8";
//         wait(200);
//         initSectionElement.style.transform="scale(0.8)";
//         wait(200);
//         newSectionElement.style.transform="scale(1)";
//         wait(200);
//         newSectionElement.style.opacity="1";
//         initSection == e;
//     } else if (newSection == 'section3' && newSection != initSection){
//         initSectionElement.style.opacity="0.8";
//         wait(200);
//         initSectionElement.style.transform="scale(0.8)";
//         wait(200);
//         newSectionElement.style.transform="scale(1)";
//         wait(200);
//         newSectionElement.style.opacity="1";
//         initSection == e;
//     }
// return false;
// }

function translateNavPill(e) {
    var page = e;
    var pill = document.getElementsByClassName('nav_pill')[0];
    if (page == 'section0'){
        pill.style.transform="translateX(11px)";
        pill.style.width="60px";
    } else if (page == 'section1'){
        pill.style.transform="translateX(83px)";
        pill.style.width="82px";
    } else if (page == 'section2'){
        pill.style.transform="translateX(174px)";
        pill.style.width="80px";
    } else if (page == 'section3'){
        pill.style.transform="translateX(266px)";
        pill.style.width="75px";
    }
return false;
}


function nohoverCurrentPage(e) {
let section0Link = document.getElementsByClassName('navitem_link')[0];
let section1Link = document.getElementsByClassName('navitem_link')[1];
let section2Link = document.getElementsByClassName('navitem_link')[2];
let section3Link = document.getElementsByClassName('navitem_link')[3];

if (e == 'section0'){
    section0Link.classList.add('nohover');
    section1Link.classList.remove('nohover');
    section2Link.classList.remove('nohover');
    section3Link.classList.remove('nohover');
} else if (e == 'section1'){
    section0Link.classList.remove('nohover');
    section1Link.classList.add('nohover');
    section2Link.classList.remove('nohover');
    section3Link.classList.remove('nohover');
} else if (e == 'section2'){
    section0Link.classList.remove('nohover');
    section1Link.classList.remove('nohover');
    section2Link.classList.add('nohover');
    section3Link.classList.remove('nohover');
} else if (e == 'section3'){
    section0Link.classList.remove('nohover');
    section1Link.classList.remove('nohover');
    section2Link.classList.remove('nohover');
    section3Link.classList.add('nohover');
}
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }