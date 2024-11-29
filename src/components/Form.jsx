import { useEffect } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMethodContext, useStateContext } from "../hooks/useGlobalProvider";

import { StyledForm } from "./StyledForm";

const schema = z
  .object({
    title: z.string().min(5, "Minimum 5 znaków").max(12, "Maximum 12 znaków"),
    body: z
      .string()
      .min(1, "Pole nie może być puste")
      .max(120, "Limit 120 znaków"),
    user: z
      .string()
      .min(2, "Pole nie może być puste")
      .max(15, "Limit 15 znaków"),
  })
  .required();

export const Form = () => {
  const methods = useForm({ resolver: zodResolver(schema) });

  const { addPost } = useMethodContext();
  const { postsState } = useStateContext();

  const submitForm = (data) => {
    addPost(data);
    methods.reset();
    console.log(data, postsState);
  };

  useEffect(() => {
    console.log("Updated postsState:", postsState); // Loguj nowy stan po każdej aktualizacji
  }, [postsState]); // W

  return (
    <FormProvider {...methods}>
      <StyledForm submitForm={submitForm}></StyledForm>
    </FormProvider>
  );
};
