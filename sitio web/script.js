document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
  
    // Obtiene los valores de los campos
    var remitente = document.getElementById('remitente').value;
    var destinatario = document.getElementById('destinatario').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var pais = document.getElementById('pais').value;
    var calificacion = document.querySelector('input[name="calificacion"]:checked').value;
  
    // Crea un objeto con los datos del formulario
    var datos = {
      remitente: remitente,
      destinatario: destinatario,
      apellido: apellido,
      correo: correo,
      pais: pais,
      calificacion: calificacion
    };
  
    // Realiza una solicitud POST al servidor

  // Realiza una solicitud POST al servidor para enviar el correo electrónico
  
 
// Aquí deberías manejar la lógica del servidor para enviar el correo

  // Ejemplo de solicitud POST con Fetch API
  
  fetch

 
fetch('enviar_correo.php', {
    method: 'POST',
    headers: {
      
     
'Content-Type': 'application/json'
    },
    
    },
   
body: JSON.stringify(datos)
  ,);

  .then(function(response) {
    
 if (response.ok) {
  
     
alert('Correo enviado correctamente');
      // Restablece los valores del formulario
      document.getElementById('emailForm').reset();
    } else {
      
     
throw new Error('Error en la solicitud');
    }
  })
  .
    }
 

   
catch(function(error) {
    
   
console.log(error);
    alert('Hubo un error al enviar el correo');
  });
});
