import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-600 p-3 rounded-md">
        Vite with tailwind
      </h1>
      <Card username="jan"></Card>
      <Card post="senior developer"></Card>
      <Card></Card>
    </>
  );
}

export default App;
