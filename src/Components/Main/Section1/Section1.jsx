const Section1 = (props) => {
    return (
        <section>
            <img src={props.description.img} alt="img_sec1"/>
            <p>{props.description.description}</p>
        </section>
    )
}

export default Section1;
