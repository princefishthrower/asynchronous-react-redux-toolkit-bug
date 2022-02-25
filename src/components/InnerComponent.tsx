import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMyCoolBoolean } from "../redux/slices/exampleSlice";
import AnotherComponent from "./AnotherComponent";

export default function InnerComponent() {
  const dispatch = useAppDispatch();

  const fetchSomeData = async () => {
    // just an example call with actual values - the classic star wars API
    await fetch("https://swapi.dev/api/people");
    dispatch(setMyCoolBoolean(true));
  };

  // on mount, set the boolean value
  useEffect(() => {
    fetchSomeData();
  }, []);

  return <AnotherComponent />;
}
