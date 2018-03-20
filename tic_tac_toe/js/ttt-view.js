
class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  }

  bindEvents() {
    
  }

  makeMove($square) {

  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("board");

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $li = $("<li>");
        $li.data("pos", [row, col]);

        $ul.append($li);
      }
    }

    this.el.append($ul);
  }
}

module.exports = View;
