const Card = (props) => {
    console.log(props.img)
    return (
        <div className="Card">
            <img src={props.img} alt="img"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;