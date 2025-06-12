import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import ListaPost from "./pages/ListaPost";
import DefaultLayout from "./layout/DefaultLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/chiSiamo" element={<ChiSiamo />} />
        <Route path="/listaPost" element={<ListaPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
