import './App.css';
import { useState } from 'react';

function MyHeading() {
  return <h1>Welcome to my app</h1>
}

function MyBody() {
  return (
    <>
      <h2>Welcome to React</h2>
      <p>I am learning JSX</p>
      <p>My favorite programming language is C++</p>
    </>
  );
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

const store = {
  name: "My Grocery Store",
  isOpen: open
};

const products = [
  { id: 1, name: 'Apple'},
  { id: 2, name: 'Milk' },
  { id: 3, name: 'Bread'},
  { id: 4, name: 'Banana'}
];

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count+1)}>
      Items purchased: {count}
    </button>
  );
}

export default function App() {
  
  return (
    <>
    <div>
      <MyHeading />
      <MyBody />
      <button>Click Me</button>
      <MyButton />
      <button>Learn More</button>
      <AboutPage />
    </div>
    <h1>{store.name}</h1>
    <p>{store.isOpen ? 'Store Open' : 'Store Closed'}</p>
    <div className="shopping-list">
      <h1>My Shopping List</h1>
    </div>
    <ul>{products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}</ul>
      <Counter />
      <Counter />
      <button onClick={() => alert('Shopping list saved!')}>
        Save List
      </button>
    </>
  );
}
