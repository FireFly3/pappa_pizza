import {Header} from "./components/header/Header";
import {Home} from "./pages/Home";
import "./scss/app.scss"
import {NotFound} from "./pages/NotFound";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    {/*<NotFound/>*/}
                    <Home/>
                </div>
            </div>
        </div>
    );
}

export default App;
