function MyHeading() {
  return <h1>Welcome to my app</h1>
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

export default function MyApp() {
  return (
    <div>
      <MyHeading />
      <h2>My First React Page</h2>
      <p>I am learning JSX</p>
      <button>Click Me</button>
      <MyButton />
      <AboutPage />
    </div>
  );
}
