import { useDispatch, useSelector } from "react-redux";
import { AdminPost } from "../../GLOBALADMIN/GlobalAdminHelperFunction/GlobalAdminHelperFunction";
import { resetAdminQuestions } from "../../../../../REDOX/Features/AdminQuestionSlice/AdminQuestionSlice";
import GlobalAdminPost from "../../GLOBALADMIN/GlobalAdminPost/GlobalAdminPost";

function Cmp225AdminPost() {
  const dispatch = useDispatch();
  const { questions, answers } = useSelector((state) => state.adminQuestions);
  const BASE_URL = "/api/user/cmp225";
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

export default Cmp225AdminPost;
