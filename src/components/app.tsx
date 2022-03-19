import * as React from "react";
import Counter from "./Counter";

const App: React.FC = () => {
  return (
    <>
      <p style={{ fontWeight: "bold" }}>コンソールでmemo化を確認できます。</p>
      <Counter />
    </>
  );
};

export default App;
