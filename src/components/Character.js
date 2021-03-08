// Write your Character component here
import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Stats from "./Stats";

function Character(props) {
  const { data, bounty } = props;
  const [fadeIn, setFadeIn] = useState(false);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <Card>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardSubtitle>{bounty} credits</CardSubtitle>
        <CardText>
          <Stats data={data} fadeIn={fadeIn} />
          <Button color="danger" onClick={toggle}>
            Bounty Information
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Character;
