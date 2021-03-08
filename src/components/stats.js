import React from "react";
import { Fade } from "reactstrap";

function Stats(props) {
  const { data, fadeIn } = props;
  return (
    <Fade in={fadeIn} tag="h5">
      {data.name} is {data.height}cm and has {data.mass}kg of mass. <br />
      Approach with Caution.
      <br />
      They are considered to be armed <br />
    </Fade>
  );
}

export default Stats;
