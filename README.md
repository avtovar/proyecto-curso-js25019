Entrega del Proyecto: Plataforma de Cursos Online - Academia de Tecnología (ficticia)

Este proyecto consiste en una landing page moderna para promocionar y vender cursos online (QA, Testing Funcional, SQL, Scrum y otros). Fue desarrollada utilizando HTML, CSS y JavaScript, y está orientada a brindar una experiencia interactiva al usuario.

🧩 Funcionalidades destacadas

    Catálogo de cursos con video introductorio, descripción y pensum detallado.

    Carrito de compras interactivo ubicado en la barra superior:

        Agrega cursos con confirmación.

        Muestra alerta si el curso ya está en el carrito.

        Panel flotante para revisar cursos agregados, eliminarlos o simular una compra.

        Actualización en tiempo real del total y la cantidad de cursos.

    Formulario de contacto validado en tiempo real:

        Mensajes de error debajo de cada campo si hay datos incorrectos.

        Limpieza automática del formulario tras un envío exitoso.

    Modo oscuro activable mediante un botón flotante.

    Footer informativo con mapa de ubicación, datos de contacto y redes sociales.

    Diseño responsive, adaptable a dispositivos móviles y pantallas de escritorio.


🗂️ Estructura de archivos

    index.html → Página principal con estructura semántica y vínculos a estilos y scripts.

    style.css → Estilos generales, diseño responsive y lógica del modo oscuro.

    carrito.js → Funcionalidad del carrito de compras (confirmaciones, avisos, panel flotante).

    formulario.js → Validación dinámica del formulario de contacto.

    Carpeta media/ → Contiene imágenes, íconos y logotipo de la academia.


🛒 ¿Cómo funciona el carrito?

    Haz clic en "Agregar al carrito" en cualquier curso.

    Se muestra una confirmación. Si el curso ya está agregado, el sistema lo advierte.

    Al hacer clic en el ícono 🛒, se despliega un panel con los cursos seleccionados.

    Desde ese panel, puedes quitar cursos o finalizar la compra (simulada con alert).


📬 ¿Cómo funciona el formulario de contacto?

    Completa los campos requeridos y presiona "Enviar".

    Si hay errores, estos se muestran en tiempo real bajo los campos correspondientes.

    Si el envío es exitoso, aparece un mensaje de confirmación y el formulario se reinicia.


🛠️ Personalización

    Puedes agregar más cursos fácilmente duplicando el bloque .curso-box en el HTML.

    Los colores y fuentes pueden modificarse en el archivo style.css según la identidad visual.

    Los scripts están comentados y organizados, facilitando su edición y escalabilidad.