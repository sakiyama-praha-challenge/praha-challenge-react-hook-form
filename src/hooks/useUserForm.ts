import { useForm } from "react-hook-form";

export type UserFormInputs = {
  name: string;
  gender: string;
};

export const useUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({ mode: "onChange" });

  const registerName = register("name", {
    required: "名前は必須です",
    maxLength: { value: 10, message: "10文字以内で入力してください" },
  });

  const registerGender = register("gender");

  return {
    errors,
    register: {
      name: registerName,
      gender: registerGender,
    },
    handleSubmit: handleSubmit,
  };
}; 