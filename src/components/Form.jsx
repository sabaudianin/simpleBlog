import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/postsMethods";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { StyledForm } from "./StyledForm";

const schema = z
  .object({
    title: z.string().min(5, "Minimum 5 znaków").max(24, "Maximum 24 znaków"),
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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const submitForm = (data) => {
    mutation.mutate(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <StyledForm submitForm={submitForm}></StyledForm>
    </FormProvider>
  );
};
