import React from "react";
import { render } from "@testing-library/react";
import App from "../../src/App";
import { act } from "react-test-renderer";
import "whatwg-fetch";

test("On mount, boolean value changes, causing our new span to show up", async () => {
  const { getByTestId, rerender } = render(<App />);
  await act(async () => {
    expect(getByTestId("ORIGINAL")).toBeTruthy();

    // No matter how many times you call rerender here,
    // you'll NEVER see the "NEW" test id (and thus corresponding <span> element) appear in the document
    // despite this being the case in any standard browser
    await rerender(<App />);
    // await rerender(<App />);
    // await rerender(<App />);
    // await rerender(<App />);

    // If you comment this line below out, the test passes fine.
    // test ID "ORIGINAL" is found, but "NEW" is never found!!!!
    expect(getByTestId("NEW")).toBeTruthy();
  });
});
