import React from "react";

import "./EventItem.css";

const eventItem = props => (
  <li className="events__list-item" key={props.eventId}>
    <div>
      <h1>{props.title}</h1>
      <h2>$12.99</h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (
        <p>Your the owner of this event.</p>
      ) : (
        <button className="btn">View Details</button>
      )}
    </div>
  </li>
);

export default eventItem;
