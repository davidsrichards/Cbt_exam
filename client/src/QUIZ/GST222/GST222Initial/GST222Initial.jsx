import { useState } from "react";
import GlobalInitial from "../../GLOBAL/GlobalInitial/GlobalInitial";

function Gst222Initial() {
  const BASE_URL = "/api/user/gst222";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/gst222"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Gst222Initial;
