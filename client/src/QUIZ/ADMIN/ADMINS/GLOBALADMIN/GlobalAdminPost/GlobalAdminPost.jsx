import { Emptypost } from "../../../POST/PUSH/Main/AdminPost/AdminHelperFunction/AdminHelperFunction";

function GlobalAdminPost({ handlePost, questions, answers }) {
  return (
    <>
      <div className="flex w-full items-center justify-center h-screen bg-neutral-200">
        {questions.length < 1 || answers.length < 1 ? (
          <Emptypost />
        ) : (
          <form action="" onSubmit={handlePost}>
            <button
              type="submit"
              className="bg-blue-400 text-white p-4 rounded-lg font-bold hover:bg-blue-500"
            >
              Publish Questions
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default GlobalAdminPost;
