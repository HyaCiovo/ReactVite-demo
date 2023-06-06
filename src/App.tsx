import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router";
import './App.css'
import { Link } from "react-router-dom";

const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div id="App" className="App">
        <nav>
          <Link to="/">To Home</Link>
          /
          <Link to="about">To About</Link>
          /
          <Link to="test">To Test</Link>
        </nav>
        <Router />
      </div>
    </QueryClientProvider>
  )
}

export default App
