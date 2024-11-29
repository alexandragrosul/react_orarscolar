import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  initialAmount: yup.number().positive().required("Введите начальную сумму"),
  monthlyContribution: yup
    .number()
    .positive()
    .required("Введите ежемесячное пополнение"),
  annualRate: yup
    .number()
    .min(0)
    .max(100)
    .required("Введите процентную ставку"),
  years: yup.number().positive().integer().required("Введите срок в годах"),
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
        <label>Начальная сумма:</label>
        <input type="number" {...register("initialAmount")} />
        <p>{errors.initialAmount?.message}</p>
      </div>
      <div>
        <label>Ежемесячное пополнение:</label>
        <input type="number" {...register("monthlyContribution")} />
        <p>{errors.monthlyContribution?.message}</p>
      </div>
      <div>
        <label>Годовая ставка (%):</label>
        <input type="number" {...register("annualRate")} />
        <p>{errors.annualRate?.message}</p>
      </div>
      <div>
        <label>Срок (лет):</label>
        <input type="number" {...register("years")} />
        <p>{errors.years?.message}</p>
      </div>
      <button type="submit">Рассчитать</button>
    </form>
  );
};

export default InvestmentForm;
