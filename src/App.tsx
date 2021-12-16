// providers
import { GlobalProvider } from './providers';

// pages
import { Home } from './pages/Home';

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
