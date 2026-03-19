import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./Header.css"; 
export default function Homepage()
{
    return(<div>
        <div>
            <Header/>
        </div>

        <div>
            <Body/>
        </div>

        <div>
            <Footer/>
        </div>

    </div>)
}