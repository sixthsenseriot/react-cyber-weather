import React from "react";

export default function FormattedDate(props) {
  var ampm = props.date.getHours() >= 12 ? " PM" : " AM";
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  hours = ((hours + 11) % 12) + 1;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      <strong>{day}</strong> {hours}:{minutes} {ampm}
    </span>
  );
}
