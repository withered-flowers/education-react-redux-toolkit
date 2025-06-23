// Di sini kita bisa tidak menggunakan useState lagi
// namun tetap menggunakan useEffect
// import { useEffect, useState } from "react";
import { useEffect } from "react";

// Kita tetap menggunakan useSelector dan useDispatch di sini
import { useDispatch, useSelector } from "react-redux";

// Di sini kita akan meng-import function thunk yang sudah kita buat
import { fetchTodos } from "../features/todo/todo-slice";

const DataTablePage = () => {
	// State ini sudah tidak digunakan lagi karena sudah masuk ke dalam RTK
	// const [todos, setTodos] = useState([]);
	const { isLoading, todos, errorMsg } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	// Di sini kita tetap membutuhkan useEffect supaya kita dapat memanggil
	// dispatchnya ketika Component ini dibuat
	useEffect(() => {
		// Di sini kita hanya perlu memanggil dispatch fetchTodos (thunk)
		dispatch(fetchTodos());
	}, [dispatch]);

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
						<table className="border-1 border-emerald-400">
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
