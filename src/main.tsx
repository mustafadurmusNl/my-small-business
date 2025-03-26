
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a QueryClient instance
const client = new QueryClient();

// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
