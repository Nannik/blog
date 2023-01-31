import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider, App} from "@/app";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)