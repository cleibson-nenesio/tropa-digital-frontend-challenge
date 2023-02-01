import { BrowserRouter, Routes, Route } from "react-router-dom"
import HelloWord from "../shared/components/HelloWord/HelloWord"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<HelloWord />}/>
                <Route path="/home" element={<HelloWord />}/>
            </Routes>
        </BrowserRouter>
    )
}