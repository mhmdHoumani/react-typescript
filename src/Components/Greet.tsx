import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number; // The ? means that the message count is not required
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; //Since the message count is not required here will take 0 as a default value
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
