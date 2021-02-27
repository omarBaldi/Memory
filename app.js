const cardsContainer = document.querySelector('.memory__grid');
const cardsData = [
    {
        id: 0,
        image: './images/1.jpg',
    },
    {
        id: 0,
        image: './images/1.jpg',
    },
    {
        id: 1,
        image: './images/2.jpg',
    },
    {
        id: 1,
        image: './images/2.jpg',
    },
    {
        id: 2,
        image: './images/3.jpg',
    },
    {
        id: 2,
        image: './images/3.jpg',
    },
    {
        id: 3,
        image: './images/4.jpg',
    },
    {
        id: 3,
        image: './images/4.jpg',
    },
    {
        id: 4,
        image: './images/5.jpg',
    },
    {
        id: 4,
        image: './images/5.jpg',
    },
    {
        id: 5,
        image: './images/6.jpg',
    },
    {
        id: 5,
        image: './images/6.jpg',
    },
    {
        id: 6,
        image: './images/7.jpg',
    },
    {
        id: 6,
        image: './images/7.jpg',
    },
    {
        id: 7,
        image: './images/8.jpg',
    },
    {
        id: 7,
        image: './images/8.jpg',
    }
];
const classHide = 'card__hide';
const classGuessed = 'card__guessed';

let cardsGuessed = [];
let cardsClicked = [];

const createCard = () => {
    
    let cardsDOM = [];

    cardsData.forEach(card => {

        const imageCard = document.createElement('img');
        imageCard.setAttribute('src', card.image);

        const cardDOM = document.createElement('div');
        cardDOM.classList.add('card', classHide);
        cardDOM.dataset.cardIndex = card.id;
        cardDOM.appendChild(imageCard);

        cardsDOM = [...cardsDOM, cardDOM];
    });

    [...cardsDOM].forEach(card => cardsContainer.appendChild(card));
};

const shuffleCards = () => {
    return cardsData.sort(() => .5 - Math.random());
};

function startGame() {

    //Change order of the cards randomly
    shuffleCards();

    //Create cards with image inside
    createCard();

    //main loop (exit when array of guessed cards ==== cardsData)
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {

            const currentCard = e.target;
            currentCard.classList.remove(classHide);
            cardsClicked = [...cardsClicked, currentCard];

            if (cardsClicked.length === 2) {
                const firstCard = cardsClicked[0];
                const secondCard = cardsClicked[1];

               const firstCardIndex = firstCard.dataset.cardIndex;
               const secondCardIndex = secondCard.dataset.cardIndex;

               if (firstCardIndex === secondCardIndex) {
                cardsGuessed = [...cardsGuessed, firstCard, secondCard];
                [...cardsClicked].forEach(cardClicked => cardClicked.classList.add(classGuessed));
               } else {
                   alert('oops!');
                   [...cardsClicked].forEach(cardClicked => cardClicked.classList.add(classHide));
                }

               cardsClicked = [];
            }


        });
    })
};

startGame();