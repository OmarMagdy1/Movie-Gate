import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navToHome = useNavigate();
  const onHandleSubmit = (data) => {
    navToHome("/Movie-Gate");
  };
  return (
    <div className="login bg-dark">
      <div className="form-container w-50">
        <form noValidate onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-element mb-3">
            <label className="form-label">Email:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            ></input>
            {errors?.email?.type === "required" && (
              <p className="error">This Field Is Required !</p>
            )}
          </div>
          <div className="form-element mb-3">
            <label className="form-label">Password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true, minLength: 7 })}
            ></input>
            {errors?.password?.type === "required" && (
              <p className="error">This Field Is Required !</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="error">This Field Is Too Short !</p>
            )}
          </div>
          <button type="submit" className="btn btn-outline-light btn-lg my-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
