import { useState } from "react";
import GlobalInitial from "../../GLOBAL/GlobalInitial/GlobalInitial";

function Cmp225Initial() {
  const BASE_URL = "/api/user/cmp225";
  const [length, setLength] = useState();

  return (
    <>
      <GlobalInitial
        to={"/google/login/success/cmp225"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Cmp225Initial;
