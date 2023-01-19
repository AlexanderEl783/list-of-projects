const list = [
    {
        id: 1,
        category: "JavaScript",
        img: "./images/1-Color-flipper.png",
        project: "Color flipper",
        link: "https://alexanderel783.github.io/JS_practice/1.Color_flipper/index.html",
        githubLink: "https://github.com/AlexanderEl783/JS_practice/tree/main/1.Color_flipper"
    },
    {
        id: 2,
        category: "JavaScript",
        img: "./images/2-Counter.png",
        project: "Counter",
        link: "https://alexanderel783.github.io/JS_practice/2.Counter/index.html",
        githubLink: "https://github.com/AlexanderEl783/JS_practice/tree/main/2.Counter"
    },
    {
        id: 3,
        category: "JavaScript",
        img: "./images/3-Quotes.png",
        project: "Quotes",
        link: "https://alexanderel783.github.io/JS_practice/3.Quotes/index.html",
        githubLink: "https://github.com/AlexanderEl783/JS_practice/tree/main/3.Quotes"
    },
    {
        id: 4,
        category: "JavaScript",
        img: "./images/4-Pet-gallery.png",
        project: "Pet gallery",
        link: "https://alexanderel783.github.io/JS_practice/4.Pet%20gallery/index.html",
        githubLink: "https://github.com/AlexanderEl783/JS_practice/tree/main/4.Pet%20gallery"
    },
    {
        id: 5,
        category: "JavaScript",
        img: "./images/5-NFT.png",
        project: "NFT Countdown",
        link: "https://alexanderel783.github.io/JS_practice/5.NFT%20Countdown/index.html",
        githubLink: "https://github.com/AlexanderEl783/JS_practice/tree/main/5.NFT%20Countdown"
    },
    {
        id: 6,
        category: "JavaScript",
        img: "./images/6-Ammetr.png",
        project: "Ammetr",
        link: "https://alexanderel783.github.io/Ammeter/",
        githubLink: "https://github.com/AlexanderEl783/Ammeter"
    },
    {
        id: 7,
        category: "JavaScript",
        img: "./images/7-ToDo.png",
        project: "ToDo",
        link: "https://alexanderel783.github.io/JS_practice/6.To_do/",
        githubLink: "https://github.com/AlexanderEl783/JS_practice/tree/main/6.To_do"
    },
    {
        id: 8,
        category: "JavaScript",
        img: "./images/8-Cat_food.png",
        project: "Cat's food",
        link: "https://alexanderel783.github.io/Cat_food/",
        githubLink: "https://github.com/AlexanderEl783/Cat_food"
    },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
    displayProjects(list);
    // displayButtons();
});

function displayProjects(listItems) {
    let displayProject = listItems.map(function (item) {
        return `<article class="projects"><a href="${item.link}" target="_blank" class="link-wrap">
        <img src="${item.img}" class="photo" alt="${item.project}"></a>
        <div class="link-div">
          <a href="${item.githubLink}" target=_blank class="link" title="GitHub"><i class="fa fa-github fa-2x"></i></a>
          <h3 class="project-name">${item.project}</h3>
        </div>
        </article>`;
    });
    displayProject = displayProject.join("");
    sectionCenter.innerHTML = displayProject;
}


// this is for future filter buttons

// function displayButtons() {
//     const categories = list.reduce(function (values, item) {
//         if (!values.includes(item.category)) {
//             values.push(item.category);
//         }
//         return values;
//     }, ['all']
//     );
//     const categoryBtns = categories.map(function (category) {
//         return ` <button class="filter-btn" type="button" data-id="${category}">${category}</button>`
//     })
//         .join("");
//     container.innerHTML = categoryBtns;

//     const filterBtns = container.querySelectorAll('.filter-btn');
//     filterBtns.forEach(function (btn) {
//         btn.addEventListener('click', function (e) {
//             const category = e.currentTarget.dataset.id;
//             const listCategory = list.filter(function (listItem) {
//                 if (listItem.category === category) {
//                     return listItem;
//                 }
//             });
//             if (category === 'all') {
//                 displayProjects(list);
//             } else {
//                 displayProjects(listCategory);
//             }
//         })
//     })
// }

