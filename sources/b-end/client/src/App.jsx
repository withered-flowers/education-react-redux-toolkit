// Sekarang kita harus menggunakan Provider dari react-redux untuk bisa
// meng-inject store yang sudah dibuat ke dalam aplikasi React yang dibuat
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
// Ini adalah store yang dibuat via Redux Toolkit configureStore
import { store } from "./app/store";
import router from "./routes";

function App() {
	return (
		// Inject Provider di sini
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
