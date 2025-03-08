import SectionWrapper from "./SectionWrapper";
import ViewCard from "./ViewCard";

const Workout = (Props) => {
  const { workout } = Props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to your workout plan"}
      title={["Stronger", "Today, ", "Sore", "Tomorrow"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ViewCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
