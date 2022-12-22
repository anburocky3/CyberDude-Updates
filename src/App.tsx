import TheNavbar from "@components/commons/TheNavbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RoadmapPage from "@views/Roadmap";
import SuggestionPage from "@views/Suggestions";
import Login from "@views/auth/Login";
import ProtectedRoute from "./route/ProtectedRoute";
import Sessions from "@views/Sessions";
import { getDataById } from "./firebase/functions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import "antd/dist/antd.min.css";
import Session from "@views/Session";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    document.title = "CyberDude Updates";
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          getDataById("user", uid as any)
            .then((e) => {
              setIsAuthenticated(true);
              setLoading(false);
            })
            .catch((e) => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error);

      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <TheNavbar
        loading={loading}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <main className="">
        <Routes>
          <Route path="/" element={<Navigate to="/roadmap" replace />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/suggestions" element={<SuggestionPage />} />
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
                loading={loading}
              />
            }
          />
          <Route
            path="/sessions"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                loading={loading}
                Comp={(<Sessions />) as JSX.Element}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/sessions/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                loading={loading}
                Comp={(<Session />) as JSX.Element}
              ></ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
