import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCategory = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    props.onAdd(data);
    navigate("/", { replace: true });
  };
  const addProductForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input
          type="text"
          placeholder="Ten danh mục"
          {...register("name", { required: true })}
        />
        {errors.cate_name && <p>Bạn chưa nhập tên danh mục</p>}
        
        <button>Them loạisan pham</button>
      </form>
    );
  };

  return <div>{addProductForm()}</div>;
};
export default AddCategory;
