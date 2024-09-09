import { useState } from "react";
import GlobalInitial from "../../../GLOBAL/GlobalInitial/GlobalInitial";

function Gst111Initial() {
  const BASE_URL = "/api/user/gst111";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/gst111"}
        reviews={"/google/login/success/gst111-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Gst111Initial;
