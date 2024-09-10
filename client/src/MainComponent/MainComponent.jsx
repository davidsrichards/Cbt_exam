import Login from "../Login/Login";
import Registration from "../REGISTRATION/Registration/Registration";
import LoginSuccess from "../Login/LoginSuccess/LoginSuccess";
import { Route, Routes } from "react-router-dom";
import Quiz from "../QUIZ/StartQuiz/Quiz/Quiz";
import Result from "../QUIZ/Result/Result";
import AdminRegistration from "../QUIZ/ADMIN/POST/Registration/Registration";
import AdminLogin from "../QUIZ/ADMIN/POST/Login/Login";
import AdminMainQuestion from "../QUIZ/ADMIN/POST/PUSH/Main/Main";
import AdminPost from "../QUIZ/ADMIN/POST/PUSH/Main/AdminPost/AdminPost";
import Username from "../Login/ResetSesion/Username";
import GenerateOTP from "../Login/ResetSesion/GenerateOTP";
import ResetPassword from "../Login/ResetSesion/Reset";
import DashBoard from "../QUIZ/DashBoard/DashBoard";
import UserProfile from "../QUIZ/DashBoard/UserProfile/UserProfile";
import Cmp211 from "../QUIZ/CMP211/Cmp211";
import Cmp211Results from "../QUIZ/CMP211/Cmp211Result/Cmp211Result";
import Cmp222 from "../QUIZ/CMP222/Cmp222";
import Cmp222Results from "../QUIZ/CMP222/Cmp222Result/Cmp222Result";
import Cmp211AdminQuestion from "../QUIZ/ADMIN/ADMINS/CMP211ADMIN/Cmp211AdminQuestion/Cmp211AdminQuestion";
import Cmp211AdminPost from "../QUIZ/ADMIN/ADMINS/CMP211ADMIN/Cmp211AdminPost/Cpm211AdminPost";
import AdminDashBoard from "../QUIZ/ADMIN-DASHBOARD/AdminDashboard/AdminDashboard";
import Cmp222AdminPost from "../QUIZ/ADMIN/ADMINS/CMP222Admin/Cmp222Adminpost/Cmp222AdminQuestion/Cmp222Adminpost";
import Cmp222AdminQuestion from "../QUIZ/ADMIN/ADMINS/CMP222Admin/Cmp222AdminQuestion/Cmp222AdminQuestion";
import Cmp211Initial from "../QUIZ/CMP211/Cmp211Initial/Cmp211Initital";
import Cmp222Initial from "../QUIZ/CMP222/Cmp222Initial/Cmp222Initial";
import Cmp223Initial from "../QUIZ/CMP223/Cmp223Initial/Cmp223Initial";
import Cmp223AdminQuestion from "../QUIZ/ADMIN/ADMINS/CMP223Admin/Cmp223Adminpost/Cmp223AdminQuestion";
import Cmp223 from "../QUIZ/CMP223/Cmp223";
import Cmp223AdminPost from "../QUIZ/ADMIN/ADMINS/CMP223Admin/Cmp223AdminQuestion/Cmp223Adminpost";
import Cmp223Results from "../QUIZ/CMP223/Cmp223Result/Cmp223Result";
import Gst222 from "../QUIZ/GST222/GST222";
import Gst222Results from "../QUIZ/GST222/GST222Result/GST222Result";
import Gst222Initial from "../QUIZ/GST222/GST222Initial/GST222Initial";
import GlobalTimer from "../QUIZ/GLOBAL/GlobalTimer/GlobalTimer";
import Gst222AdminQuestion from "../QUIZ/ADMIN/ADMINS/GST222ADMIN/Gst222Adminpost/Gst222AdminQuestion";
import Gst222AdminPost from "../QUIZ/ADMIN/ADMINS/GST222ADMIN/Gst222AdminQuestion/Gst222Adminpost";
import { ProtectQuiz } from "../Validate/Validate";
import Cmp225 from "../QUIZ/CMP225/Cmp225";
import Cmp225Initial from "../QUIZ/CMP225/Cmp225Initial/Cmp225Initial";
import Cmp225Results from "../QUIZ/CMP225/Cmp225Result/Cmp225Result";
import Cmp225AdminPost from "../QUIZ/ADMIN/ADMINS/CMP225Admin/Cmp225AdminQuestion/Cmp225Adminpost";
import Cmp225AdminQuestion from "../QUIZ/ADMIN/ADMINS/CMP225Admin/Cmp225Adminpost/Cmp225AdminQuestion";
import Cmp222Reviews from "../QUIZ/CMP222/Cmp222Reviews/Cmp222Reviews";
import Cmp223Reviews from "../QUIZ/CMP223/Cmp223Reviews/Cmp223Reviews";
import Cmp225Reviews from "../QUIZ/CMP225/Cmp225Reviews/Cmp225Reviews";
import Gst222Reviews from "../QUIZ/GST222/Gst222Reviews/Gst222Reviews";
import Cmp211Reviews from "../QUIZ/CMP211/Cmp211Reviews/Cmp211Reviews";
import SelectCourses from "../SelectCourses/SelectCourses";
import Cmp224 from "../QUIZ/CMP224/Cmp224";
import Cmp224Initial from "../QUIZ/CMP224/Cmp224Initial/Cmp224Initial";
import Cmp224Results from "../QUIZ/CMP224/Cmp224Result/Cmp224Result";
import Cmp224Reviews from "../QUIZ/CMP224/Cmp224Reviews/Cmp224Reviews";
import Gst111Initial from "../QUIZ/LEVEL100/GST111/Gst111Initial/Gst111Initial";
import Gst111Results from "../QUIZ/LEVEL100/GST111/Gst111Result/Gst111Result";
import Gst111Reviews from "../QUIZ/LEVEL100/GST111/Gst111Reviews/Gst111Reviews";
import Gst111 from "../QUIZ/LEVEL100/GST111/Gst111";
import Gst112 from "../QUIZ/LEVEL100/GST112/Gst112";
import Gst112Initial from "../QUIZ/LEVEL100/GST112/Gst112Initial/Gst112Initial";
import Gst112Results from "../QUIZ/LEVEL100/GST112/Gst112Result/Gst112Result";
import Gst112Reviews from "../QUIZ/LEVEL100/GST112/Gst112Reviews/Gst112Reviews";
import Gst113 from "../QUIZ/LEVEL100/GST113/Gst113";
import Gst113Initial from "../QUIZ/LEVEL100/GST113/Gst113Initial/Gst113Initial";
import Gst113Results from "../QUIZ/LEVEL100/GST113/Gst113Result/Gst113Result";
import Gst113Reviews from "../QUIZ/LEVEL100/GST113/Gst113Reviews/Gst113Reviews";
import Gst121 from "../QUIZ/LEVEL100/GST121/Gst113";
import Gst121Initial from "../QUIZ/LEVEL100/GST121/Gst121Initial/Gst121Initial";
import Gst121Results from "../QUIZ/LEVEL100/GST121/Gst121Result/Gst121Result";
import Gst121Reviews from "../QUIZ/LEVEL100/GST121/Gst121Reviews/Gst121Reviews";
import Esp221 from "../QUIZ/ESP221/Esp221";
import Esp221Initial from "../QUIZ/ESP221/Esp221Initial/Esp221Initial";
import Esp221Results from "../QUIZ/ESP221/Esp221Result/Esp221Result";
import Esp221Reviews from "../QUIZ/ESP221/Gst121Reviews/Esp221Reviews";
import Gst111AdminPost from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst111Admin/Gst111Adminpost/Gst111AdminQuestion/Gst111Adminpost";
import Gst111AdminQuestion from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst111Admin/Gst111AdminQuestion/Gst111AdminQuestion";
import Gst112AdminPost from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst112Admin/Gst111Adminpost/Gst112AdminQuestion/Gst112Adminpost";
import Gst112AdminQuestion from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst112Admin/Gst112AdminQuestion/Gst112AdminQuestion";
import Gst113AdminPost from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst113Admin/Gst111Adminpost/Gst113AdminQuestion/Gst113Adminpost";
import Gst113AdminQuestion from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst113Admin/Gst113AdminQuestion/Gst113AdminQuestion";
import Gst121AdminPost from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst121Admin/Gst121Adminpost/Gst113AdminQuestion/Gst121Adminpost";
import Gst121AdminQuestion from "../QUIZ/ADMIN/ADMINS/Level100Admin/Gst121Admin/Gst121AdminQuestion/Gst121AdminQuestion";
import Esp221AdminQuestion from "../QUIZ/ADMIN/ADMINS/Level200Admin/ESP221/Esp221AdminQuestion/Esp221AdminQuestion";
import Esp221AdminPost from "../QUIZ/ADMIN/ADMINS/Level200Admin/ESP221/Esp221Adminpost/Esp221AdminQuestion/Esp221Adminpost";
import Cmp224AdminQuestion from "../QUIZ/ADMIN/ADMINS/Level200Admin/CMP224/224AdminQuestion/Cmp224AdminQuestion";
import Cmp224AdminPost from "../QUIZ/ADMIN/ADMINS/Level200Admin/CMP224/Cmp224Adminpost/Esp221AdminQuestion/Cmp224Adminpost";

function MainComponenet() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/google/login/success"
          element={
            <ProtectQuiz>
              <DashBoard />
            </ProtectQuiz>
          }
        >
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="cmp211" element={<Cmp211 />} />
          <Route path="cmp211-init" element={<Cmp211Initial />} />
          <Route path="cmp211-result" element={<Cmp211Results />} />
          <Route path="cmp211-review" element={<Cmp211Reviews />} />
          <Route path="cmp222" element={<Cmp222 />} />
          <Route path="cmp222-init" element={<Cmp222Initial />} />
          <Route path="cmp222-result" element={<Cmp222Results />} />
          <Route path="cmp222-review" element={<Cmp222Reviews />} />
          <Route path="cmp223" element={<Cmp223 />} />
          <Route path="cmp223-init" element={<Cmp223Initial />} />
          <Route path="cmp223-result" element={<Cmp223Results />} />
          <Route path="cmp223-review" element={<Cmp223Reviews />} />

          <Route path="cmp224" element={<Cmp224 />} />
          <Route path="cmp224-init" element={<Cmp224Initial />} />
          <Route path="cmp224-result" element={<Cmp224Results />} />
          <Route path="cmp224-review" element={<Cmp224Reviews />} />
          <Route path="cmp225" element={<Cmp225 />} />
          <Route path="cmp225-init" element={<Cmp225Initial />} />
          <Route path="cmp225-result" element={<Cmp225Results />} />
          <Route path="cmp225-review" element={<Cmp225Reviews />} />
          <Route path="gst222" element={<Gst222 />} />
          <Route path="gst222-init" element={<Gst222Initial />} />
          <Route path="gst222-result" element={<Gst222Results />} />
          <Route path="gst222-review" element={<Gst222Reviews />} />
          {/*  */}
          <Route path="esp221" element={<Esp221 />} />
          <Route path="esp221-init" element={<Esp221Initial />} />
          <Route path="esp221-result" element={<Esp221Results />} />
          <Route path="esp221-review" element={<Esp221Reviews />} />
          <Route path="gst111" element={<Gst111 />} />
          <Route path="gst111-init" element={<Gst111Initial />} />
          <Route path="gst111-result" element={<Gst111Results />} />
          <Route path="gst111-review" element={<Gst111Reviews />} />
          <Route path="gst112" element={<Gst112 />} />
          <Route path="gst112-init" element={<Gst112Initial />} />
          <Route path="gst112-result" element={<Gst112Results />} />
          <Route path="gst112-review" element={<Gst112Reviews />} />
          {/*  */}
          <Route path="gst113" element={<Gst113 />} />
          <Route path="gst113-init" element={<Gst113Initial />} />
          <Route path="gst113-result" element={<Gst113Results />} />
          <Route path="gst113-review" element={<Gst113Reviews />} />
          {/*  */}
          <Route path="gst121" element={<Gst121 />} />
          <Route path="gst121-init" element={<Gst121Initial />} />
          <Route path="gst121-result" element={<Gst121Results />} />
          <Route path="gst121-review" element={<Gst121Reviews />} />
          <Route index element={<SelectCourses />} />
        </Route>
        <Route path="/generate" element={<GenerateOTP />} />
        <Route path="/recover" element={<Username />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin-registration" element={<AdminRegistration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />}>
          <Route
            path="cmp211-admin-question"
            element={<Cmp211AdminQuestion />}
          />

          <Route path="cmp211-admin-post" element={<Cmp211AdminPost />} />
          <Route
            path="cmp222-admin-question"
            element={<Cmp222AdminQuestion />}
          />
          <Route path="cmp222-admin-post" element={<Cmp222AdminPost />} />
          <Route
            path="cmp223-admin-question"
            element={<Cmp223AdminQuestion />}
          />
          <Route path="cmp223-admin-post" element={<Cmp223AdminPost />} />
          <Route
            path="cmp224-admin-question"
            element={<Cmp224AdminQuestion />}
          />
          <Route path="cmp224-admin-post" element={<Cmp224AdminPost />} />
          <Route
            path="gst222-admin-question"
            element={<Gst222AdminQuestion />}
          />
          <Route path="gst222-admin-post" element={<Gst222AdminPost />} />
          <Route
            path="esp221-admin-question"
            element={<Esp221AdminQuestion />}
          />
          <Route path="esp221-admin-post" element={<Esp221AdminPost />} />
          <Route path="cmp225-admin-post" element={<Cmp225AdminPost />} />
          <Route
            path="cmp225-admin-question"
            element={<Cmp225AdminQuestion />}
          />
          {/*  */}
          <Route path="gst111-admin-post" element={<Gst111AdminPost />} />
          <Route
            path="gst111-admin-question"
            element={<Gst111AdminQuestion />}
          />
          <Route path="gst112-admin-post" element={<Gst112AdminPost />} />
          <Route
            path="gst112-admin-question"
            element={<Gst112AdminQuestion />}
          />
          <Route path="gst113-admin-post" element={<Gst113AdminPost />} />
          <Route
            path="gst113-admin-question"
            element={<Gst113AdminQuestion />}
          />
          {/*  */}
          <Route path="gst121-admin-post" element={<Gst121AdminPost />} />
          <Route
            path="gst121-admin-question"
            element={<Gst121AdminQuestion />}
          />
        </Route>
        <Route path="/admin-post" element={<AdminPost />} />
        <Route path="/timer" element={<GlobalTimer />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default MainComponenet;
