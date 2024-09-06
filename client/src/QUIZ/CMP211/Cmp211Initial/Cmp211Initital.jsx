import { useState } from "react";
import GlobalInitial from "../../GLOBAL/GlobalInitial/GlobalInitial";

function Cmp211Initial() {
  const BASE_URL = "/api/user/cmp211";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/cmp211"}
        reviews={"/google/login/success/cmp211-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Cmp211Initial;
