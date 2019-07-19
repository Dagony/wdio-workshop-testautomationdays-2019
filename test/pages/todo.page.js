// 1a: create todoPage class and export an instance of it
// login.page.js
import Page from './page';

class TodoPage extends Page {

    get newTodo() { return $('.new-todo'); }
    get todoItems() { return $$('ul.todo-list li')}

    open() {
        super.open('login');
    }

    addTodo() {
        browser.keys('Enter');
    }

}

export default new TodoPage();
