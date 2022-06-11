import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

import { Home } from './pages/Home'
import { Test } from './pages/Test'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'

function App() {
  return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route exact path='/' element ={<Home />} />
                        <Route path='/test' element ={<Test />} />
                        <Route path='/category/:nameCategory' element={<Category />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path='*' element={<Navigate replace to="/404" />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
  );
}

export default App;
