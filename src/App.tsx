import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import { ChuckPage } from "./pages/ChuckPage";
import { AuthPage } from "./pages/AuthPage";

export default function App() {
    /* const user = useContext(AuthContext);
     */
    return (
        <BrowserRouter basename="/mobilki-projekt/">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="chuck" element={<ChuckPage />} />
                    <Route path="account" element={<AuthPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
