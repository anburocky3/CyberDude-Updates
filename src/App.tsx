import TheNavbar from '@components/commons/TheNavbar'
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import RoadmapPage from '@views/Roadmap';
import SuggestionPage from '@views/Suggestions';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'CyberDude Updates';
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <TheNavbar />

      <main className='container mx-auto py-10'>
        <Routes>
          <Route path="/" element={<Navigate to="/roadmap" replace />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/suggestions" element={<SuggestionPage />} />
        </Routes>
      </main >
    </div>
  )
}

export default App
