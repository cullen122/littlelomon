import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

export default function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} ></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </BrowserRouter>
    //   <main>
    //     <CallToAction />
    //     <SpecialHighlight />
    //     <Testimonials />
    //     <Chicago />
    //   </main>
    );
}