import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Slider() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={4000}
      media={[
        {
          source: "1.webp",
        },
        {
          source: "2.webp",
        },
        {
          source: "3.webp",
        },
      ]}
    />
  );
}
