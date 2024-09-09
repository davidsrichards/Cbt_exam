import { useState } from "react";
import GlobalInitial from "../../../GLOBAL/GlobalInitial/GlobalInitial";

function Gst121Initial() {
  const BASE_URL = "/api/user/gst121";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/gst121"}
        reviews={"/google/login/success/gst121-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Gst121Initial;
