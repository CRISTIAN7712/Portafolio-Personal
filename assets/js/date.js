<script>
  // Función para calcular la edad a partir de la fecha de nacimiento
  function calcularEdad(fechaNacimiento) {
    // Verifica que fechaNacimiento tenga un valor y no sea null o undefined
    if (!fechaNacimiento) {
      return "Fecha de nacimiento no válida";
    }
    
    const fechaNac = new Date(fechaNacimiento);
    const ahora = new Date();
    let edad = ahora.getFullYear() - fechaNac.getFullYear();
    const mesActual = ahora.getMonth();
    const diaActual = ahora.getDate();
    const mesNacimiento = fechaNac.getMonth();
    const diaNacimiento = fechaNac.getDate();
    
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }
    
    return edad;
  }

  // Obtener el elemento span que muestra la fecha de nacimiento
  const spanFechaNacimiento = document.getElementById('birthday');
  
  // Obtener la fecha de nacimiento del span y calcular la edad
  const fechaNacimiento = spanFechaNacimiento.textContent.trim(); // Elimina espacios en blanco al principio y al final
  const edad = calcularEdad(fechaNacimiento);
  
  // Actualizar el contenido del span que muestra la edad
  document.getElementById('age').textContent = edad;
</script>
