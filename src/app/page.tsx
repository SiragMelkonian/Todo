import { apiCall } from "@/components/util/apiCall";
import Form from "@/components/forms/Form";
import Todos from "@/components/forms/Todos";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export default async function Home() {
  const TodoRes = await apiCall("", "GET");
  const todos: Todo[] = TodoRes?.todos;
  console.log(todos);

  return (
    <main className="w-full h-[500px] m-auto max-w-[400px] bg-slate-800 my-8 pt-8 rounded-xl">
      <Form />
      <Todos todos={todos} />
    </main>
  );
}
