import { useCallback, useEffect, useState } from "react";

const DataTablePage = () => {
	const [todos, setTodos] = useState([]);

	// --- ADVANCED CONCEPT ---
	// Fungsi ini seharusnya hanyalah fungsi biasa saja ...
	// Tapi karena fungsi ini akan masuk ke dalam useEffect
	// Jadi kita harus membungkusnya dengan useCallback
	// dan memastikan bahwa fungsi ini tidak berubah setiap render
	// (exhaustive dependencies)
	const fetchTodos = useCallback(async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos");
		const responseJson = await response.json();

		setTodos(responseJson);
	}, []);

	useEffect(() => {
		fetchTodos();
	}, [
	  // Karena ini sudah menggunakan fn dari useCallback
	// Aman untuk digunakan di dalam useEffect
	fetchTodos
	]);

	return (
		<section class="flex flex-col gap-4 rounded bg-gray-100 p-4">
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
	);
};

export default DataTablePage;
