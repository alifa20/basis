import React from "react";
import { BasisProvider, defaultTheme, Text } from "./component-lib";
import "typeface-montserrat";
import "typeface-roboto";

function App() {
  return (
    <BasisProvider theme={defaultTheme}>
      <Text>Hello World</Text>
    </BasisProvider>
  );
}

export default App;
