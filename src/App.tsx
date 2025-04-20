import { FormEvent } from "react";

export default function Home() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name");
    const gender = formData.get("gender");
    console.log(name, gender);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <input type="radio" name="gender" value="male" />男
      <input type="radio" name="gender" value="female" />女<button>送信</button>
    </form>
  );
}
