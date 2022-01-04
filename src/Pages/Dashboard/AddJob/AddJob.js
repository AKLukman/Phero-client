import React from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const AddJob = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/jobs", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully added");
        reset();
      }
    });
  };
  return (
    <div className="add-product">
      <h2 className="pt-5 text-center">Add a new Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          defaultValue={user.email}
          placeholder="Title"
        />
        <input {...register("title")} placeholder="Title" />
        <textarea {...register("description")} placeholder="Description" />

        <select
          style={{ width: "50%", marginBottom: "10px" }}
          {...register("type")}
        >
          <option value="Fullstack Development">Fullstack Development</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
        </select>

        <input type="number" {...register("budget")} placeholder="Budget" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddJob;
