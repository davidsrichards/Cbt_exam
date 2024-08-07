import { useState } from "react";
import GlobalInitial from "../../GLOBAL/GlobalInitial/GlobalInitial";

function Cmp223Initial() {
  const BASE_URL = "/api/user/cmp223";
  const [length, setLength] = useState();

  return (
    <>
      <GlobalInitial
        to={"/google/login/success/cmp223"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Cmp223Initial;
