import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css';
import PostsComponent from './components/PostsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Post from './components/Post';
import ProtectedRoute from './components/ProtectedRoute';


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
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
                           <Route path="details" element={<Details />} />
                           <Route path="settings" element={<Settings />} />
                        </Route>
                        <Route path="/post:postId " element={<Post />} />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default App;