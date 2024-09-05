import "./GlobalAnswer.css";
function GlobalAnwers({ apidata, index }) {
  const convertAnswers = (answer) => {
    let display = "";
    switch (true) {
      case answer === 0:
        display = "A";
        break;
      case answer === 1:
        display = "B";
        break;
      case answer === 2:
        display = "C";
        break;
      case answer === 3:
        display = "D";
    }
    return display;
  };

  return (
    <div className="p-2 flex flex-col items-center justify-center answer-container mt-12">
      <h2 className="font-semibold">Answers</h2>
      <ul className="flex flex-wrap">
        {apidata[index]?.map((a, i) => (
          <li className="border-2 p-2" key={i}>
            {i + 1}. <span className="text-green-600">{convertAnswers(a)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GlobalAnwers;
