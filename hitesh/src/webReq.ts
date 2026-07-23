import axios from "axios";
import type { AxiosResponse } from "axios";

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("Todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("axios error", error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

//npm i some-library
//npm i -D @types/some-tibrary
