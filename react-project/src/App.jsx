import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  { id: 1, name: "Mac and Cheese", price: 1.2 },
  { id: 2, name: "Salmon with potatoes", price: 0.5 },
  { id: 3, name: "Tofu with vegetables", price: 2.0 },
];

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>
          {dish.name} - ${dish.price.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={items} />
    </div>
  );
}

export default App;
