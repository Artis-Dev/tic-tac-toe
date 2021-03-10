/* eslint-disable no-console */
// Players factory
const createPlayers = (name, appearance, mark, mode) => ({
  name,
  appearance,
  mark,
  mode,
  sayHello() {
    return console.log(`Hello! I'm ${this.appearance} my name is ${this.name} I have ${this.mark} (${this.mode})`);
  },
  addMark(element, lastPlayer) {
    const el = element;
    if (lastPlayer === newGame.playerOne) {
      const markIcon = document.createElement('i');
      markIcon.className = lastPlayer.mark;
      el.appendChild(markIcon);
      el.style.backgroundColor = '#81B29A';
    } else {
      const markIcon = document.createElement('i');
      markIcon.className = lastPlayer.mark;
      el.appendChild(markIcon);
      el.style.backgroundColor = '#E07A5F';
    }
    console.log(lastPlayer.name);
  },
});

// Create new game module
const newGame = (() => {
  // DOM elements
  const newGameModal = document.querySelector('#new-game-modal');
  const startGameButton = document.querySelector('#start-game');
  // const resetButton = document.querySelector('#reset');
  const playerTwoHeading = document.querySelector('.player-two-button h3');
  const playerTwoHeadingList = document.querySelectorAll('.player-two-list h3');
  const playerOneName = document.querySelector('#player-one-name');
  const playerTwoName = document.querySelector('#player-two-name');
  const playerOneAppearance = document.querySelectorAll('#player-one .appearance');
  const playerTwoAppearance = document.querySelectorAll('#player-two .appearance');
  const playerOneMark = document.querySelectorAll('#player-one .mark');
  const playerTwoMark = document.querySelectorAll('#player-two .mark');
  // DOM elements for errors
  const playerTwoErrorMode = document.querySelector('#player-two .error-mode');
  const playerOneErrorName = document.querySelector('#player-one .error-name');
  const playerTwoErrorName = document.querySelector('#player-two .error-name');
  const playerOneErrorAppearance = document.querySelector('#player-one .error-appearance');
  const playerTwoErrorAppearance = document.querySelector('#player-two .error-appearance');
  const playerOneErrorMark = document.querySelector('#player-one .error-mark');
  const playerTwoErrorMark = document.querySelector('#player-two .error-mark');
  // Player's sections
  const playerOneSectionName = document.querySelector('.player-one-section .player-section-name');
  const playerTwoSectionName = document.querySelector('.player-two-section .player-section-name');
  const playerOneSectionAppearance = document.querySelector('.player-one-section .player-section-appearance');
  const playerTwoSectionAppearance = document.querySelector('.player-two-section .player-section-appearance');
  const playerOneSectionMark = document.querySelector('.player-one-section .player-section-mark');
  const playerTwoSectionMark = document.querySelector('.player-two-section .player-section-mark');

  const playerOne = createPlayers('Player One', 'fas fa-ear-muffs', 'fas fa-times', 'Human');
  const playerTwo = createPlayers('Player Two', 'fas fa-hat-winter', 'fas fa-circle', '');

  let newPlayerOneAppearance;
  let newPlayerTwoAppearance;
  let newPlayerOneMark;
  let newPlayerTwoMark;

  // New game UI
  const createPlayersUi = () => {
    playerTwoHeadingList.forEach((item) => {
      item.addEventListener('click', () => {
        playerTwoHeading.textContent = item.textContent;
      });
    });

    playerOneAppearance.forEach((appearance) => {
      appearance.addEventListener('click', () => {
        newPlayerOneAppearance = appearance.children[0].className;
        playerOneAppearance.forEach((element) => {
          element.classList.remove('selected');
        });
        appearance.classList.add('selected');
      });
    });

    playerTwoAppearance.forEach((appearance) => {
      appearance.addEventListener('click', () => {
        newPlayerTwoAppearance = appearance.children[0].className;
        playerTwoAppearance.forEach((element) => {
          element.classList.remove('selected');
        });
        appearance.classList.add('selected');
      });
    });

    playerOneMark.forEach((mark) => {
      mark.addEventListener('click', () => {
        newPlayerOneMark = mark.children[0].className;
        playerOneMark.forEach((element) => {
          element.classList.remove('selected');
        });
        mark.classList.add('selected');
      });
    });

    playerTwoMark.forEach((mark) => {
      mark.addEventListener('click', () => {
        newPlayerTwoMark = mark.children[0].className;
        playerTwoMark.forEach((element) => {
          element.classList.remove('selected');
        });
        mark.classList.add('selected');
      });
    });
  };
  createPlayersUi();

  const setupGame = () => {
    // Player one setup
    playerOne.name = playerOneName.value;
    playerOne.appearance = newPlayerOneAppearance;
    playerOne.mark = newPlayerOneMark;
    playerOne.sayHello();
    // Player two setup
    playerTwo.mode = playerTwoHeading.textContent;
    playerTwo.name = playerTwoName.value;
    playerTwo.appearance = newPlayerTwoAppearance;
    playerTwo.mark = newPlayerTwoMark;
    playerTwo.sayHello();
    // Player's sections setup
    playerOneSectionName.textContent = playerOne.name;
    playerTwoSectionName.textContent = playerTwo.name;
    const playerOneAppearanceIcon = document.createElement('i');
    playerOneAppearanceIcon.className = playerOne.appearance;
    playerOneSectionAppearance.appendChild(playerOneAppearanceIcon);
    const playerTwoAppearanceIcon = document.createElement('i');
    playerTwoAppearanceIcon.className = playerTwo.appearance;
    playerTwoSectionAppearance.appendChild(playerTwoAppearanceIcon);
    const playerOneMarkIcon = document.createElement('i');
    playerOneMarkIcon.className = playerOne.mark;
    playerOneSectionMark.appendChild(playerOneMarkIcon);
    const playerTwoMarkIcon = document.createElement('i');
    playerTwoMarkIcon.className = playerTwo.mark;
    playerTwoSectionMark.appendChild(playerTwoMarkIcon);
  };

  const validation = () => {
    startGameButton.addEventListener('click', () => {
      if (playerTwoHeading.textContent !== 'Choose'
      && playerOneName.value !== ''
      && playerTwoName.value !== ''
      && newPlayerOneAppearance !== undefined
      && newPlayerTwoAppearance !== undefined
      && newPlayerOneMark !== undefined
      && newPlayerTwoMark !== undefined) {
        setupGame();
        newGameModal.style.display = 'none';
      }
      // Mode error
      if (playerTwoHeading.textContent === 'Choose') {
        playerTwoErrorMode.textContent = 'CHOOSE PLAYER MODE';
        playerTwoErrorMode.style.display = 'block';
      } else {
        playerTwoErrorMode.textContent = '';
        playerTwoErrorMode.style.display = 'none';
      }
      // Name errors
      if (playerOneName.value === '') {
        playerOneErrorName.textContent = 'FILL YOUR NAME';
        playerOneErrorName.style.display = 'block';
      } else {
        playerOneErrorName.textContent = '';
        playerOneErrorName.style.display = 'none';
      }
      if (playerTwoName.value === '') {
        playerTwoErrorName.textContent = 'FILL YOUR NAME';
        playerTwoErrorName.style.display = 'block';
      } else {
        playerTwoErrorName.textContent = '';
        playerTwoErrorName.style.display = 'none';
      }
      // Appearance errors
      if (newPlayerOneAppearance === undefined) {
        playerOneErrorAppearance.textContent = 'CHOOSE APPEARANCE';
        playerOneErrorAppearance.style.display = 'block';
      } else {
        playerOneErrorAppearance.textContent = '';
        playerOneErrorAppearance.style.display = 'none';
      }
      if (newPlayerTwoAppearance === undefined) {
        playerTwoErrorAppearance.textContent = 'CHOOSE APPEARANCE';
        playerTwoErrorAppearance.style.display = 'block';
      } else {
        playerTwoErrorAppearance.textContent = '';
        playerTwoErrorAppearance.style.display = 'none';
      }
      // Mark errors
      if (newPlayerOneMark === undefined) {
        playerOneErrorMark.textContent = 'CHOOSE MARK';
        playerOneErrorMark.style.display = 'block';
      } else {
        playerOneErrorMark.textContent = '';
        playerOneErrorMark.style.display = 'none';
      }
      if (newPlayerTwoMark === undefined) {
        playerTwoErrorMark.textContent = 'CHOOSE MARK';
        playerTwoErrorMark.style.display = 'block';
      } else {
        playerTwoErrorMark.textContent = '';
        playerTwoErrorMark.style.display = 'none';
      }
    });
  };
  validation();

  return {
    playerOne,
    playerTwo,
  };
})();

// Game board module
const gameBoard = (() => {
  const gameContainer = document.querySelector('#game-container');

  let board = ['', '', '', '', '', '', '', '', ''];
  let playerOneBoard = [];
  let playerTwoBoard = [];

  const renderBoard = () => {
    for (let i = 0; i < board.length; i += 1) {
      const gameDiv = document.createElement('div');
      gameDiv.setAttribute('data-index', i);
      gameContainer.appendChild(gameDiv);
    }
  };
  renderBoard();

  const gameDivs = document.querySelectorAll('#game-container > div');

  const checkWinner = (playerBoard) => {
    if (playerBoard[0] === 'x' && playerBoard[1] === 'x' && playerBoard[2] === 'x') {
      return true;
    } if (playerBoard[0] === 'x' && playerBoard[1] === 'x' && playerBoard[2] === 'x') {
      return true;
    } if (playerBoard[3] === 'x' && playerBoard[4] === 'x' && playerBoard[5] === 'x') {
      return true;
    } if (playerBoard[6] === 'x' && playerBoard[7] === 'x' && playerBoard[8] === 'x') {
      return true;
    } if (playerBoard[0] === 'x' && playerBoard[3] === 'x' && playerBoard[6] === 'x') {
      return true;
    } if (playerBoard[1] === 'x' && playerBoard[4] === 'x' && playerBoard[7] === 'x') {
      return true;
    } if (playerBoard[2] === 'x' && playerBoard[5] === 'x' && playerBoard[8] === 'x') {
      return true;
    } if (playerBoard[0] === 'x' && playerBoard[4] === 'x' && playerBoard[8] === 'x') {
      return true;
    } if (playerBoard[2] === 'x' && playerBoard[4] === 'x' && playerBoard[6] === 'x') {
      return true;
    }
    return false;
  };

  const endGame = (winner) => {
    board = ['', '', '', '', '', '', '', '', ''];
    playerOneBoard = [];
    playerTwoBoard = [];

    gameDivs.forEach(() => {
      // qq
    });

    console.log(`${winner.name} is winner`);
  };

  const clickBoard = () => {
    let lastPlayer = '';
    gameDivs.forEach((element) => {
      element.addEventListener('click', () => {
        const index = element.getAttribute('data-index');
        if (board[index] === '') {
          if (lastPlayer === '' || lastPlayer === newGame.playerTwo) {
            lastPlayer = newGame.playerOne;
            board[index] = 'x';
            playerOneBoard[index] = 'x';
            lastPlayer.addMark(element, lastPlayer);
            if (checkWinner(playerOneBoard)) {
              // endGame(lastPlayer);
            }
          } else {
            lastPlayer = newGame.playerTwo;
            board[index] = 'x';
            playerTwoBoard[index] = 'x';
            lastPlayer.addMark(element, lastPlayer);
            if (checkWinner(playerTwoBoard)) {
              endGame(lastPlayer);
            }
          }
        } else {
          console.log('Already taken');
        }
      });
    });
  };
  clickBoard();
})();
