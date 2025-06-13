import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import ListaPost from "./pages/ListaPost";
import DefaultLayout from "./layout/DefaultLayout";
import ShowPost from "./pages/showPost";
import CreatePost from "./pages/createPost";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chiSiamo" element={<ChiSiamo />} />
          <Route path="/listaPost">

            <Route path="" element={<ListaPost />} />
            <Route path="create" element={<CreatePost />} />
            <Route path=":id" element={<ShowPost />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
