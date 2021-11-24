import { useForm } from "react-hook-form";
import { signup } from "../api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../authenticate";
import "./Signup.css"



const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signup(data)
      .then((response) => {
        console.log("dang ky", response.data);
        authenticate(response.data.user);
        toast.success("Đăng ký thành công");
        navigate("/signin");
      })
      .catch((error) => toast.error(error.response.data));
  };
  return (
    <form classname="mf" onSubmit={handleSubmit(onSubmit)}>
                <h2>Đăng ký tài khoản</h2>
               
                <div class="userName">
                  
                    <label for=""><i class="fas fa-user"></i></label>
                    <input type="email" {...register("email")} placeholder="Email của bạn" classname="userName"/>
                </div>
                <div class="passWord">
                    <label for=""><i class="fas fa-lock"></i></label>
                    <input type="password" {...register("password")} placeholder="Mật khẩu" classname="passWord"/>
                </div>

      <button classname="bnt-submit">Đăng ký</button>
      
    </form>
  );
};

export default Signup;
