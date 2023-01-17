jQuery(document).ready(function ($)
{
  let options =
  {
    theme: "sk-rect",
    message: 'Cargando, espere un momento',
    textColor: "white"
  };

  $('#registerDate').datepicker({
      language: "es",
      endDate: '+1d',
      datesDisabled: '+1d',
      autoclose: true,
      enableOnReadonly: false,
  });

  $('.selectpicker').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue)
  {
    let elementName = jQuery(this).attr('name');

    if(isSelected == true)
    {
      jQuery(this).nextAll('.dropdown-toggle:first').removeClass('is-invalid');
      jQuery('#' + elementName + '-error').hide();

      if(elementName == 'registerOrganiacionCiudadana')
      {
        if(clickedIndex == 6)
        {
          jQuery('#otraOrganizacion').show();
        }
      }
    }
    else
    {
      if(previousValue.length == 1)
      {
        jQuery(this).nextAll('.dropdown-toggle:first').addClass('is-invalid');
        jQuery('#' + elementName + '-error').text('El campo es obligatorio').show();
      }

      if(elementName == 'registerOrganiacionCiudadana')
      {
        if(clickedIndex == 6)
        {
          jQuery('#otraOrganizacion').hide();
        }
      }
    }
  });

  let modalRecoverPass = new bootstrap.Modal(document.getElementById('modalRecoverPass'),
  {
    backdrop: true,
    keyboard: false
  });

  let modalRegister = new bootstrap.Modal(document.getElementById('modalRegister'),
  {
    backdrop: true,
    keyboard: false
  });

  $( "#loginForm" ).validate(
  {
    rules:
    {
      'email':
      {
        required: true,
        custom_email: true
      },
      'password':
      {
        required: true,
        strong_password: true
      }
    },
    messages:
    {
      'email':
      {
        required: "El campo es obligatorio",
        email: "El campo debe tener formato de email correcto"
      },
      'password':
      {
        required: "El campo es obligatorio",
      }
    },
    submitHandler: function(form)
    {
      HoldOn.open(options);

      jQuery.ajax(
      {
        type: 'POST',
        url: ajaxURL,
        data:
        {
          action: 'ajax_login',
          email: $("#loginEmail").val(),
          pass: $("#loginPass").val()
        },
        success: function (response)
        {
          let data = null;

          try
          {
            data = JSON.parse(response);
          } catch (e) {}

          if (data != null)
          {
            if(data.type == 'success')
            {
              jQuery(location).attr('href', data.redirectURL);
            }
            else
            {
              HoldOn.close();
              swal('<div class="textSuccessFormulario">' + data.title + '</div>', data.message, data.type);
            }
          }
          else
          {
            HoldOn.close();
            swal('<div class="textSuccessFormulario">Error</div>', "Ocurrio un error", "error");
          }
        },
        error: function (response)
        {
          HoldOn.close();
        },
        fail: function (response)
        {
          HoldOn.close();
        }
      });
    }
  });

  $( "#recoverPassForm" ).validate(
  {
    rules:
    {
      'email':
      {
        required: true,
        custom_email: true
      },
    },
    messages:
    {
      'email':
      {
        required: "El campo es obligatorio",
        email: "El campo debe tener formato de email correcto"
      },
    },
    submitHandler: function(form)
    {
      HoldOn.open(options);

      jQuery.ajax(
      {
        type: 'POST',
        url: ajaxURL,
        data:
        {
          action: 'ajax_recover_pass',
          email: $("#recoverPassEmail").val(),
        },
        success: function (response)
        {
          HoldOn.close();
          let data = null;

          try
          {
            data = JSON.parse(response);
          } catch (e) {}

          if (data != null)
          {
            swal(data.title, data.message, data.type);
          }
          else
          {
            swal("Error", "Ocurrio un error", "error");
          }
        },
        error: function (response)
        {
          HoldOn.close();
        },
        fail: function (response)
        {
          HoldOn.close();
        }
      });
    }
  });

  $( "#registerForm" ).validate(
  {
    rules:
    {
      'registerName':
      {
        required: true,
      },
      'registerTipoDocumento':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerDocumento':
      {
        required: true,
      },
      'registerTelefono':
      {
        required: true,
        maxlength: 10,
        minlength: 10,
        digits: true
      },
      'registerDate':
      {
        required: true,
      },
      'registerEmail':
      {
        required: true,
        custom_email: true
      },
      'registerIdentidadGenero':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerLocalidad':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerOrganiacionCiudadana':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerPoblacionDiferencial':
      {
        required: true,
        valueNotEquals: "default"
      },
      'registerOtraOrganizacion':
      {
        required: true,
      },
      'registerAceptarRegistro':
      {
        required: true,
      },
    },
    messages:
    {
      'registerName':
      {
        required: "El campo es obligatorio",
      },
      'registerTipoDocumento':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerDocumento':
      {
        required: "El campo es obligatorio",
      },
      'registerTelefono':
      {
        required: "El campo es obligatorio",
        maxlength: "El teléfono debe contener 10 digitos",
        minlength: "El teléfono debe contener 10 digitos",
        digits: "El campo solo acepta números"
      },
      'registerDate':
      {
        required: "El campo es obligatorio",
      },
      'registerEmail':
      {
        required: "El campo es obligatorio",
        email: "El campo debe tener formato de email correcto"
      },
      'registerIdentidadGenero':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerLocalidad':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerOrganiacionCiudadana':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerPoblacionDiferencial':
      {
        required: "El campo es obligatorio",
        valueNotEquals: "El campo es obligatorio"
      },
      'registerOtraOrganizacion':
      {
        required: "El campo es obligatorio",
      },
      'registerAceptarRegistro':
      {
        required: "El campo es obligatorio",
      },
    },
    submitHandler: function(form)
    {
      HoldOn.open(options);

      var formData = new FormData(document.getElementById("registerForm"));

      jQuery.ajax(
      {
        type: 'POST',
        url: ajaxURL,
        processData: false,
        contentType: false,
        data: formData,
        success: function (response)
        {
          let data = null;

          try
          {
            data = JSON.parse(response);
          } catch (e) {}

          if (data != null)
          {
              HoldOn.close();
              swal('<div class="textSuccessFormulario">' + data.title + '</div>', data.message, data.type);
          }
          else
          {
            HoldOn.close();
            swal('<div class="textSuccessFormulario">Error</div>', "Ocurrio un error", "error");
          }
        },
        error: function (response)
        {
          console.log("Error");
          console.log(response);
          HoldOn.close();
        },
        fail: function (response)
        {
          console.log("Fail");
          console.log(response);
          HoldOn.close();
        }
      });
    }
  });

  $.uploadPreview(
  {
    input_field: "#registerFoto",   // Default: .image-upload
    preview_box: "#image-preview",  // Default: .image-preview
    label_field: "#image-label",    // Default: .image-label
    label_default: "Subir foto",   // Default: Choose File
    label_selected: "Cambiar foto",  // Default: Change File
    no_label: false                 // Default: false
  });

});

jQuery.validator.setDefaults(
{
  highlight: function(element)
  {
    jQuery(element).closest('.form-control').addClass('is-invalid');

    if(jQuery(element).hasClass('selectpicker'))
    {
      jQuery(element).nextAll('.dropdown-toggle:first').addClass('is-invalid');
    }
  },
  unhighlight: function(element)
  {
    jQuery(element).closest('.form-control').removeClass('is-invalid');

    if(jQuery(element).hasClass('selectpicker'))
    {
      jQuery(element).nextAll('.dropdown-toggle:first').removeClass('is-invalid');
    }
  },
  errorElement: 'span',
  errorClass: 'text-danger label-danger',
  errorPlacement: function(error, element)
  {
      if(element.parent('.input-group').length)
      {
          error.insertAfter(element.parent());
      }
      else
      {
          error.insertAfter(element);
      }
  }
});

jQuery.validator.addMethod("custom_email", function(value, element)
{
  return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
}, "El campo debe tener formato de email correcto");

jQuery.validator.addMethod("strong_password", function (value, element)
{
    let password = value;

    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{8,20}$)/.test(password)))
    {
        return false;
    }
    return true;
}, function (value, element)
{
    let password = jQuery(element).val();

    if (!(/^(.{8,20}$)/.test(password))) {
        return 'La contraseña debe tener entre 8 y 20 caracteres.';
    }
    else if (!(/^(?=.*[A-Z])/.test(password))) {
        return 'La contraseña debe contener al menos una mayúscula.';
    }
    else if (!(/^(?=.*[a-z])/.test(password))) {
        return 'La contraseña debe contener al menos una minúscula.';
    }
    else if (!(/^(?=.*[0-9])/.test(password))) {
        return 'La contraseña debe contener al menos un dígito.';
    }
   
/*
    else if (!(/^(?=.*[@#$%&])/.test(password))) {
        return "Password must contain special characters from @#$%&.";
    }
*/
    return false;
});

jQuery.validator.addMethod("valueNotEquals", function(value, element, arg)
{
  return arg !== value;
});

function showPassword()
{
  var x = document.getElementById("loginPass");
  
  if (x.type === "password")
  {
    x.type = "text";
  }
  else
  {
    x.type = "password";
  }
}