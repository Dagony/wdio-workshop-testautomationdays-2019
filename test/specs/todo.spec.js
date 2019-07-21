const assert = require('assert');

// #1b: import the page object class instance
const todoPage = require('../pages/todo.page');
const firstTodo = new todoPage.Todo('first todo');
const secondTodo = new todoPage.Todo('second todo');
/*const thirdTodo = new todoPage.Todo('third todo');
const fourthTodo = new todoPage.Todo('fourth todo');
const editedTodo = new todoPage.Todo('edited todo');*/

describe('todo app', () => {
  before(() => {
    // #2: add navigation to 'http://todomvc.com/examples/vanillajs/'
    browser.url('/examples/vanillajs/');

  });
  beforeEach(() => {
    // #3: use the `execute` command to clear the localStorage and then refresh the page
    browser.execute(() => { localStorage.clear() });
    browser.refresh();
  });

  it.skip('Go Fail!', () => {
    assert.deepStrictEqual(1, 2);
  });

  // #4:
  it('create todo', () => {
    // create todo item
    todoPage.addTodo('first todo');

    // assert 1 item in list
    assert.deepStrictEqual(todoPage.todoItems.length, 1);

    // assert list contains the input item
    firstTodo.self.waitForExist();
  });

  // #5:
  it('edit todo', () => {
    // create a todo item
    todoPage.addTodo('first todo');

    let str = 'Edited text';
    // edit the created todo item

    todoPage.editTodo(firstTodo, str);

    // assert changed item in text in todo item
    assert.deepStrictEqual(todoPage.todoItems[0].getText(), str);
  });

  // #6:
  it('delete todo', () => {
    // create 2 todo items
    todoPage.addTodo('first todo');
    todoPage.addTodo('second todo');
    assert.deepStrictEqual(todoPage.todoItems.length, 2);

    // delete first todo item
    todoPage.deleteTodo(firstTodo);

    // assert 1 item in todo list
    assert.deepStrictEqual(todoPage.todoItems.length, 1);

    // assert todo text equals second input todo item
    assert.deepStrictEqual(todoPage.todoItems[0].getText(), 'second todo')
  });

  // #7:
  it('complete one todo', () => {
    // create 2 todo items
    todoPage.addTodo('first todo');
    todoPage.addTodo('second todo');
    assert.deepStrictEqual(todoPage.todoItems.length, 2);

    // complete first todo item
    firstTodo.completeInput.click();

    // assert first todo item has class completed
    assert.deepStrictEqual(firstTodo.isCompleted(), true);
  });

  // #8:
  it('show active/completed todos', () => {
    // create 2 todo items
    todoPage.addTodo('first todo');
    todoPage.addTodo('second todo');
    assert.deepStrictEqual(todoPage.todoItems.length, 2);

    // complete first todo item
    firstTodo.completeInput.click();

    // when click on show active
    todoPage.filter.active.click();

    // assert todo text equals second input todo item
    secondTodo.self.waitForExist();

    // when click on show completed
    todoPage.filter.completed.click();

    // assert todo text equals first input todo item
    firstTodo.self.waitForExist();
  });

  // #9:
  it.skip('complete all todos', () => {
    // create 4 todo items

    // complete all todo items

    // assert 4 todo items completed
  });

  // #10:
  it.skip('delete all completed todos', () => {
    // create 4 todo items

    // complete all todo items

    // delete all completed items

    // assert 0 todo items in todo list
  });

  // #11:
  it.skip('add custom command to the Browser object', () => {
    // add a custom command to the Browser object

    // use the command
  });

  // #12:
  it.skip('add custom command to the Element object', () => {
    // add a custom command to the Element object

    // use the command
  });
});
