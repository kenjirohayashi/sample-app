import React from "react";

interface Props {
  onClick: VoidFunction;
}

// eslint-disable-next-line react/display-name
const Button: React.FC<Props> = React.memo((props: Props) => {
  console.log("render:Button!!");
  return <button onClick={props.onClick}>countUp childe</button>;
});

export default Button;
