import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const animals = ["Cat", "Dog", "Elephant", "Giraffe"];
console.log(animals[0])

createRoot(document.getElementById("root")).render(<App />);
