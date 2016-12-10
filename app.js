var usuario = function (nombre, correo, contraseña, foto){
    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
    this.foto = foto;
};

var evento = function (nombre, fecha, hora, lugar, descripcion){ //foto, keywords){
    this.nombre = nombre;
    this.fecha = fecha;
    this.hora = hora;
    this.lugar = lugar;
    this.descripcion = descripcion;
    //this.foto = foto;
    //this.keywords = keywords;
};

var categoria = function (nombre, color, logo, keywords){
    this.nombre = nombre;
    this. color = color;
    this.keywords = keywords;
};

//Listas de las categorías, eventos y usuarios existentes
var keywords = [];
var usuarios = [];
var categorias = [];
var eventos = [];

//Usuarios:
usuarios.push(new usuario("Jorge Daniel Páez Vivas", "jorge25981@hotmail.com", "17", 123456789, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Twenty_One_Pilots_logo2.jpg/220px-Twenty_One_Pilots_logo2.jpg"));

//categorias
categorias.push(new categoria("Cine", '#fff', "<i class='fa fa-film' aria-hidden='true'></i>", ["crispetas","películas","cine"]));

categorias.push(new categoria("Conciertos", '#ff0000', "<i class='fa fa-music' aria-hidden='true'></i>", ["bandas", "artistas", "música", "conciertos", "cantantes", "festivales"]));

//Eventos para la categoría cine:
eventos.push(new evento(
	'ESTRENO: "Animales fantásticos y en dónde encontrarlos"', 
	'11-17-2016', 
	"Mirar horarios en: http://www.cinecolombia.com/pelicula/medellin/animales-fantasticos-y-donde-encontrarlos", 
	"Salas de cine de los siguientes centros comerciales: Molinos, Santafe, Oviedo, Unicentro", 
	"Sinopsis: La historia inicia en 1926, cuando el magizoólogo Newt Scamander recién concluye una excursión por el mundo para encontrar y documentar la extraordinaria variedad de criaturas mágicas. Llega a la ciudad de Nueva York con la intención de hacer una breve parada y salir sin tener ningún incidente… de no ser por Jacob, un no-maj (el equivalente estadounidense de los muggles), un caso de uso inadecuado de magia y la fuga de algunos de los animales fantásticos de Newt que pueden causar varios problemas para ambos mundos: el mágico y el no-maj."));

eventos.push(new evento(
	'ESTRENO: "Jack Reacher: Sin Regreso"',
	'11-24-16',
	"Mirar horarios en: http://www.cinecolombia.com/pelicula/medellin/jack-reacher-sin-regreso",
	"No hay todavia lugares programados.",
	"Sinopsis: Jack Reacher (Tom Cruise) regresa con su marca particular de la justicia en la esperada secuela Jack Reacher: Sin Regreso. La mayor Susan Turner (Cobie Smulders) es la comandante del  ejército que dirige la antigua unidad de investigación de Reacher. Ella es arrestada por traición, y sabiendo que es inocente, Reacher deberá sacarla de prisión y destapar la verdad detrás de una gran conspiración del gobierno con el fin de limpiar sus nombres y salvar sus vidas. En la carrera como fugitivos de la ley, Reacher descubre un secreto de su pasado potencial que podría cambiar su vida para siempre. Basado en JACK REACHER: NEVER GO BACK que ha tenido cerca de 100 millones de libros vendidos en todo el mundo, la novela en el puesto 18 de las más vendidas de la serie de Jack Reacher, del autor Lee Child. "));

eventos.push(new evento(
	'ESTRENO: "Rogue One: Una historia de Star Wars"', 
	'12-15-2016', 
	"Mirar horarios en: http://www.cinecolombia.com/pelicula/medellin/rogue-one-una-historia-de-star-wars", 
	"No hay todavia lugares programados.", 
	"Sinopsis: ROGUE ONE: UNA HISTORIA DE STAR WARS, es la primera película en la nueva serie de filmes independientes de Lucasfilm. Narra la historia de cómo un grupo de improbables héroes se une para emprender una osada y aparentemente imposible misión para robar los planes de la más reciente arma de destrucción."));

eventos.push(new evento(
	'ESTRENO: "Assassin´s Creed"', 
	'01-05-2017', 
	"Mirar horarios en: http://www.cinecolombia.com/pelicula/medellin/assassins-creed", 
	"No hay todavia lugares programados.", 
	"Sinopsis: A través de una tecnología revolucionaria que libera sus recuerdos genéticos, Callum Lynch (Michael Fassbender) experimenta las aventuras de su ancestro, Aguilar, en la España del siglo XV. Callum descubre que es un descendiente de la misteriosa sociedad secreta, los Assassins, y acumula conocimiento y habilidades impresionantes para enfrentarse a la opresiva y poderosa organización de los templarios del presente."));

//Eventos para la categoría Conciertos:
eventos.push(new evento(
	'CONCIERTO: "BRUUTTAL - J • BALVIN"', 
	'11-26-2016', 
	"Apertura de puertas: 5:00PM Empieza: 7:00PM", 
	"Centro de eventos La Macarena, Medellín", 
	"Edad mínima: 18 años. Para ver precio, localidades y comprar boletas: https://latiquetera.com/evento/bruuttal---j-balvin"));
	
eventos.push(new evento(
	'CONCIERTO: GUNS AND ROSES - NOT IN THIS LIFETIME TOUR', 
	'11-23-2016', 
	"Apertura de puertas: 6:00PM Empieza: 8:00PM", 
	"Estadio Atanasio Girardot, Medellín", 
	"Edad mínima de ingreso 14 años. Todo menor entre 14 y 16 años debe ir acompañado con un adulto responsable. Para ver precio y comprar boletas: http://vive.tuboleta.com/shows/show.aspx?sh=GUNSMD"));

eventos.push(new evento(
	'FESTIVAL: "FESTIVAL ESTÉREO PICNIC"', 
	'03-23-2017', 
	"No se especifica.", 
	"Bogotá", 
	"Festival Estereo Picnic es un festival familiar de música y cultura, cuyo objetivo es presentar una diversidad de bandas de rock, pop, y otros estilos musicales afines, nacionales e internacionales. Edad mínima: 18 años. Para ver precio, lineup y comprar boletas: http://vive.tuboleta.com/shows/show.aspx?sh=UPICNIC17#boletas"));

eventos.push(new evento(
	'FESTIVAL: "FESTIVAL ESTÉREO PICNIC"', 
	'03-24-2017', 
	"No se especifica.", 
	"Bogotá", 
	"Festival Estereo Picnic es un festival familiar de música y cultura, cuyo objetivo es presentar una diversidad de bandas de rock, pop, y otros estilos musicales afines, nacionales e internacionales. Edad mínima: 18 años. Para ver precio, lineup y comprar boletas: http://vive.tuboleta.com/shows/show.aspx?sh=UPICNIC17#boletas"));

eventos.push(new evento(
	'FESTIVAL: "FESTIVAL ESTÉREO PICNIC"', 
	'03-25-2017', 
	"No se especifica.", 
	"Bogotá", 
	"Festival Estereo Picnic es un festival familiar de música y cultura, cuyo objetivo es presentar una diversidad de bandas de rock, pop, y otros estilos musicales afines, nacionales e internacionales. Edad mínima: 18 años. Para ver precio, lineup y comprar boletas: http://vive.tuboleta.com/shows/show.aspx?sh=UPICNIC17#boletas"));

//Función para mostrar los datos en el calendario:
var eventosProgramados = [];

eventos.forEach(function(evento){
    eventosProgramados[evento.fecha] = evento.nombre + '<br>' + evento.descripcion; 
});

//Función para index:

				var cal = $( '#calendar' ).calendario( {
						onDayClick : function( $el, $contentEl, dateProperties ) {

							for( var key in dateProperties ) {
								console.log( key + ' = ' + dateProperties[ key ] );
							}

						},
						caldata : eventosProgramados
					} ),
					$month = $( '#custom-month' ).html( cal.getMonthName() ),
					$year = $( '#custom-year' ).html( cal.getYear() );

				$( '#custom-next' ).on( 'click', function() {
					cal.gotoNextMonth( updateMonthYear );
				} );
				$( '#custom-prev' ).on( 'click', function() {
					cal.gotoPreviousMonth( updateMonthYear );
				} );
				$( '#custom-current' ).on( 'click', function() {
					cal.gotoNow( updateMonthYear );
				} );

				function updateMonthYear() {				
					$month.html( cal.getMonthName() );
					$year.html( cal.getYear() );
				}

				// you can also add more data later on. As an example:
				/*
				someElement.on( 'click', function() {
					
					cal.setData( {
						'03-01-2013' : '<a href="#">testing</a>',
						'03-10-2013' : '<a href="#">testing</a>',
						'03-12-2013' : '<a href="#">testing</a>'
					} );
					// goes to a specific month/year
					cal.goto( 3, 2013, updateMonthYear );

				} );
				*/

//Función para Index2:
			$(function() {
			
				var transEndEventNames = {
						'WebkitTransition' : 'webkitTransitionEnd',
						'MozTransition' : 'transitionend',
						'OTransition' : 'oTransitionEnd',
						'msTransition' : 'MSTransitionEnd',
						'transition' : 'transitionend'
					},
					transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
					$wrapper = $( '#custom-inner' ),
					$calendar = $( '#calendar' ),
					cal = $calendar.calendario( {
						onDayClick : function( $el, $contentEl, dateProperties ) {

							if( $contentEl.length > 0 ) {
								showEvents( $contentEl, dateProperties );
							}

						},
						caldata : eventosProgramados,
						displayWeekAbbr : true
					} ),
					$month = $( '#custom-month' ).html( cal.getMonthName() ),
					$year = $( '#custom-year' ).html( cal.getYear() );

				$( '#custom-next' ).on( 'click', function() {
					cal.gotoNextMonth( updateMonthYear );
				} );
				$( '#custom-prev' ).on( 'click', function() {
					cal.gotoPreviousMonth( updateMonthYear );
				} );

				function updateMonthYear() {				
					$month.html( cal.getMonthName() );
					$year.html( cal.getYear() );
				}

				// just an example..
				function showEvents( $contentEl, dateProperties ) {

					hideEvents();
					
					var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
						$close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

					$events.append( $contentEl.html() , $close ).insertAfter( $wrapper );
					
					setTimeout( function() {
						$events.css( 'top', '0%' );
					}, 25 );

				}
				function hideEvents() {

					var $events = $( '#custom-content-reveal' );
					if( $events.length > 0 ) {
						
						$events.css( 'top', '100%' );
						Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

					}

				}
			
			});


//links externos
//*eventos ligados a keywords de la categoría
//http://tympanus.net/codrops/2012/11/27/calendario-a-flexible-calendar-plugin/
