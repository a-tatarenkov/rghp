import "./Main.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
const Main = (props) => {
    return (
        <main>
            <Section1 description={props.section1ToProps}/>
            <Section2 cards={props.section2ToProps.cards}/>
        </main>
    )
}

export default Main;