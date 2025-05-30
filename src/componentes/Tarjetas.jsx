import React from "react";
import { Interface } from "./Interfaces";

function TarjetasInfo() {
    return (
        <div className="App">
            <div className='contenedor-maestro'>
                <h1>La Tecnología y sus Avances en la Sociedad</h1>
                <Interface
                    nombre='Análisis de Datos'
                    pais='Guatemala'
                    img='img1'
                    subTitulo='Técnicas de análisis de datos'
                    empresa='Microsoft'
                    descripcion='El análisis de datos es la ciencia que se encarga de examinar un conjunto de datos con el propósito de sacar conclusiones sobre la información para poder tomar decisiones, o simplemente ampliar los conocimientos sobre diversos temas. El análisis de datos consiste en someter los datos a la realización de operaciones, esto se hace con la finalidad de obtener conclusiones precisas que nos ayudarán a alcanzar nuestros objetivos, dichas operaciones no pueden definirse previamente ya que la  recolección de datos  puede revelar ciertas dificultades.'
                />
                <Interface
                    nombre='Desarrollo de Software'
                    pais='Costa Rica'
                    img='img2'
                    subTitulo='Conjunto de Actividades Informáticas '
                    empresa='Mercado Libre'
                    descripcion='El software propiamente dicho es el conjunto de instrucciones o programas que indican a un ordenador lo que debe hacer. Es independiente del hardware y hace que los ordenadores sean programables. Hay tres tipos básicos: Software de sistema, que proporciona funciones básicas, como sistemas operativos, gestión de discos, servicios, gestión de hardware y otras necesidades operativas.'
                />
                <Interface
                    nombre='Interfaces de Usuario'
                    pais='Colombia'
                    img='img3'
                    subTitulo='Mantente fiel a la web'
                    empresa='IOS System'
                    descripcion='Las personas esperan que las páginas de las aplicaciones web carguen rápidamente. En el servidor, React te permite servir HTML bajo demanda mientras aún estás cargando datos, rellenando progresivamente el contendido faltante antes de que cargue ningún código de JavaScript. En el cliente, React puede usar APIs web estándares para mantener tu interfaz de usuario responsiva incluso en medio del renderizado.'
                />
                <Interface
                    nombre='React Native'
                    pais='México'
                    img='img4'
                    subTitulo='Logra una UI realmente nativa'
                    empresa='Google'
                    descripcion='Las personas esperan que las aplicaciones nativas se vean y se sientan como su plataforma. React Native y Expo te permiten construir aplicaciones en React para Android, iOS y más. Lucen y se sienten como nativas porque sus UIs son realmente nativas. No es una vista web: tus componentes de React renderizan vistas reales de Android e iOS provistas por la plataforma.'
                />
            </div>

        </div>
    );

};

export default TarjetasInfo;