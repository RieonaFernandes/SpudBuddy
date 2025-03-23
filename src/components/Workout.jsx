import SectionWrapper from "./SectionWrapper";
import ViewCard from "./ViewCard";
import AnimatedGif from "./AnimatedGif";
import hardwork from "../assets/images/hardWorkingPotato.gif";
import mascot from "../assets/images/SpudBuddyMascotGif.gif";

const Workout = (Props) => {
  const { workout } = Props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Your workout plan"}
      title={["Bake Those", "Muscles, ", "Fry Your Limits!"]}
      logo="false"
    >
      {/* <AnimatedGif
        src={mascot}
        alt={"Mascot"}
        id={"support"}
        // header={"We’re about to sauté those muscles into shape"}
        // title={["Get ready to", "peel ", "the burn!"]}
      /> */}
      <div className="flex justify-center text-center p-4 max-w-[200px] mx-auto">
        <img src={mascot} alt={"Mascot"}></img>
      </div>

      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ViewCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
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
