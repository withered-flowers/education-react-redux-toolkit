# Education React Redux (Non-Toolkit)

## Table of Contents

1. [Perkenalan Redux](#perkenalan-redux)
1. [Prinsip Redux](#prinsip-redux)
1. [Redux How To](#redux-how-to)
1. [Struktur Folder Redux](#struktur-folder-redux)
1. [Warning](#warning)

### Perkenalan Redux

- https://redux.js.org/tutorials/essentials/part-1-overview-concepts
- https://redux.js.org/introduction/getting-started#basic-example
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

### Prinsip Redux

- https://redux.js.org/understanding/thinking-in-redux/three-principles
- https://www.geeksforgeeks.org/pure-functions-in-javascript/
- https://gattigaga.com/id/artikel/memahami-pure-function/

### Redux Toolkit How To

- https://redux-toolkit.js.org/usage/usage-guide
- https://redux-toolkit.js.org/usage/usage-guide#creating-slices-of-state

### Struktur Folder Tambahan Redux Toolkit

- `/src/app/store.js` = Berisi Store yang merupakan kumpulan dari seluruh State, Reducer dan Action yang akan digunakan lewat Redux
- `/src/features` = Berisi slice yang merupakan logic dari Reducer dan Action yang akan dibuat secara otomatis oleh Redux Toolkit via `createSlice`

### Warning

Pada saat pembelajaran ini selesai, teman teman BELUM BISA memasukkan fetch data dari API ke dalam Redux. Karena itu, teman teman harus mempelajari tentang Middleware di dalam Redux itu sendiri, yang mungkin menggunakan library tambahan: `Redux Thunk`.
