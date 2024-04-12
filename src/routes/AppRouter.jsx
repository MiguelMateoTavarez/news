import { Route, Routes } from "react-router-dom"
import { HomeJournal } from "../journal/HomeJournal"


export const AppRouter = () => {
    return (
        <Routes>
                <Route path="/" element={<HomeJournal />} />
        </Routes>
    )
}
