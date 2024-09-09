import { useState } from "react";
import GlobalInitial from "../../../GLOBAL/GlobalInitial/GlobalInitial";

function Gst113Initial() {
  const BASE_URL = "/api/user/gst113";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/gst113"}
        reviews={"/google/login/success/gst113-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Gst113Initial;
