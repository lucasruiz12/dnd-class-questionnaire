import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from './pages/Landing';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;