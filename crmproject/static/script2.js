
const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});


// PROFILE DROPDOWN

const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
    dropdownProfile.classList.toggle('show');
})


window.addEventListener('click', function (e) {
    if(e.target !== imgProfile) {
        if(e.target !== dropdownProfile) {
            if(dropdownProfile.classList.contains('show')) {
                dropdownProfile.classList.remove('show');
            }
        }
    }
})


// const hourCircle = document.querySelector(".hour");
// const minuteCircle = document.querySelector(".minute");
// const secondCircle = document.querySelector(".second");

// const hourText = hourCircle.querySelector("span");
// const minuteText = minuteCircle.querySelector("span");
// const secondText = secondCircle.querySelector("span");

// function getTimeAndShow() {
//   let date = new Date()
//   let hour = date.getHours()
//   let minute = date.getMinutes()
//   let second = date.getSeconds()

//   let hourPercent = hour/24*100;
//   let minutePercent = minute/60*100;
//   let secondPrecent = second/60*100;

//   hourCircle.style.setProperty("--i", `${hourPercent}%`)
//   minuteCircle.style.setProperty("--i", `${minutePercent}%`)
//   secondCircle.style.setProperty("--i", `${secondPrecent}%`)

//   hourText.innerHTML = `${hour} <small>H</small>`
//   minuteText.innerHTML = `${minute} <small>M</small>`
//   secondText.innerHTML = `${second} <small>S</small>`

// }

// getTimeAndShow()

// setInterval(getTimeAndShow, 1000)