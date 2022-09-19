let videoclub = {
   peliculas: [
      {
         titulo: "Los surfistas nazis deben morir",
         sinopsis: `Unos vigilantes enloquecidos y de tendencias
       neo-nazis intentan dominar las playas de California después de los
       efectos devastadores de un terremoto que acaba con la vida de la mayoría
       de la población de la costa de los Estados Unidos. Una banda rival de
       surferos retan a los surfistas nazis y las playas californianas se
       convierten en verdaderos campos de batalla.`,
         cartel:
            "https://images-na.ssl-images-amazon.com/images/I/81QItsgmC0L.jpg"
      },
      {
         titulo: "Jesucristo cazavampiros",
         sinopsis: `En la ciudad comienzan a aparecer mujeres muertas
       sin una gota de sangre en sus cuerpos y con extrañas marcas de
       colmillos. La curia del lugar sospecha que un súcubo de los avernos es
       responsable, así que convocan el auxilio de Nuestro Señor Jesucristo`,
         cartel:
            "http://es.web.img2.acsta.net/r_1920_1080/medias/nmedia/18/83/99/03/19720990.jpg"
      },
      {
         titulo: "Mutantes en la universidad",
         sinopsis: `Una planta nuclear vierte unos desechos tóxicos
       en la ciudad de Nueva Jersey, cerca de una escuela provocando que dos
       estudiantes se conviertan en monstruos mutantes.`,
         cartel:
            "https://elblogbuster.files.wordpress.com/2009/03/01.jpeg"
      },
      {
         titulo: "Los payasos asesinos del espacio exterior",
         sinopsis: `Deb y Mike ven caer un meteorito en el bosque.
       Cuando se acercan a investigar descubren que se trata de una carpa de
       circo llena de payasos asesinos`,
         cartel:
            "https://pics.filmaffinity.com/killer_klowns_from_outer_space-306025741-large.jpg"
      },
      {
         titulo: "Poultrygeist: La noche de los pollos vivientes",
         sinopsis: `La American Chicken Bunker, una cadena de comida
       rápida de pollo frito con temática militar, monta un restaurante en un
       terreno que anteriormente era un cementerio indio. A partir de este
       momento, una maldición se desatará en el lugar, liberando una epidemia
       que revive a los pollos... en forma de zombies.`,
         cartel:
            "https://www.filmaboutit.com/data/shp/images/vSeehH4s274kdZXEMKnPE2tlqco_1.jpg"
      },
      {
         titulo: "Braindead (Tu madre se ha comido a mi perro",
         sinopsis: `Un científico descubre en Skull Island un
       ejemplar muy extraño de mono rata al que acompaña una terrible
       maldición, según los nativos. El ejemplar es trasladado a Nueva Zelanda
       para su estudio. Cuando Lionel y Paquita realizan una visita al
       zoológico, la madre de Lionel les vigila en secreto, y será mordida por
       el animal encontrado en la isla, quien se va convirtiendo en una especie
       de zombie, sedienta de carne, y que convierte en zombie a todo el que
       ataca.`,
         cartel:
            "https://pics.filmaffinity.com/braindead_dead_alive-251699227-large.jpg"
      },
      {
         titulo: "El vampiro rockabilly",
         sinopsis: `Una triste y gris dependienta, gran admiradora de
       Elvis y con un pretendiente, verá su vida cambiar cuando en su vida se
       cruce un apuesto rocker.`,
         cartel: "https://pics.filmaffinity.com/rockabilly_vampire-557315792-large.jpg"
      },
      {
         titulo: "Yo compré una moto vampiro",
         sinopsis: `Cuando el miembro de una banda de motoristas mata
       a un ocultista, el espíritu diabólico que la víctima evocaba se encarna
       en una moto. Tras ser comprada y arreglada revelará su auténtica
       naturaleza y buscará vengarse del motero que causó su muerte.`,
         cartel: "https://pics.filmaffinity.com/i_bought_a_vampire_motorcycle-172431269-large.jpg"
      },
      {
         titulo: "El vengador tóxico",
         sinopsis: `Melvin, el limpiador de un gimnasio de la pequeña
       localidad de Tromaville, cae en una cuba radioactiva cuando huye de una
       pandilla de jóvenes. Las radiaciones le convertirán en un monstruoso
       mutante con superpoderes, los cuales usará para liberar del mal a la
       ciudad`,
         cartel: "https://pics.filmaffinity.com/the_toxic_avenger-235937374-large.jpg"
      },
      {
         titulo: "Megatiburón contra crocosaurus",
         sinopsis: `Un enorme escualo prehistórico ataca una
       embarcación que transporta un cocodrilo gigantesco y lo libera,
       desatando el terror. El teniente Terry McCormick, superviviente de uno
       de los ataques del tiburón, y el cazador de cocodrilos Nigel Putman se
       disponen a enfrentarse a ellos.`,
         cartel: "https://pics.filmaffinity.com/mega_shark_vs_crocosaurus_mega_shark_versus_crocosaurus-247675959-large.jpg"
      },
      {
         titulo: "El sargento Kabukiman",
         sinopsis: `Harry Griswold es un sargento de policía bastante
       torpe que adquiere unos poderes sobrenaturales tras un tiroteo en un
       teatro kabuki. Harry se transforma en el superhéroe conocido como
       Kabukiman. Entre sus variopintos superpoderes, se cuentan la capacidad
       para volar y para lanzar rollitos de primavera explosivos.`,
         cartel: "https://pics.filmaffinity.com/sgt_kabukiman_n_y_p_d_sgt_kabukiman_nypd-250793726-large.jpg"
      },
      {
         titulo: "Beware! Children at play",
         sinopsis: `Un grupo de niños han desaparecido
       misteriosamente. Un escritor y un policía comienzan la búsqueda de estos
       niños, encontrándose con la sorpresa de que estos infantes se han
       convertido en unos caníbales asesinos.`,
         cartel:
            "https://pics.filmaffinity.com/beware_children_at_play-434526979-large.jpg"
      }
   ]
};



function MovieList(props) {
   const peliculas = props.videoclub.peliculas;
   const listedFilms = peliculas.map((pelicula) =>
      <div key={pelicula.titulo} class="card">
         <img src={pelicula.cartel} alt={pelicula.titulo} />
         <h3>{pelicula.titulo}"</h3>
         <p>{pelicula.sinopsis}</p>
      </div>
   );
   return (
      <ul>{listedFilms}</ul>);
}

export default MovieList;