import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  initialAmount: yup.number().positive().required("Enter the initial amount"),
  monthlyContribution: yup
    .number()
    .positive()
    .required("Enter the monthly contribution"),
  annualRate: yup
    .number()
    .min(0)
    .max(100)
    .required("Enter the annual interest rate"),
  years: yup
    .number()
    .positive()
    .integer()
    .required("Enter the number of years"),
});

const InvestmentForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Initial Amount (MDL):</label>
        <input type="number" {...register("initialAmount")} />
        <p>{errors.initialAmount?.message}</p>
      </div>
      <div>
        <label>Monthly Contribution (MDL):</label>
        <input type="number" {...register("monthlyContribution")} />
        <p>{errors.monthlyContribution?.message}</p>
      </div>
      <div>
        <label>Annual Interest Rate (%):</label>
        {/* <input type="number" {...register("annualRate")} /> */}
        <select {...register("annualRate")}>
          <option value="2">2%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
        </select>
        <p>{errors.annualRate?.message}</p>
      </div>
      <div>
        <label>Duration (years):</label>
        <input type="number" {...register("years")} />
        <p>{errors.years?.message}</p>
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default InvestmentForm;
