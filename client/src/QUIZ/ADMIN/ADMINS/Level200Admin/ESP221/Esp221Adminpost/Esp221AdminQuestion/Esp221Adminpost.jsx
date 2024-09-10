import { useDispatch, useSelector } from "react-redux";
import GlobalAdminPost from "../../../../GLOBALADMIN/GlobalAdminPost/GlobalAdminPost";
import { resetAdminQuestions } from "../../../../../../../REDOX/Features/AdminQuestionSlice/AdminQuestionSlice";
import { AdminPost } from "../../../../GLOBALADMIN/GlobalAdminHelperFunction/GlobalAdminHelperFunction";

function Esp221AdminPost() {
  const dispatch = useDispatch();
  const { questions, answers } = useSelector((state) => state.adminQuestions);
  const BASE_URL = "/api/user/esp221";
  const handlePost = async (e) => {
    e.preventDefault();
    await AdminPost(BASE_URL, { data: questions, answers });
    dispatch(resetAdminQuestions());
  };
  return (
    <>
      <GlobalAdminPost
        handlePost={handlePost}
        answers={answers}
        questions={questions}
      />
    </>
  );
}

export default Esp221AdminPost;
