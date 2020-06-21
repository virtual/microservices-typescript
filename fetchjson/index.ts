import axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/todos/1';

// What kind of object will response.data return?
// Defines Todo type
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// axios returns a promise, so we can chain then
// to listen for the promise return
axios.get(url).then((response) => {
  const todo = response.data as Todo;

  // Once you add `as Todo` it will reference the Interface (above)
  // and it will identify potential errors
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // Move this into logTodo function to clean it up
  // Describe type of argument in logTodo using TS
  logTodo(id, title, completed);
  // console.log(`
  //   The todo with the ID: ${id}
  //   Has a title of: ${title}
  //   Is it completed? ${completed}
  // `);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with the ID: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
  `);
};
