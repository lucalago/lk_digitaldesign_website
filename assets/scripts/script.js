function changePage(clickedlink) {
    displayPage(clickedlink);
    translateNavPill(clickedlink);
    nohoverCurrentPage(clickedlink);
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

if (displayMode == 'block' && newSection != initSection) { 
    document.getElementById(clickedlink).style.display = 'none';

}   else {
        document.getElementById(clickedlink).style.display = 'block';
        translateNavPill(newSection);
        // transitionPage(newSection);
        initSection = clickedlink;
    }
return false;
}

// function transitionPage(e) {

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