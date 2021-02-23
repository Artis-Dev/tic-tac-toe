// Gameboard module
const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const gameContainer = document.querySelector('#game-container');

  const renderBoard = () => {
    for (let i = 0; i < board.length; i += 1) {
      const gameDiv = document.createElement('div');
      gameDiv.setAttribute('data-index', i);
      gameContainer.appendChild(gameDiv);
    }
  };
  renderBoard();

  const gameDivs = document.querySelectorAll('#game-container > div');

  const clickBoard = () => {
    let lastPlayer = '';
    gameDivs.forEach((element) => {
      element.addEventListener('click', () => {
        const index = element.getAttribute('data-index');
        if (board[index] === '') {
          if (lastPlayer === '' || lastPlayer === playerTwo) {
            lastPlayer = playerOne;
            board[index] = 'x';
            lastPlayer.addMark(element, lastPlayer);
          } else {
            lastPlayer = playerTwo;
            board[index] = 'o';
            lastPlayer.addMark(element, lastPlayer);
          }
        } else {
          console.log('Already taken');
        }
      });
    });
  };
  clickBoard();

  return {
    board,
    renderBoard,
    clickBoard,
  };
})();

// Players factory
const players = (name) => {
  const sayHello = () => console.log(`Hello! I'm ${name}`);
  const addMark = (element, lastPlayer) => {
    const el = element;
    if (lastPlayer === playerOne) {
      el.style.backgroundColor = '#00BBF9';
    } else {
      el.style.backgroundColor = '#F15BB5';
    }
    console.log(lastPlayer.name);
  };
  return { name, sayHello, addMark };
};

const playerOne = players('Artis');
const playerTwo = players('moonii');
playerOne.sayHello();
playerTwo.sayHello();
