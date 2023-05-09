import Card from "./Card/Card";

const Section2 = (props) => {
    return (
        <section className="Cards">
            {
                props.cards.map(card => <Card img={card.img} title={card.title} description={card.description}/>)
            }
        </section>
    )
}

export default Section2;
