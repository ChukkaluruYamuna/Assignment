import "./App.css";
import FileUploaderDashboard from "./components/FileUploaderDashboard";
import SignInPage from "./components/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignInPage />} />
        <Route path="uploadfiles" element={<FileUploaderDashboard />} />
        <Route>URL Not found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
