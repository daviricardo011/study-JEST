import './App.css';
import Todo from './components/todo'
import Counter from './components/counter'

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ]

  return (
    <div className="App">
      <div className="Counter">
        <Counter />
      </div>
      <div className="Todo">
        {
          todos.map((todo) => {
            return (<Todo todo={todo} />)
          })
        }
      </div>
    </div>
  );
}

export default App;
