import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <JobProvider>
      <Router>
        <App />
      </Router>
    </JobProvider>
  </AuthProvider>
);
