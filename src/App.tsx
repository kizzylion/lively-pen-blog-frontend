import "./App.css";
import { Button } from "./components/ui/ButtonCVA";

function App() {
  return (
    <>
      <div className="bg-brand-primary">
        <h1 className="text-3xl text-primary font-bold underline">
          Hello World, I'm a blog
        </h1>
        <h3 className="text-secondary mt-2">
          Thoughtful articles on design, development, and the digital landscape.
        </h3>
        <Button>Learn more</Button>
      </div>
    </>
  );
}

export default App;
