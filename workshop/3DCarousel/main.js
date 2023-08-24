const carousel = document.querySelector(".carousel");
const button_right = document.querySelector(".button-right");
const button_left = document.querySelector(".button-left");
const points = document.querySelector(".points");
let className = ['left2', 'left1', 'main', 'right1', 'right2'];
let child = [];
let orders;

const createCard = (info) => {
    let { image, title, rate, type, summary, casts } = info;
    let carousel__item = createElement('div', 'carousel__item');
    let movie__card = createElement('div', 'movie__card');
    let image_bg = createElement('img', 'image-bg', { src: image });
    let movie__content = createElement('div', 'movie__content');
    let movie__content_header = createElement('div', 'movie__content-header');
    // 
    let movie__content_title = createElement('h2', 'movie__content-title', { innerText: title });

    let movie__content_rate = createElement('div', 'movie__content-rate');
    movie__content_rate.append(createElement('span', '', { innerHTML: '&star;' }), createElement('span', '', { innerText: rate }));

    let movie__content_type = createElement('div', 'movie__content-type');
    type.forEach(t => {
        movie__content_type.append(createElement('div', '', { innerText: t }))
    })

    movie__content_header.append(movie__content_title, movie__content_rate, movie__content_type);
    // 

    // 
    let movie__content_body = createElement('div', 'movie__content-body');
    let movie__content_info = createElement('p', 'movie__content-info', { innerText: summary });

    let movie__content_cast_container = createElement('div', 'movie__content-cast-container');
    movie__content_cast_container.append(createElement('span', '', { innerText: 'Cast' }));
    let movie__content_cast = createElement('div', 'movie__content-cast');
    casts.forEach(c => {
        movie__content_cast.appendChild(createElement('img', '', { src: c }));
    })
    movie__content_cast_container.appendChild(movie__content_cast)

    movie__content_body.append(movie__content_info, movie__content_cast_container)
    // 

    movie__content.append(movie__content_header, movie__content_body);

    movie__card.append(image_bg, movie__content);

    carousel__item.append(movie__card);
    return carousel__item
}

const createElement = (type, className, attibute = {}) => {
    let e = document.createElement(type);
    if (className != '') e.classList.add(className);
    if (attibute.src) e.src = attibute.src;
    if (attibute.innerText) e.innerText = attibute.innerText;
    if (attibute.innerHTML) e.innerHTML = attibute.innerHTML;
    return e;
}

const setClassName = (funcType) => {
    orders.forEach((order, i) => {
        if (funcType === "add") child[order].classList.add(className[i]);
        else if (funcType === "remove") child[order].classList.remove(className[i]);
    })
}

const incIndex = (index) => {
    index++;
    if (index > child.length - 1) index = 0;
    return index;
}

const decIndex = (index) => {
    index--;
    if (index < 0) index = child.length - 1;
    return index;
}

const movies = [
    {
        image: "image/ThorLoveAndThunder.jpg",
        title: "Thor Love And Thuner",
        rate: "6.2",
        type: ['Action', 'Adventure', 'Comedy'],
        summary: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/avatar.jpg",
        title: "Avatar: The Way of Water",
        rate: "7.6",
        type: ['Action', 'Adventure', 'Fantasy'],
        summary: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/johnwick.jpg",
        title: "John Wick: Chapter 4",
        rate: "7.8",
        type: ['Action', 'Crime', 'Thriller'],
        summary: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/starwars.jpeg",
        title: "Star Wars: Episode IX - The Rise of Skywalker",
        rate: "6.5",
        type: ['Action', 'Adventure', 'Fantasy'],
        summary: 'In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/thelastofus.jpeg",
        title: "The Last of Us",
        rate: "8.8",
        type: ['Action', 'Adventure', 'Drama'],
        summary: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/loki.jpg",
        title: "Loki",
        rate: "8.2",
        type: ['Action', 'Adventure', 'Fantasy'],
        summary: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/ironman3.jpg",
        title: "Iron Man 3",
        rate: "7.1",
        type: ['Action', 'Adventure', 'Sci-fi'],
        summary: 'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/missionimpossible.jpeg",
        title: "Mission: Impossible - Dead Reckoning Part One",
        rate: "8.0",
        type: ['Action', 'Adventure', 'Thriller'],
        summary: 'Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    },
    {
        image: "image/spiderman.jpg",
        title: "Spider-Man: No Way Home",
        rate: "8.2",
        type: ['Action', 'Adventure', 'Fantasy'],
        summary: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help.When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider- Man.',
        casts: ["https://i.pravatar.cc/300?img=47", "https://i.pravatar.cc/300?img=48", "https://i.pravatar.cc/300?img=49"]
    }
]

movies.forEach((m, i) => {
    child.push(createCard(m))
    points.append(createElement('div', 'dot'))
    carousel.append(child[i]);
})

let pointChilds = Array.from(points.children);

orders = [child.length - 2, child.length - 1, 0, 1, 2];
pointChilds[orders[2]].classList.add('selected');

setClassName('add');

button_right.addEventListener('click', () => {
    buttonFunction(decIndex);
})

button_left.addEventListener('click', () => {
    buttonFunction(incIndex);
})

points.addEventListener('click', (e) => {
    let target = e.target.closest(".dot");
    if (target === null) return;
    let currentIndex = orders[2];
    let targetIndex = pointChilds.findIndex(c => c === target);
    let diffIndex = currentIndex - targetIndex;
    let funct = diffIndex > 0 ? decIndex : incIndex
    forLoop(Math.abs(diffIndex), 80, funct);
})

const forLoop = async (time, ms, funct) => {
    for (let i = 0; i < time; i++) {
        await sleep(ms).then(() => buttonFunction(funct));
    }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



const buttonFunction = (funct) => {
    setClassName('remove');
    points.children[orders[2]].classList.remove('selected');
    orders.forEach((e, i) => orders[i] = funct(e))
    setClassName('add');
    points.children[orders[2]].classList.add('selected');
}

// create card 



