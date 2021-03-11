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
      el.classList.add('green');
    } else {
      const markIcon = document.createElement('i');
      markIcon.className = lastPlayer.mark;
      el.appendChild(markIcon);
      el.classList.add('red');
    }
    console.log(lastPlayer.name);
  },
});

// Create new game module
const newGame = (() => {
  // DOM elements
  const newGameModal = document.querySelector('#new-game-modal');
  const startGameButton = document.querySelector('#start-game');
  const resetButton = document.querySelector('#reset');
  const playerTwoHeading = document.querySelector('.player-two-button h3');
  const playerTwoHeadingList = document.querySelectorAll('.player-two-list h3');
  const playerOneName = document.querySelector('#player-one-name');
  const playerTwoName = document.querySelector('#player-two-name');
  const playerOneAppearance = document.querySelectorAll('#player-one .appearance');
  const playerTwoAppearance = document.querySelectorAll('.player-two-human .appearance');
  const playerOneMark = document.querySelectorAll('#player-one .mark');
  const playerTwoMark = document.querySelectorAll('.player-two-human .mark');
  const playerTwoHuman = document.querySelector('.player-two-human');
  const playerTwoBot = document.querySelector('.player-two-bot');
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

  let newPlayerTwoName;
  let newPlayerOneAppearance;
  let newPlayerTwoAppearance;
  let newPlayerOneMark;
  let newPlayerTwoMark;

  const reset = (type) => {
    if (type === 'hard') {
      playerTwoHeading.textContent = 'Choose';
      playerTwoBot.style.display = 'none';
      playerTwoHuman.style.display = 'none';
    }
    playerOneName.value = '';
    playerTwoName.value = '';
    newPlayerTwoName = undefined;
    newPlayerOneAppearance = undefined;
    newPlayerTwoAppearance = undefined;
    newPlayerOneMark = undefined;
    newPlayerTwoMark = undefined;
    playerOneAppearance.forEach((element) => {
      element.classList.remove('selected');
    });
    playerTwoAppearance.forEach((element) => {
      element.classList.remove('selected');
    });
    playerOneMark.forEach((element) => {
      element.classList.remove('selected');
    });
    playerTwoMark.forEach((element) => {
      element.classList.remove('selected');
    });
    playerTwoErrorMode.style.display = 'none';
    playerOneErrorName.style.display = 'none';
    playerTwoErrorName.style.display = 'none';
    playerOneErrorAppearance.style.display = 'none';
    playerTwoErrorAppearance.style.display = 'none';
    playerOneErrorMark.style.display = 'none';
    playerTwoErrorMark.style.display = 'none';
  };

  // New game UI
  const createPlayersUi = () => {
    playerTwoHeadingList.forEach((item) => {
      item.addEventListener('click', () => {
        playerTwoHeading.textContent = item.textContent;
        reset();
        if (item.textContent === 'Bot') {
          newPlayerTwoName = 'Robot';
          newPlayerTwoAppearance = 'fas fa-robot';
          newPlayerTwoMark = 'fas fa-raygun fa-flip-horizontal';
          playerTwoHuman.style.display = 'none';
          playerTwoBot.style.display = 'flex';
        } else {
          playerTwoHuman.style.display = 'flex';
          playerTwoBot.style.display = 'none';
        }
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

    resetButton.addEventListener('click', () => {
      reset('hard');
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
    playerTwo.name = newPlayerTwoName || playerTwoName.value;
    playerTwo.appearance = newPlayerTwoAppearance;
    playerTwo.mark = newPlayerTwoMark;
    playerTwo.sayHello();
    // Player's sections setup
    playerOneSectionName.textContent = playerOne.name;
    playerTwoSectionName.textContent = playerTwo.name;
    const playerOneAppearanceIcon = document.createElement('i');
    playerOneAppearanceIcon.className = playerOne.appearance;
    playerOneSectionAppearance.textContent = '';
    playerOneSectionAppearance.appendChild(playerOneAppearanceIcon);
    const playerTwoAppearanceIcon = document.createElement('i');
    playerTwoAppearanceIcon.className = playerTwo.appearance;
    playerTwoSectionAppearance.textContent = '';
    playerTwoSectionAppearance.appendChild(playerTwoAppearanceIcon);
    const playerOneMarkIcon = document.createElement('i');
    playerOneMarkIcon.className = playerOne.mark;
    playerOneSectionMark.textContent = '';
    playerOneSectionMark.appendChild(playerOneMarkIcon);
    const playerTwoMarkIcon = document.createElement('i');
    playerTwoMarkIcon.className = playerTwo.mark;
    playerTwoSectionMark.textContent = '';
    playerTwoSectionMark.appendChild(playerTwoMarkIcon);
  };

  const validation = () => {
    startGameButton.addEventListener('click', () => {
      if (playerTwoHeading.textContent !== 'Choose'
      && playerOneName.value !== ''
      && newPlayerOneAppearance !== undefined
      && newPlayerTwoAppearance !== undefined
      && newPlayerOneMark !== undefined
      && newPlayerTwoMark !== undefined) {
        if (playerTwoName.value !== '' || newPlayerTwoName !== undefined) {
          setupGame();
          newGameModal.style.display = 'none';
        }
      }
      // Mode error
      if (playerTwoHeading.textContent === 'Choose') {
        playerTwoErrorMode.textContent = 'CHOOSE PLAYER MODE';
        playerTwoErrorMode.style.display = 'block';
      } else {
        playerTwoErrorMode.textContent = '';
        playerTwoErrorMode.style.display = 'none';
      }
      if (playerTwoHeading.textContent !== 'Choose') {
        // Name errors
        if (playerOneName.value === '') {
          playerOneErrorName.textContent = 'FILL YOUR NAME';
          playerOneErrorName.style.display = 'block';
        } else {
          playerOneErrorName.textContent = '';
          playerOneErrorName.style.display = 'none';
        }
        if (playerTwoHeading.textContent === 'Human') {
          if (playerTwoName.value === '') {
            playerTwoErrorName.textContent = 'FILL YOUR NAME';
            playerTwoErrorName.style.display = 'block';
          } else {
            playerTwoErrorName.textContent = '';
            playerTwoErrorName.style.display = 'none';
          }
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
      }
    });
  };
  validation();

  return {
    playerOne,
    playerTwo,
    newGameModal,
  };
})();

// Game board module
const gameBoard = (() => {
  const gameContainer = document.querySelector('#game-container');
  const restartRoundButton = document.querySelector('#restart');
  const newGameButton = document.querySelector('#new-game');

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
      return 'win';
    } if (playerBoard[3] === 'x' && playerBoard[4] === 'x' && playerBoard[5] === 'x') {
      return 'win';
    } if (playerBoard[6] === 'x' && playerBoard[7] === 'x' && playerBoard[8] === 'x') {
      return 'win';
    } if (playerBoard[0] === 'x' && playerBoard[3] === 'x' && playerBoard[6] === 'x') {
      return 'win';
    } if (playerBoard[1] === 'x' && playerBoard[4] === 'x' && playerBoard[7] === 'x') {
      return 'win';
    } if (playerBoard[2] === 'x' && playerBoard[5] === 'x' && playerBoard[8] === 'x') {
      return 'win';
    } if (playerBoard[0] === 'x' && playerBoard[4] === 'x' && playerBoard[8] === 'x') {
      return 'win';
    } if (playerBoard[2] === 'x' && playerBoard[4] === 'x' && playerBoard[6] === 'x') {
      return 'win';
    } if (board.toString() === ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'].toString()) {
      return 'tie';
    }
    return false;
  };

  const endGame = (winner) => {
    const playerOneCondition = document.querySelector('.player-one-section .player-condition');
    const playerTwoCondition = document.querySelector('.player-two-section .player-condition');

    board = ['', '', '', '', '', '', '', '', ''];
    playerOneBoard = [];
    playerTwoBoard = [];

    gameDivs.forEach((element) => {
      element.textContent = '';
      element.classList.remove('red', 'green');
    });

    if (winner === newGame.playerOne) {
      playerOneCondition.classList.remove('loser', 'tie');
      playerTwoCondition.classList.remove('winner', 'tie');
      playerOneCondition.classList.add('winner');
      playerTwoCondition.classList.add('loser');
      playerOneCondition.textContent = 'WINNER';
      playerTwoCondition.textContent = 'LOSER';
    } else if (winner === newGame.playerTwo) {
      playerOneCondition.classList.remove('winner', 'tie');
      playerTwoCondition.classList.remove('loser', 'tie');
      playerOneCondition.classList.add('loser');
      playerTwoCondition.classList.add('winner');
      playerOneCondition.textContent = 'LOSER';
      playerTwoCondition.textContent = 'WINNER';
    } else if (winner === 'tie') {
      playerOneCondition.classList.remove('winner', 'loser');
      playerTwoCondition.classList.remove('loser', 'winner');
      playerOneCondition.classList.add('tie');
      playerTwoCondition.classList.add('tie');
      playerOneCondition.textContent = 'TIE';
      playerTwoCondition.textContent = 'TIE';
    } else {
      playerOneCondition.classList.remove('winner', 'loser', 'tie');
      playerTwoCondition.classList.remove('winner', 'loser', 'tie');
      playerOneCondition.textContent = '';
      playerTwoCondition.textContent = '';
    }
  };

  const controls = () => {
    restartRoundButton.addEventListener('click', () => {
      endGame();
    });

    newGameButton.addEventListener('click', () => {
      endGame();
      newGame.newGameModal.style.display = 'block';
    });
  };
  controls();

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
            if (checkWinner(playerOneBoard) === 'win') {
              endGame(lastPlayer);
              lastPlayer = newGame.playerTwo;
            } if (checkWinner(playerTwoBoard) === 'tie') {
              endGame('tie');
              lastPlayer = newGame.playerTwo;
            }
          } else if (newGame.playerTwo.mode === 'Human') {
            lastPlayer = newGame.playerTwo;
            board[index] = 'x';
            playerTwoBoard[index] = 'x';
            lastPlayer.addMark(element, lastPlayer);
            if (checkWinner(playerTwoBoard) === 'win') {
              endGame(lastPlayer);
            } if (checkWinner(playerTwoBoard) === 'tie') {
              endGame('tie');
            }
          }
        } else {
          console.log('Already taken');
        }
        if (newGame.playerTwo.mode === 'Bot' && lastPlayer === newGame.playerOne) {
          let i = 0;
          while (i < 1) {
            const randomIndex = Math.floor(Math.random() * board.length);
            if (board[randomIndex] === '') {
              lastPlayer = newGame.playerTwo;
              board[randomIndex] = 'x';
              playerTwoBoard[randomIndex] = 'x';
              lastPlayer.addMark(gameDivs[randomIndex], lastPlayer);
              if (checkWinner(playerTwoBoard)) {
                if (checkWinner(playerTwoBoard) === 'tie') {
                  endGame('tie');
                } else {
                  endGame(lastPlayer);
                }
              }
              i += 1;
            }
          }
        }
      });
    });
  };
  clickBoard();
})();
