import React from "react";
import { render } from "@testing-library/react-native";

import TextInput from ".";

test("does component render", () => {
  const tree = render(<TextInput />);
  tree;
});
