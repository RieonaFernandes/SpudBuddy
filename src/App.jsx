import Generator from "./components/Generator";
import First from "./components/First";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/generateWorkout";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [objective, setObjective] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, objective });
    console.log(newWorkout);
    setWorkout(newWorkout);

    window.location.href = "#workout";
  }

  return (
    // min-h-screen: Sets the minimum height of the element to the full height of the screen.
    // flex flex-col: Applied Flexbox layout to the container, allowing for flexible positioning and sizing of child elements. Sets the flex direction to "column" meaning child elements will be stacked vertically (top to bottom).
    // bg-gradient-to-r: Added a background gradient that goes to the right
    // from-blue-950 to-slate-950: set the gradient from medium gray to deep gray.
    // text-white text-sm sm:text-base: Set the text to white, set to small size and make it responsive according to screen size
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <First />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        objective={objective}
        setObjective={setObjective}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
