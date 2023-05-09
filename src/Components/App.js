import './App.css';
import {Header, Footer} from "./Header/Header";
import Main from "./Main/Main";
// import Footer from "./Footer/Footer";


const App = (props) => {
    return (
        <div className="App">
            <Header linksToProps={props.data.header.links} logoToProps={props.data.header.logo} />
            <Main section1ToProps={props.data.section1} section2ToProps={props.data.section2}/>
            <Footer linksToProps={props.data.header.links} logoToProps={props.data.header.logo} />
        </div>
    );
}

export default App;
