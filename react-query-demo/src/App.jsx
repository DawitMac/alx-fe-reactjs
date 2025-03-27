import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css';
import PostsComponent from './components/PostsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Navbar from './components/Navbar';


function App() {
    const queryClient = new QueryClient();
    
    return (
        <QueryClientProvider client={queryClient}>  
            <ErrorBoundary>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PostsComponent />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default App;