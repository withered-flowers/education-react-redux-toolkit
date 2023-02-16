import { RouterProvider } from "react-router-dom";
import router from "./routes";

// Sekarang kita harus menggunakan Provider dari react-redux untuk bisa
// meng-inject store yang sudah dibuat ke dalam aplikasi React yang dibuat
import { Provider } from "react-redux";

// Ini adalah store yang dibuat via Redux Toolkit configureStore
import { store } from "./app/store";

function App() {
  return (
    // Inject Provider di sini
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
