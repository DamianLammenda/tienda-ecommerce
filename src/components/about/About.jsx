import React from "react";
import "./about.css";
import logo from "../imgs/logo.png";
const About = () => {
    return (
      <>
        <div className="containerAbout">
          <div className="mb-2">
            <img src={logo} alt="logo" />
          </div>
          <p>
            <strong>Max AutoShop</strong> nació en el año 1992 con una pequeña
            Concesionaria en la localidad de Brandsen, Pcia. de Bs. As., que
            comenzó con tan sólo unas 2 unidades asignadas por la fábrica y unos
            ocho o nueve empleados. Transcurrieron apenas dos años para que se
            convirtiera en una nueva y amplia Concesionaria siendo el punto de
            partida de una rápida expansión comercial que se proyectó hacia el
            interior de la provincia.
          </p>
          <p>
            El 1 de diciembre de 1994 se inauguró la concesionaria de avenida 44
            y 135 La Plata, con una moderna estructura en la que se aprovechó,
            para su construcción, toda la experiencia recogida a lo largo de más
            de 20 años en la Industria, garantizando de este modo la excelencia
            en servicios de venta y post-venta de los productos Ford.
          </p>
          <p>
            <strong>Los productos:</strong> Estamos muy orgullosos de ser
            representantes de respetadas marcas en el gran mundo de la industria
            automotriz y contribuimos permanentemente en la divulgación de las
            bondades de los productos que comercializamos.
          </p>
          <p>
            <strong>Misión. Visión</strong> Ser una de las compañías líderes, más respetadas,
            confiables y admiradas en el mercado, obteniendo el mayor grado de
            satisfacción de nuestros actuales y futuros clientes, lealtad y
            fidelidad de marca. Garantizar la movilidad de nuestros actuales y
            futuros clientes, vendiendo y otorgando servicio a todos los
            productos de nuestras marcas, creando una relación comercial
            duradera con ellos a través de los distintos concesionarios que
            forman parte del grupo, construyendo un sólido lazo de confianza a
            través de los años.
          </p>
          <p>
            <strong>Valores</strong> Nuestros valores consisten en la Honestidad e Integridad en
            nuestra relación comercial, trabajando en Equipo, avanzando y
            mejorando con nuestros socios estratégicos, concesionarios y
            proveedores, en procurar la plena satisfacción del cliente. Estos
            valores se enfocan a: <strong>La gente:</strong> es la fuente de nuestra fortaleza.
            Ellos nos proporcionan su inteligencia y determinan la reputación y
            vitalidad de nuestra empresa en la comunidad. Nuestros empleados
            forman sólidos equipos de acción y gestión siendo acreedores de
            todas las herramientas y capacidades para ejecutar con calidad los
            procesos programados.
          </p>
          <p>
          <strong>El servicio:</strong> Esperamos que nuestros productos cumplan adecuadamente la función para la cual fueron diseñados. La relación con nuestros clientes después de la venta es tan importante como el contacto inicial, por eso asumimos responsablemente la atención de todos los inconvenientes de la posventa en nuestros departamentos de servicio. 
          </p>
        </div>
      </>
    );
}
 
export default About;