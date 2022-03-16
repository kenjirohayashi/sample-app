import React, { useCallback, useEffect, useState } from "react";

interface Props {
  onClick: VoidFunction;
}

// eslint-disable-next-line react/display-name
const UnMemoButton = (props: Props) => {
  console.log("render umMemoComponent!!");
  return <button onClick={props.onClick}>countUp 1</button>;
};

// eslint-disable-next-line react/display-name
const MemoButton = React.memo((props: Props) => {
  console.log("render memoComponent!!");
  return <button onClick={props.onClick}>countUp 2</button>;
});

const Counter = () => {
  useEffect(() => {
    console.log(
      "メモ化されたコンポーネントは自身のpropsに変化がある時のみレンダリングされます"
    );
  }, []);
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const countUp1 = () => {
    setCount1(count1 + 1);
  };

  const countUp2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <>
      <p>
        メモ化されていない：
        <UnMemoButton onClick={countUp1} />
      </p>
      <p>
        メモ化されている：
        <MemoButton onClick={countUp2} />
      </p>
      <p>count1: {count1}</p>
      <p>count2: {count2}</p>
    </>
  );
};

export default Counter;
