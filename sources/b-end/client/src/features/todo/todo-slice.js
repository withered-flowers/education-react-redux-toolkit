// Di sini kita akan menggunakan slice dari redux toolkit untuk membuat reducernya secara otomatis
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Di sini kita akan mendeklarasikan state awal yang digunakan oleh reducer
const initialState = {
	isLoading: true,
	todos: [],
	errorMsg: "",
};

// Di sini kita akan membuat slicenya
// slice adalah kumpulan data yang digunakan dalam reducer

// Redux menggunakan slice untuk membuat reducer secara otomatis
// dan menyediakan seluruh fungsi / action + action creator yang dibutuhkan

// secara OTOMATIS !
const todoSlice = createSlice({
	// Nama ini digunakan untuk keperluan debugging
	name: "todos",

	// initialState ini merupakan state awal yang akan dimasukkan ke dalam reducer
	initialState: initialState,

	// Reducer ini adalah seluruh fungsi yang digunakan untuk mengubah state di dalam redux
	// Walaupun state seharusnya bersifat immutable di dalam reducer, namun karena di balik
	// layarnya slice ini sudah menggunakan "immer", maka SEOLAH-OLAH kode dapat dibuat
	// secara mutable (boleh diassign), padahal di balik layarnya tetap immutable !
	reducers: {
		// Di sini karena ingin menggunakan loading dan ada error messagenya
		// dan menggunakan fetcher yang bersifat promise
		// maka di sini kita akan menghandle 3 state promise:
		// - pending, pada saat pertama kali fetch dijalankan
		// - success, pada saat fetch berhasil dan data didapatkan
		// - reject, pada saat fetch gagal dan mendapatkan pesan error
		fetchPending(state) {
			state.isLoading = true;
			state.todos = [];
			state.errorMsg = "";
		},
		fetchSuccess(state, action) {
			state.isLoading = false;
			state.todos = action.payload;
		},
		fetchReject(state, action) {
			state.isLoading = false;
			state.errorMsg = action.payload;
		},
	},
});

// Secara otomatis dari slice yang dibuat akan menyediakan action creatornya.
export const { fetchPending, fetchSuccess, fetchReject } = todoSlice.actions;

// Ini adalah fungsi yang akan digunakan oleh thunk
export const fetchTodos =
	// Di sini kita akan menggunakan thunk untuk menghandle promise/async

	// Fungsi pertama ini akan berisi argument yang dibutuhkan oleh fungsi fetchTodos yang akan digunakan
	// Karena di sini kita tidak memiliki arguments, maka kita akan mendeklarasikan fungsi yang kosong
	// Fungsi ini akan mengembalikan suatu fungsi lainnya yang akan digunakan oleh thunk
		() =>
		// Fungsi ini merupakan fungsi yang akan digunakan oleh thunk
		// Untuk setiap fungsi yang digunakan oleh thunk, thunk akan memberikan 2 argument:
		// - dispatch (optional), digunakan untuk mengirim action ke reducer
		// - getState (optional), digunakan untuk mengambil state dari redux
		async (dispatch, _getState) => {
			// Di sinilah kita akan membuat logic yang akan digunakan oleh thunk

			// Logic yang akan kita akan gunakan adalah fetch untuk mengambil data dari server
			try {
				// Di sini kita akan mengirimkan action fetchPending ke reducer
				dispatch(fetchPending());

				// Di sini kita akan menggunakan fetch untuk mengambil data dari server
				const { data } = await axios.get(
					"https://jsonplaceholder.typicode.com/todos",
				);

				// Di sini kita akan mengirimkan action fetchSuccess ke reducer dan mengirimkan data yang didapatkan
				dispatch(fetchSuccess(data));
			} catch (err) {
				// Di sini kita akan mengirimkan action fetchReject ke reducer dan mengirimkan pesan error yang didapatkan
				dispatch(fetchReject(err.message));
			}
		};

// Secara otomatis dari slice yang dibuat juga menyediakan reducernya.
export default todoSlice.reducer;
