// Di sini kita bisa tidak menggunakan useState lagi
// namun tetap menggunakan useEffect
// import { useEffect, useState } from "react";
import { useEffect } from "react";

// Kita tetap menggunakan useSelector dan useDispatch di sini
import { useDispatch, useSelector } from "react-redux";

// Di sini kita akan meng-import action creator yang secara otomatis dibuatkan
// oleh createSlice
import {
  fetchPending,
  fetchReject,
  fetchSuccess,
} from "../features/todo/todo-slice";

const DataTablePage = () => {
  // const [todos, setTodos] = useState([]);
  const { isLoading, todos, errorMsg } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Di sini kita tetap membutuhkan useEffect supaya kita dapat memanggil
  // dispatchnya ketika Component ini dibuat
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        dispatch(fetchPending());

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const responseJson = await response.json();

        // Pada saat kita memanggil Action Creator
        // dari reducer yang ada di slice

        // Secara otomatis untuk Actionnya ini hanya menerima Payload saja

        // sehingga parameter yang diberikan, walaupun pada reducernya
        // ada 2 (state, action)

        // Namun pada saat memanggil via dispatch
        // cukup memberikan payloadnya saja
        dispatch(fetchSuccess(responseJson));
      } catch (err) {
        // Begitu juga dengan yang ada di sini !
        dispatch(fetchReject(err));
      }
    };

    fetchTodos();
  }, []);

  // Di sini kita bisa membuat Loadernya
  if (isLoading) {
    return (
      <>
        <section>
          <p className="animate-pulse text-3xl text-red-400">Loading</p>
        </section>
      </>
    );
  }

  return (
    <>
      {!errorMsg && todos && (
        <section className="flex flex-col gap-4 rounded bg-gray-100 p-4">
          <p className="text-2xl font-bold">DataTable Page</p>

          {todos.length > 0 && (
            <table className="border-1 border border-emerald-400">
              <thead>
                <tr>
                  <th className="border border-emerald-400 py-4">id</th>
                  <th className="border border-emerald-400">userId</th>
                  <th className="border border-emerald-400">title</th>
                  <th className="border border-emerald-400">completed</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td className="border border-emerald-400 py-2 text-center">
                      {todo.id}
                    </td>
                    <td className="border border-emerald-400 text-center">
                      {todo.userId}
                    </td>
                    <td className="border border-emerald-400">{todo.title}</td>
                    <td className="border border-emerald-400">
                      {todo.completed ? "Completed" : "Not Completed"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      )}
    </>
  );
};

export default DataTablePage;
