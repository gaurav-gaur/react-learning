import './App.css';

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
    <div className="shopping-list">
      <h1>My Shopping List</h1>
    </div>
    </>
  );
}
