// Players factory
const createPlayers = (defaultName, appearance, mark) => {
  let name = defaultName;
  const sayHello = () => console.log(`Hello! I'm ${appearance} ${name} with ${mark}`);
  const setName = (newName) => {
    name = newName;
  };
  return {
    name,
    appearance,
    mark,
    sayHello,
    setName,
  };
};

const createGame = (() => {
  const newGameModal = document.querySelector('#new-game-modal');
  const startGameButton = document.querySelector('#start-game');

  const playerOne = createPlayers('Player One', 'default', 'default');
  const playerTwo = createPlayers('Player Two', 'default', 'default');

  startGameButton.addEventListener('click', () => {
    playerOne.setName('Artis');
    playerTwo.setName('moonii');
    playerOne.sayHello();
    playerTwo.sayHello();
    newGameModal.style.display = 'none';
  });

  return {
    playerOne,
    playerTwo,
  };
})();
