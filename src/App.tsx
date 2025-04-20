import { useUserForm, UserFormInputs } from "./hooks/useUserForm";

export default function Home() {
  const { register, handleSubmit, errors } = useUserForm();

  const onSubmit = (data: UserFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register.name} />
      {errors.name && <p>{errors.name.message}</p>}
      <input type="radio" {...register.gender} value="male" />男
      <input type="radio" {...register.gender} value="female" />女
      <button>送信</button>
      {errors.gender && <p>{errors.gender.message}</p>}
    </form>
  );
}
