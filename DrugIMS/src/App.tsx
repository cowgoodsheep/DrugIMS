import './base.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes/index.tsx'
function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
       {element}
    </div>
  );
}

export default App;
