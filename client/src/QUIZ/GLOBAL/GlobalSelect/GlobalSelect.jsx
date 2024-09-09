import "./GlobalSelect.css";
function GlobalSelect({ action, options, defaults = "", setDefault }) {
  return (
    <div className="select flex items-center gap  p-[0.4rem] rounded-full px-[0.9rem] bg-white w-full">
      <select
        name=""
        id=""
        value={defaults}
        onChange={(e) => setDefault(e.target.value)}
        className="flex items-center  outline-none w-full bg-transparent"
      >
        <option value="Session">{action}</option>
        {options?.map((op, i) => (
          <option value={op} key={i} className="">
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GlobalSelect;
