import { Fragment } from "react";
import Image from "next/image";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        alt={props.title}
        layout="responsive"
        width="100%"
        height="60%"
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section >
  );
};

export default MeetupDetail;