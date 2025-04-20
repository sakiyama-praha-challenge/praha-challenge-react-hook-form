import { useUserForm, UserFormInputs } from "./hooks/useUserForm";

export default function Home() {
  const { registerName, registerGender, handleSubmit, errors } = useUserForm();

  const onSubmit = (data: UserFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...registerName} />
      {errors.name && <p>{errors.name.message}</p>}
      <input type="radio" {...registerGender} value="male" />男
      <input type="radio" {...registerGender} value="female" />女
      <button>送信</button>
      {errors.gender && <p>{errors.gender.message}</p>}
    </form>
  );
}
