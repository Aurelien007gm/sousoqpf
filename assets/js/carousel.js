const politiciens = [
    {
        nom: "Nicolas Sarkozy",
        image: "assets/images/sarkozy.jpg",
        page: "politiciens/nicolas-sarkozy.html"
    },
    {
        nom: "Marine Le Pen",
        image: "assets/images/lepen.jpg",
        page: "politiciens/marine-le-pen.html"
    }
];

let index = 0;

const img = document.getElementById("politician-image");
const link = document.getElementById("politician-link");

function display() {
    img.src = politiciens[index].image;
    img.alt = politiciens[index].nom;
    link.href = politiciens[index].page;
}

document.getElementById("next").onclick = () => {
    index = (index + 1) % politiciens.length;
    display();
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + politiciens.length) % politiciens.length;
    display();
};

display();

