function RecoverPassword() {
  return (
    <>
      <div className="container mx-auto">
        <Toaster position="center-top"></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div className={`${style.textbox} w-[25rem]`}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Hello Again</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Specify User name
              </span>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img
                  src={avatar}
                  alt="profile"
                  className="w-[8rem] h-[8rem] rounded-full object-cover"
                />
              </div>
              <div className={`${style.glass} flex flex-col w-full gap-4 p-4`}>
                <input
                  {...formik.getFieldProps("username")}
                  type="text"
                  placeholder="username"
                  className="box p-2"
                />
                <button type="submit" className={`${style.btn} w-full`}>
                  LOG IN
                </button>
                <div
                  className="
              text-center py-4"
                >
                  <span className="text-gray-500 flex items-center justify-center gap-4">
                    Not a member?
                    <Link to={"/register"} className="text-red-500">
                      Register now
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecoverPassword;
