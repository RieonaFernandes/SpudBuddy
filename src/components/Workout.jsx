import SectionWrapper from "./SectionWrapper";
import ViewCard from "./ViewCard";
import AnimatedGif from "./AnimatedGif";
import hardwork from "../assets/images/hardWorkingPotato.gif";
import mascot from "../assets/images/SpudBuddyMascotGif.gif";
import { useState, useCallback, useEffect } from "react";
import overlayImage from "../assets/images/Success.gif";
import Button from "./Button";

const Workout = (Props) => {
  let { workout } = Props;
  const [completedExercises, setCompletedExercises] = useState(
    Array(5).fill(false)
  );
  const [showGlobalOverlay, setShowGlobalOverlay] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);

  const handleExerciseComplete = useCallback((index, isCompleted) => {
    setCompletedExercises((prev) => {
      const newState = [...prev];
      newState[index] = isCompleted;
      return newState;
    });
  }, []);

  const handleResetAll = useCallback(() => {
    setResetCounter((prev) => prev + 1);
    setCompletedExercises(Array(workout.length).fill(false));
    setShowGlobalOverlay(false);
  }, [workout.length]);

  useEffect(() => {
    setCompletedExercises(Array(workout.length).fill(false));
    setShowGlobalOverlay(false);
  }, [workout]);

  useEffect(() => {
    const allCompleted = completedExercises.every(Boolean);
    if (allCompleted) {
      setShowGlobalOverlay(true);
    }
  }, [completedExercises]);

  return (
    <SectionWrapper
      id={"workout"}
      header={"Your workout plan"}
      title={["Bake Those", "Muscles, ", "Fry Your Limits!"]}
      logo="false"
    >
      <div className="flex justify-center text-center p-4 max-w-[200px] mx-auto">
        <img src={mascot} alt={"Mascot"}></img>
      </div>

      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return (
            <ViewCard
              key={`${exercise.name}-${i}`}
              i={i}
              exercise={exercise}
              onComplete={handleExerciseComplete}
              count={workout.length}
              resetCounter={resetCounter}
            />
          );
        })}
      </div>

      {/* Celebration when you finish sets */}
      {showGlobalOverlay && (
        <div className="fixed inset-0 bg-slate-950/30 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="relative max-w-4xl w-full flex justify-center">
            <button
              onClick={() => setShowGlobalOverlay(false)}
              className="absolute -top-8 -right-8 text-slate-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={overlayImage}
              alt="Workout complete"
              className="max-h-[50vh] w-auto object-contain"
            />
          </div>
        </div>
      )}

      <Button func={handleResetAll}>Reset</Button>

      <AnimatedGif
        src={hardwork}
        alt={"Mascot"}
        id={"gif"}
        header={"peel the burn!"}
        title={["Let's Tater On ", "Together!", ""]}
      />
    </SectionWrapper>
  );
};

export default Workout;
