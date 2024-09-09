import { useState } from "react";
import GlobalInitial from "../../GLOBAL/GlobalInitial/GlobalInitial";

function Cmp224Initial() {
  const BASE_URL = "/api/user/cmp224";
  const [length, setLength] = useState();

  return (
    <>
      <GlobalInitial
        to={"/google/login/success/cmp224"}
        reviews={"/google/login/success/cmp224-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Cmp224Initial;
