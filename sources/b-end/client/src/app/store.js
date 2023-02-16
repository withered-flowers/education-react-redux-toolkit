// Di sini kita tidak menggunakan createStore lagi (redux standard)
// Di sini kita menggunakan configureStore untuk membuat store ala Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counter-slice";
import todoReducer from "../features/todo/todo-slice";

// Dengan menggunakan configureStore ini, secara otomatis redux toolkit akan menyelipkan Thunk
// secara otomatis ke dalam store
export const store = configureStore({
  // Apabila reducer ini valuenya berupa Object, maka Redux Toolkit akan secara otomatis
  // menggunakan combineReducer untuk membuat "rootReducer"
  // (rootReducer adalah gabungan dari seluruh reducer yang ada menjadi satu reducer utama)
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
