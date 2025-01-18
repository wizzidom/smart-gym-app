import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
export default function App() {
  return (
    <div>
      <h1 className="text-green-300">Gym App</h1>
      <Hero />
      <Generator />
      <Workout />
    </div>
  );
}
