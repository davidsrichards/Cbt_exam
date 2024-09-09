import { useState } from "react";
import GlobalInitial from "../../../GLOBAL/GlobalInitial/GlobalInitial";

function Gst112Initial() {
  const BASE_URL = "/api/user/gst112";
  const [length, setLength] = useState();
  return (
    <>
      <GlobalInitial
        to={"/google/login/success/gst112"}
        reviews={"/google/login/success/gst112-review"}
        url={BASE_URL}
        length={length}
        setter={setLength}
      />
    </>
  );
}

export default Gst112Initial;
