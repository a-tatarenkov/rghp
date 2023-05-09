import "./Header.scss";

export const Header = (props) => {
    console.log(props)
    return (
        <header className="ololo">
            <img src={props.logoToProps} alt=""/>
            <nav>
                {
                    props.linksToProps.map(el => <a href={el.link} key={el.id}><img src={el.logo} alt=""/>{el.name}</a>)
                }
            </nav>
        </header>
    )
}

export const Footer = (props) => {
    console.log(props)
    return (
        <header className="ololo">
            <img src={props.logoToProps} alt=""/>
            <nav>
                {
                    props.linksToProps.map(el =>  <a href={el.link} key={el.id}>{el.name}</a>)
                }
            </nav>
        </header>
    )
}

// export default Header;




