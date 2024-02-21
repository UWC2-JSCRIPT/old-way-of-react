import { useEffect, useState } from "react";
import useIsOnline from "./useIsOnline";

export function Lifecycle() {
  const [thing, setThing] = useState(false);
  const [name, setName] = useState("");
  const { isOnline, data } = useIsOnline();

  console.log(data);

  useEffect(() => {
    console.log("Use Effect!!");
  }, [thing, name]);

  return (
    <div>
      <h2> Lifecycle</h2>
      <h3>{thing ? "TRUE" : "FALSE"}</h3>
      <h3>{isOnline ? "Is Online!" : "Away"}</h3>
      <button onClick={() => setThing(!thing)}>Click me!!</button>
    </div>
  );
}
