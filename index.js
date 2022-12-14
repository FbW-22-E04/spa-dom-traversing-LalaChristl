// Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px.

let heading = document.querySelector('h1');
let header = heading.closest('header');
header.style.border = '5px solid black'


// If the .info section contains an .info-package, select all package-titles and give the title's previous element a border.
const info = document.querySelector('.info')
const infoPackage = document.querySelector('.info-package')
const packageTitle = document.querySelectorAll('.package-title');

if (info.contains(infoPackage)){
packageTitle.forEach(item => item.previousElementSibling.style.border = '5px solid black')
}


// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border.

let label = document.querySelectorAll('label');

label.forEach(item => {
    if (item.matches('.mild')) {
        item.style.border = '3px solid yellow'
    }
    else if (item.matches('.intense'))
    { item.style.border = '3px solid orange'

    }
    else {
        item.style.border = '3px solid red'
    }})




// Add all the children of the .nav-list to the footer's unordered list, .site-map. Note: the .nav-list should still contain its children.


const navList = document.querySelector('.nav-list');
const navListClone = navList.cloneNode(true)

const siteMap = document.querySelector('.site-map');



// // console.log(navList);
// // console.log(navList.children);
Array.from(navListClone.children).forEach((item) => {siteMap.appendChild(item)})




// Bonus After you completed the assignment and published the solution branch, you can create a new branch feature/restyle and change the design of the landing-page. You can publish it on GitHub Pages when you are satisfied with the result.