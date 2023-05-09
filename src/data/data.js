import logo from "../assets/BMW_logo_(gray).svg.png";
import img1 from "../assets/img_section1.jpg";

let data = {
    header: {
        links: [
            {id: 1, link: "https://www.google.com/", name: "Google", logo: logo},
            {id: 2, link: "https://edu.cbsystematics.com/ua", name: "CBS", logo: img1},
            {id: 3, link: "https://itvdn.com/ua", name: "ITVDN"},
            {id: 4, link: "https://testprovider.com/ru", name: "TESTPROVIDER"}
        ],
        logo: logo
    },
    section1: {
        img: img1,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga iste non pariatur qui quis recusandae, reiciendis sint unde? Alias aliquid asperiores, commodi culpa debitis dolor doloremque ducimus ea eaque eum eveniet hic, illo in iusto laboriosam nulla optio quibusdam reprehenderit sunt voluptas! Ad aliquid amet asperiores commodi consectetur consequatur dolore dolorem dolores eius et ex fugit in itaque libero magni maxime nemo odio officiis possimus quas quisquam quos recusandae rem repellat saepe, sapiente tempore, temporibus totam ullam unde? Architecto atque culpa enim expedita explicabo inventore magni maiores, mollitia perferendis perspiciatis possimus quia quod sunt suscipit temporibus voluptatem, voluptatibus! Earum."
    },
    section2: {
        cards: [
            {id: 1, img: "../../../../assets/img_section1.jpg", title: "BMW1", description: "Lorem100"},
            {id: 2, img: logo, title: "BMW2", description: "Lorem100"},
            {id: 3, img: logo, title: "BMW3", description: "Lorem100"},
            {id: 4, img: logo, title: "BMW4", description: "Lorem100"},
            {id: 5, img: logo, title: "BMW5", description: "Lorem100"},
        ]
    }
}

export default data;