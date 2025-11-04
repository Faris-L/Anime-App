
import 'boxicons/css/boxicons.min.css';
import "./about.css";

const cards = [
  {
    id: 1,
    image: "https://picsum.photos/id/1018/400/400",
    title: "Mina Borojevic",
    subtitle: "Web Developer",
    bio: "Mina works in Centar NIT as a Web Developer.",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1025/400/400",
    title: "Faris Lakota",
    subtitle: "Web Developer",
    bio: "Faris works in Centar NIT as a Web Developer.",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1035/400/400",
    title: "Ali Alic",
    subtitle: "Web Developer",
    bio: "Ali works in Centar NIT as a Web Developer.",
  },
];

function about() {
  return (
    <div className="container">
      {cards.map((card) => (
        <div key={card.id} className="card-wrapper">
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>

            <div className="card-info">
              <div className="title">{card.title}</div>
              <div className="subtitle">{card.subtitle}</div>
              <div className="bio">{card.bio}</div>

              <div className="social-icons">
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <a href="#"><i className='bx bxl-github'></i></a>
                <a href="#"><i className='bx bxl-linkedin'></i></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default about;