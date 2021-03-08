// Players factory
const createPlayers = (name, appearance, mark) => ({
  name,
  appearance,
  mark,
  sayHello() {
    return console.log(`Hello! I'm ${this.appearance} my name is ${this.name} I have ${this.mark}`);
  },
});

// Create new game module
const newGame = (() => {
  const newGameModal = document.querySelector('#new-game-modal');
  const startGameButton = document.querySelector('#start-game');
  // const resetButton = document.querySelector('#reset');
  // const playerOneHeading = document.querySelector('.player-one-heading h3');
  // const playerTwoHeading = document.querySelector('.player-two-button h3');
  const playerOneName = document.querySelector('#player-one-name');
  const playerTwoName = document.querySelector('#player-two-name');
  const playerOneAppearance = document.querySelectorAll('#player-one .appearance');
  const playerTwoAppearance = document.querySelectorAll('#player-two .appearance');
  const playerOneMark = document.querySelectorAll('#player-one .mark');
  const playerTwoMark = document.querySelectorAll('#player-two .mark');

  const playerOne = createPlayers('Player One', 'default', 'default');
  const playerTwo = createPlayers('Player Two', 'default', 'default');

  let newPlayerOneAppearance;
  let newPlayerTwoAppearance;
  let newPlayerOneMark;
  let newPlayerTwoMark;

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

  startGameButton.addEventListener('click', () => {
    if (playerOneName.value !== '' && playerTwoName.value !== '' && newPlayerOneAppearance !== undefined && newPlayerTwoAppearance !== undefined && newPlayerOneMark !== undefined && newPlayerTwoMark !== undefined) {
      playerOne.name = playerOneName.value;
      playerTwo.name = playerTwoName.value;
      playerOne.appearance = newPlayerOneAppearance;
      playerTwo.appearance = newPlayerTwoAppearance;
      playerOne.mark = newPlayerOneMark;
      playerTwo.mark = newPlayerTwoMark;
      playerOne.sayHello();
      playerTwo.sayHello();
      newGameModal.style.display = 'none';
    }
    if (playerOneName.value === '') {
      // throw error
    } else {
      // remove error
    }
    if (playerTwoName.value === '') {
      // throw error
    } else {
      // remove error
    }
  });

  return {
    playerOne,
    playerTwo,
  };
})();
