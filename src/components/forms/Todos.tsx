"use client";
import React from "react";
import { apiCall } from "../util/apiCall";
import { Todo } from "@/app/page";
import Image from "next/image";
const Todos = ({ todos }: { todos: Todo[] }) => {
  const updateHandler = async (id: number, title: string) => {
    try {
      const TodoRes = apiCall(
        `/${id}`,
        "PATCH",
        { title, done: true },
        {
          "Content-Type": "application/json",
        }
      );
      console.log(TodoRes);
      alert("updated succesfully");
    } catch (error) {}
  };

  const deleteHandler = async (id: number) => {
    try {
      const TodoRes = apiCall(`/${id}`, "DELETE");
      console.log(TodoRes);
      alert("deleted succesfully");
    } catch (error) {}
  };

  return (
    <div className="w-full mt-3 rounded-10">
      <ul className="grid grid-cols-1 px-5">
        {todos?.map((todo) => (
          <li
            className={`${
              todo.done ? "bg-emerald-100" : "bg-red-300"
            } flex justify-between rounded-md px-2 py-1 mt-2`}
            key={todo.id}
          >
            {todo.title}
            <div className="flex gap-5">
              <button
                onClick={() => {
                  updateHandler(todo.id, todo.title);
                }}
              >
                <Image
                  src="/images/icons/update.png"
                  alt="update icon"
                  width={18}
                  height={18}
                />
              </button>
              <button onClick={deleteHandler.bind(null, todo.id)}>
                <Image
                  src="/images/icons/delete.svg"
                  alt="delete icon"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
