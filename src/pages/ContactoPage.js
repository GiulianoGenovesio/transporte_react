import '../styles/contacto.css';

const ContactoPage = (props) => {

    return (
        <main className="holder contacto">
            <div>
                <h2>Completa el formulario</h2>
                <form action="" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Telefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Comentario</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También pueden contactarse a través de estos medios</p>
                <ul>
                    <li>Telefono: 215445</li>
                    <li><i className="fa-brands fa-facebook"></i><span>info sahdsahdshdja</span></li>
                    <li><i className="fa-brands fa-instagram"></i> : red social 2</li>
                    <li>red social3</li>
                    <li>red social4</li>
                    <li>Mail</li>
                </ul>
                <div className="Mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.962047268195!2d-64.4736003595703!3d-31.393717770875895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x942d673a598f91bf%3A0x67ff9a006a95b700!2sCARTEL%20VILLA%20CARLOS%20PAZ!5e0!3m2!1ses!2sar!4v1716213056917!5m2!1ses!2sar" style={{border: 0, width: 500, height: 300}} ></iframe>
                </div>
            </div>
        </main>
    )



}

export default ContactoPage;