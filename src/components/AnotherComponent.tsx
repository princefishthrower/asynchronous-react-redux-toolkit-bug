import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/useAppSelector";

export default function AnotherComponent() {
  const { myCoolBoolean } = useAppSelector((state) => state.example);

  const [localBoolean, setLocalBoolean] = useState(false);

  // on mount, set some values
  // somewhat a dumb example but it illustrates
  // the failure of react-testing-library
  useEffect(() => {
    // only do something in this component
    // if myCoolBoolean changes to true
    if (myCoolBoolean) {
      console.log("SET TO TRUE!");
      setLocalBoolean(myCoolBoolean);
    }
  }, [myCoolBoolean]);

  if (localBoolean) {
    return <span data-testid="NEW">I'm new</span>;
  }
  return <span data-testid="ORIGINAL">I'm original</span>;
}
