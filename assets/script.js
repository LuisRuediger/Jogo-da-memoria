const front = "card_front";
const back = "card_back";
const card = "card";
const icon = "icon";

startGame();

function startGame() {
  initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");

  game.cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add("card");
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.addEventListener("click", flipCard);

    gameBoard.appendChild(cardElement);
  });
}

function createCardContent(card, cardElement) {
  createCardFace(front, card, cardElement);
  createCardFace(back, card, cardElement);
}

function createCardFace(face, card, element) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(face);
  if (face === front) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(icon);
    iconElement.src = "./assets/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    cardElementFace.innerHTML = "&lt/&gt";
  }
  element.appendChild(cardElementFace);
}

function flipCard() {
  this.classList.add("flip");
}
