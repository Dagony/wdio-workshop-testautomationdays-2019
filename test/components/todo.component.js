module.exports = class TodoComponent {
  constructor(selector) {
    this.selector = selector;
  }

  get self() {
    return $(`li=${this.selector}`);
  }

  get completeInput() {
    return this.self.$(`input.toggle`);
  }

  get editInput() {
    return this.self.$(`input.edit`);
  }

  get deleteButton() {
    return this.self.$(`button.destroy`);
  }

  isCompleted() {
    return this.self
      .getAttribute('class')
      .includes('completed');
  }
};
