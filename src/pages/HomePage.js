import '../styles/home.css';

const HomePage = (props) => {

    return (
        <main className="holder">
      <div className="homeimg">
        <img src="img/home/img01.jpg" alt="avión" />
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae rem,
            totam, quibusdam culpa maiores magni adipisci ipsam laborum delectus
            in dicta inventore aliquam minima, aliquid cupiditate consectetur
            soluta perferendis illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, et. Quae numquam error hic eius accusantium, totam in
            quibusdam natus, veniam saepe doloremque omnis, debitis quo! Ex
            consequatur vero harum!
          </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente excelente</span>
            <span className="autor">Giuliano Genovesio -zapatos.com</span>
          </div>
        </div>
      </div>
    </main>
    )



}

export default HomePage;