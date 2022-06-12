import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { Layout } from "./layout/Layout";

import { Home } from './pages/Home'
import { Test } from './pages/Test'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { Recipe } from './pages/Recipe'

function App() {

  return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element ={<Layout />}>
                        <Route index element ={<Home />} />
                        <Route path='test' element ={<Test />} />
                        <Route path='category/:nameCategory' element={<Category />} />
                        <Route path='category/:nameCategory/:idRecipe' element={<Recipe />} />
                        <Route path='404' element={<NotFound />} />
                        <Route path='*' element={<Navigate replace to="404" />} />
                    </Route>
                </Routes>
            </Router>
        </>
  );
}

export default App;
