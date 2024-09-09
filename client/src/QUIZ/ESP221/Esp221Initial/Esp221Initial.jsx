import { useState } from "react";
import GlobalInitial from "../../GLOBAL/GlobalInitial/GlobalInitial";

function Esp221Initial() {
  const BASE_URL = "/api/user/esp221";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/esp221"}
        reviews={"/google/login/success/esp221-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Esp221Initial;
