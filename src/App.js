import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider/AuthProvider';
const Routing = React.lazy(() => import('./components/Routing/Routing'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <AuthProvider>
                <Routing />
          </AuthProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
