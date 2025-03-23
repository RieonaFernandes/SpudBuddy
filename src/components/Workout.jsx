import SectionWrapper from "./SectionWrapper";
import ViewCard from "./ViewCard";
import AnimatedGif from "./AnimatedGif";
import hardwork from "../assets/images/hardWorkingPotato.gif";

const Workout = (Props) => {
  const { workout } = Props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Your workout plan"}
      title={["Bake Those", "Muscles, ", "Fry Your Limits!"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ViewCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
      <AnimatedGif
        src={hardwork}
        alt={"Mascot"}
        id={"encourage"}
        header={""}
        title={["Let's Tater On ", "Together!", ""]}
      />
    </SectionWrapper>
  );
};

export default Workout;
