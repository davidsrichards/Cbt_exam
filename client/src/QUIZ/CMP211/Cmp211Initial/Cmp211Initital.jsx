import { useState } from "react";
import GlobalInitial from "../../GLOBAL/GlobalInitial/GlobalInitial";

function Cmp211Initial() {
  const BASE_URL = "/api/user/cmp221";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/cmp221"}
        reviews={"/google/login/success/cmp221-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Cmp211Initial;
