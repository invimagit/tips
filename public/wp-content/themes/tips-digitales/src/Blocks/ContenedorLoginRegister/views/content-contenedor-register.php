<?php
?>
<div class="modal fade modal-formulario" id="modalRegister" tabindex="-1" role="dialog" aria-labelledby="modalRegisterLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-register">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="content-fluid">
          <div class="row p-1 mt-3">
            <div class="col-12">
              <div class="title-cursos-icon px-md-5 px-2">
                <span class="iconWaterBlue"></span>
                <span class="iconWater"></span>
              </div>
              <h3 class="title-secciones px-md-5 px-2">¡Quiero Participar!</h3>
              <div class="descripcion-secciones pt-3 px-2">
                <form action="" data-toggle="validator" enctype="multipart/form-data" class="wpcf7-form" id="registerForm" method="post" novalidate="novalidate">
                  
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Nombre y apellido<span class="text-danger">*</span></label>
                            <input type="text" class="wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerName" aria-invalid="false" value="" name="registerName" required="required" required>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Tipo de documento de identidad<span class="text-danger">*</span></label>
                            <select class="form-select wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerTipoDocumento" aria-invalid="false" name="registerTipoDocumento" required="required" required>
                              <option value="default" selected>Seleccionar</option>
                              <option value="CEDULA">CEDULA</option>
                              <option value="PASAPORTE">PASAPORTE</option>
                              <option value="CEDULA DE EXTRANJERIA">CEDULA DE EXTRANJERIA</option>
                              <option value="TARJETA DE IDENTIDAD">TARJETA DE IDENTIDAD</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label class="form-label">Número de documento de identidad<span class="text-danger">*</span></label>
                            <input type="text" class="wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerDocumento" aria-invalid="false" value="" name="registerDocumento" required="required" required>
                          </div>
                        </div>
                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Fotografía<span class="text-danger">*</span></label>
                            <div id="image-preview">

                              <label for="registerFoto" id="image-label">Subir foto</label>
                              <input type="file" id="registerFoto" name="registerFoto" >
                              <span id="registerFoto-error" class="text-danger label-danger"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Número de teléfono<span class="text-danger">*</span></label>
                            <input type="text" class="wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerTelefono" aria-invalid="false" value="" name="registerTelefono" required="required" required>
                          </div>
                        </div>

                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Fecha de nacimiento<span class="text-danger">*</span></label>
                            <input type="text" class="wpcf7-form-control wpcf7-text form-control" id="registerDate" aria-required="true" aria-invalid="false" value="" name="registerDate" required="required" required onkeydown="return false">
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Correo eletrónico<span class="text-danger">*</span></label>
                            <input type="email" class="wpcf7-form-control wpcf7-text wpcf7-email form-control" aria-required="true" id="registerEmail" aria-invalid="false" value="" name="registerEmail" required="required" required>
                          </div>
                        </div>

                        <div class="col-12 col-lg-6">
                          <div class="mb-3">

                            <label class="form-label">Identidad de género<span class="text-danger">*</span></label>
                            <select class="form-select wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerIdentidadGenero" aria-invalid="false" name="registerIdentidadGenero" required="required" required>
                              <option value="default" selected>Seleccionar</option>
                              <option value="Femenino">Femenino</option>
                              <option value="Masculino">Masculino</option>
                              <option value="Hombre Transgenero">Hombre Transgenero</option>
                              <option value="Mujer Transgenero">Mujer Transgenero</option>
                              <option value="Bigenero">Bigenero</option>
                              <option value="No Binario">No Binario</option>
                              <option value="No sabe">No sabe/No contesta</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Localidad en la que vive<span class="text-danger">*</span></label>
                            <select class="form-select wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerLocalidad" aria-invalid="false" name="registerLocalidad" required="required" required>
                              <option value="default" selected>Seleccionar</option>
                              <option value="Antonio Nariño">Localidad de Antonio Nariño</option>
                              <option value="Barrios Unidos">Localidad de Barrios Unidos</option>
                              <option value="Bosa">Localidad de Bosa</option>
                              <option value="Chapinero">Localidad de Chapinero</option>
                              <option value="Ciudad Bolívar">Localidad de Ciudad Bolívar</option>
                              <option value="Engativá">Localidad de Engativá</option>
                              <option value="Fontibón">Localidad de Fontibón</option>
                              <option value="Kennedy">Localidad de Kennedy</option>
                              <option value="La Candelaria">Localidad de La Candelaria</option>
                              <option value="Los Mártires">Localidad de Los Mártires</option>
                              <option value="Puente Aranda">Localidad de Puente Aranda</option>
                              <option value="Rafael Uribe Uribe">Localidad de Rafael Uribe Uribe</option>
                              <option value="San Cristóbal">Localidad de San Cristóbal</option>
                              <option value="Santa Fe">Localidad de Santa Fe</option>
                              <option value="Suba">Localidad de Suba</option>
                              <option value="Sumapaz">Localidad de Sumapaz</option>
                              <option value="Teusaquillo">Localidad de Teusaquillo</option>
                              <option value="Tunjuelito">Localidad de Tunjuelito</option>
                              <option value="Usaquén">Localidad de Usaquén</option>
                              <option value="Usme">Localidad de Usme</option>
                            </select>                          
                          </div>
                        </div>

                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">¿A qué población diferencial pertenece?<span class="text-danger">*</span></label>
                            <select class="selectpicker form-select wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerPoblacionDiferencial" aria-invalid="false" name="registerPoblacionDiferencial" title="Selecciona uno o varios elementos" required="required" required multiple>
                              <option value="Gestante">Gestante</option>
                              <option value="Persona con discapacidad">Persona con discapacidad</option>
                              <option value="Víctima del conflicto armado">Víctima del conflicto armado</option>
                              <option value="Población LGTBIQ+">Población LGTBIQ+</option>
                              <option value="Excombatientes">Excombatientes</option>
                              <option value="Persona en condición de calle">Persona en condición de calle</option>
                              <option value="Campesino/Campesina">Campesino/Campesina</option>
                              <option value="Persona usuaria de drogas">Persona usuaria de drogas</option>
                              <option value="Afrodescendientes">Afrodescendientes</option>
                              <option value="Negro/a">Negro/a</option>
                              <option value="Palenquero/a">Palenquero/a</option>
                              <option value="Raizal">Raizal</option>
                              <option value="Indígena">Indígena</option>
                              <option value="Rom o gitano">Rom o gitano</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <div class="mb-3">
                            <label class="form-label">Organización ciudadana o proceso de participación al cual pertenece<span class="text-danger">*</span></label>
                            <select class="selectpicker form-select wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerOrganiacionCiudadana" aria-invalid="false" name="registerOrganiacionCiudadana" title="Selecciona uno o varios elementos" required="required" required multiple>
                              <option value="COPACOS">COPACOS</option>
                              <option value="Asociación de usuarios">Asociación de usuarios</option>
                              <option value="Juntas asesoras">Juntas asesoras</option>
                              <option value="Comités de ética">Comités de ética</option>
                              <option value="Veedurías en salud">Veedurías en salud</option>
                              <option value="Organización social">Organización social</option>
                              <option value="Otra">Otra</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-12 col-lg-6">
                          <div class="mb-3" id="otraOrganizacion">
                            <label class="form-label">Otra organización<span class="text-danger">*</span></label>
                            <input type="text" class="wpcf7-form-control wpcf7-text form-control" aria-required="true" id="registerOtraOrganizacion" aria-invalid="false" value="" name="registerOtraOrganizacion" required="required" required>
                          </div>

                          <div class="mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="registerAceptarRegistro" name="registerAceptarRegistro" aria-required="true" aria-invalid="false" required="required" required>
                            <label class="form-label addPointer" for="registerAceptarRegistro">Acepta politica de tratamiento de datos<span class="text-danger">*</span></label>
                          </div>

                          <div class="col-* d-flex justify-content-center">

                            <input name="action" value="ajax_register" type="hidden"/>

                            <input type="submit" class="wpcf7-form-control wpcf7-login btn btn-primary p-1 m-1 col-12 col-sm-12 col-md-6" value="Terminar registro">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>