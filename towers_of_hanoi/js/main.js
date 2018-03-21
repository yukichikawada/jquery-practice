const HanoiGame = require("./game.js");
const View = require("./view.js");

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new View(game, rootEl);
});
