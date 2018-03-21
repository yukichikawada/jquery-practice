class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;

    this.setupBoard();
  }

  bindEvents() {

  }

  makeMove() {

  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("base");

    for (let tower = 0; tower < 3; tower++) {
      const $li = $("<li>");
      $li.data("place", tower);

      $ul.append($li);
    }

    this.el.append($ul);
  }
}

module.exports = View;
