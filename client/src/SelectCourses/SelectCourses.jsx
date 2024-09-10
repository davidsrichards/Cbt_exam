import { useEffect, useState } from "react";
import GlobalSelect from "../QUIZ/GLOBAL/GlobalSelect/GlobalSelect";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SelectCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState([
    "CMP221",
    "CMP222",
    "CMP223",
    "CMP224",
    "CMP225",
    "GST222",
    "ESP221",
    "GST121",
  ]);
  const [level, setLevel] = useState(["100", " 200"]);
  const [department, setDepartment] = useState(["Computer Science"]);
  const [selectCourse, setSelectedCourse] = useState("");
  const [selectDep, setSelectedDep] = useState("");
  const [selectLevel, setSelectedLevel] = useState("");

  // navigate user
  /*  "GST111",
  "GST112",
  "GST113", */

  useEffect(() => {
    if (selectLevel && selectCourse && selectDep) {
      const currentPath = location.pathname;
      return navigate(`/google/login/success/${selectCourse}-init`);
    }
  }, [selectCourse, selectDep, selectLevel]);

  return (
    <div className="p-2">
      <div className="bg-white p-4 rounded-md nav2 flex flex-col gap-4 select-ct bg-opacity-60">
        <h1 className="font-semibold border-b-2 border-slate-300 pb-4 text-white">
          Apply Filter
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <GlobalSelect
            action={"Level"}
            options={level}
            defaults={selectLevel}
            setDefault={setSelectedLevel}
          />
          <GlobalSelect
            action={"Department"}
            options={department}
            defaults={selectDep}
            setDefault={setSelectedDep}
          />
          <GlobalSelect
            action={"Course"}
            options={course}
            defaults={selectCourse}
            setDefault={setSelectedCourse}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectCourses;
