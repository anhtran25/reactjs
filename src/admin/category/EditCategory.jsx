import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { readcate } from "../../api/categoryAPI";


const EditCategory = (props) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  let navigate = useNavigate();

  const { id } = useParams();
  const [category, setCategory] = useState({});
  useEffect(() => {
    readcate(id).then((response) => {
      setCategory(response.data);
      reset(response.data);
    });
  }, [id, reset]);

  const onSubmit = (data) => {
    props.onUpdate({ id, ...data });
  };
 
  const addCategoryForm = () => {
    return (
      < div className="contai">
      <form onSubmit={handleSubmit(onSubmit)} className="form-update">
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Ten san pham"
          {...register("cate_name", { required: true })}
          defaultValue={category.cate_name}
        />
        {errors.cate_name && <p>Bạn chưa nhập tên</p>}      
        <button>Cập nhật</button>
        <button onClick={() => navigate(-1)}>Quay lai</button>
      </form>
      </div>
    );
  };

  return <div>{addCategoryForm()}</div>;
};
export default EditCategory;
