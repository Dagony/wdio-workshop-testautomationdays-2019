// 1a: create todoPage class and export an instance of it
// login.page.js
const TodoComponent = require('../components/todo.component');
import Page from './page';

class TodoPage extends Page {

    constructor(props) {
        super(props);
        this.Todo = TodoComponent;
    }

    get newTodo() { return $('.new-todo'); }
    get todoItems() { return $$('ul.todo-list li')}
    get editInput() { return $$('input.edit')}


    open() {
        super.open('login');
    }

    addTodo() {
        browser.keys('Enter');
    }

    editTodo(elem, str) {
        elem.self.doubleClick();

        elem.editInput.waitForDisplayed();
        browser.execute(i => i.select(), elem.editInput);
        elem.editInput.addValue(str);
        browser.keys('Enter');
    }

}

module.exports = new TodoPage();
