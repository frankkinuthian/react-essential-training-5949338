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
  { id: 1, name: "Grilled Chicken with Rice", price: 12.99 },
  { id: 2, name: "Salmon with Potatoes", price: 15.99 },
  { id: 3, name: "Tofu with Vegetables", price: 10.99 },
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
