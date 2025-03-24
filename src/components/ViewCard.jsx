import React, { useState, useEffect } from "react";

const ViewCard = (Props) => {
  const { i, exercise, onComplete, resetCounter } = Props;

  const [setsCompleted, setSetsComplete] = useState(0);

  useEffect(() => {
    const isCompleted = setsCompleted === 5;
    onComplete(i, isCompleted);
  }, [setsCompleted, i, onComplete]);

  useEffect(() => {
    setSetsComplete(0);
  }, [exercise]);

  useEffect(() => {
    setSetsComplete(0);
  }, [resetCounter, exercise]);

  //update the "sets done" counter from 1 to 5
  const handleSetIncrement = () => {
    setSetsComplete((prev) => Math.min(prev + 1, 5)); // Cap at 5
  };

  const handleResetButton = () => {
    setSetsComplete((prev) => 0);
  };

  return (
    <section id={i} className="flex flex-col gap-6 relative">
      <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
        <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
          <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
            0{i + 1}
          </h4>
          <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center">
            {exercise.name.replaceAll("_", " ")}
          </h2>
          <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
          <p className="capitalize">{exercise.muscles.join(" & ")}</p>
        </div>

        <div className="flex flex-col bg-slate-950 rounded-md gap-2 text-center items-center text-xs p-2 border-[1.5px] border-solid border-slate-900 w-full px-5 py-3 italic font-extralight">
          {exercise.description.split("___").map((val) => {
            return <div className="text-sm">{val}</div>;
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
          {["reps", "rest", "tempo"].map((info) => {
            return (
              <div
                key={info}
                className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
              >
                <h3 className="capitalize text-slate-400 text-sm">
                  {info === "reps" ? `${exercise.unit}` : info}
                </h3>

                <p className="font-medium">{exercise[info]}</p>
              </div>
            );
          })}
          <button
            onClick={handleSetIncrement}
            className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-orange-700 w-full duration-200"
          >
            <h3 className="text-slate-400 text-sm capitalize">
              Sets completed
            </h3>
            <p className="font-medium">{setsCompleted} / 5</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ViewCard;
