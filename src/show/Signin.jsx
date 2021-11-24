import { useForm } from "react-hook-form";
import { signin } from "../api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../authenticate";

const Signin = () => {
 
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {

    signin(data)
      .then((response) => {
        toast.success("Đăng nhập thành công");
        authenticate(response.data.user);
        navigate("/products");
        
      })
      .catch((error) => toast.error(error.response.data));
  };
  return (
    <div>
      
      <form classname="mf" onSubmit={handleSubmit(onSubmit)}>
      <h2>Đăng nhập</h2>
      <div class="userName">
                    <label for=""><i class="fas fa-user"></i></label>
                    <input type="email" {...register("email")} placeholder="Email của bạn" classname="userName"/>
                </div>
                <div class="passWord">
                    <label for=""><i class="fas fa-lock"></i></label>
                    <input type="password" {...register("password")} placeholder="Mật khẩu" classname="passWord"/>
                </div>
        <button>Đăng nhập</button>
      </form>
    </div>
  );
};
export default Signin;
