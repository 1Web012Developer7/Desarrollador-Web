
  // Solicitar el nombre del usuario utilizando SweetAlert2
  Swal.fire({
        title: 'Bienvenido/a',
        input: 'text',
        inputLabel: 'Por favor, ingresa tu nombre',
        showCancelButton: false,
        confirmButtonText: 'Continuar',
        allowOutsideClick: false,
        inputValidator: (value) => {
          if (!value) {
            return 'Debes ingresar un nombre';
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Mostrar mensaje de bienvenida utilizando SweetAlert2
          Swal.fire({
            icon: 'success',
            title: '¡Bienvenido/a, ' + result.value + '!',
            showConfirmButton: false,
            timer: 3000
          });
  
          // Actualizar el mensaje en el contenedor de la animación
          var welcomeMessage = document.getElementById("welcomeMessage");
          welcomeMessage.textContent = "¡Bienvenido/a, " + result.value + "!";
        }
      });
  
