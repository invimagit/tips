<?php
 global $moppm_directory_url;
$setup_dirName = $moppm_directory_url .DIRECTORY_SEPARATOR.'views'.DIRECTORY_SEPARATOR.'account'.DIRECTORY_SEPARATOR.'link_tracer.php';
require ($setup_dirName);
?>

<strong class="moppm_main_heading"><?php echo __('Select Password Policy for users','password-policy-manager');?></strong>
      <div class="nav-tab-wrapper moppm_policy_tab">

      <label for="moppm_for_roles" class="moppm_for_roles-div nav-tab nav-tab-active">
            <input type="radio" id="moppm_for_roles" class="moppm_for_roles" name="moppm_all_users_method" value="1">
            For all Users        </label>

            <label for="moppm_for_Select_users" class="moppm_for_Select_users-div nav-tab">
            <input type="radio" id="moppm_for_Select_users" class="moppm_for_Select_users" name="moppm_all_users_method" value="0">
            Specific Roles        </label>
     </div>
    <div class="moppm_show_roles">
      <?php
    global $wp_roles;
    if (!isset($wp_roles))
    $wp_roles = new WP_Roles(); 
    $count = 1;
    foreach($wp_roles->role_names as $id => $name)
    {?>
       <span class="moppm_display_tab button button-primary"  ID="moppm_role_<?php echo esc_html($id) ?>" onclick="displayTab('<?php echo esc_html($id) ?>');" value="<?php echo esc_html($id) ?>" <?php if(get_site_option('moppm_all_users_method')){echo 'hidden';}?>> <?php echo esc_html($name) ?></span>

       <?php
       if($count%7 == 0)
            echo "<br><br><br>";
        $count = $count+1;

    }?>
    <br><br><br>
    <span class="moppm_advertise"><?php echo __('This Feature is available in our','password-policy-manager')?> <a href="admin.php?page=moppm_upgrade">Premium and Enterprise</a> <?php echo __('plugins ')?><?php echo '<a href="'.esc_html($upgrade_url).'" style="color: red">'; ?>[ UPGRADE ]</a></span>
    <hr>  
</div>
<div class="moppm_show_user_redirect">
<div  class="moppm_hide_user_redirect">
<div id="main_class" class='moppm_main_heading_container'>
    <div id="main_first">
      <strong class='moppm_heading'> <?php echo __('Password Policy Settings','password-policy-manager');?> </strong>
    
    </div>
    <div id="disable_two_factor_tour">
          <div>
              <form name="f" method="post" action="">
                <div id="enabling_password_policy" >
                  <strong class="moppm_enable_settings_text"><?php echo __(' Enable/Disable all settings','password-policy-manager');?></strong>
                  <label class="mo_wpns_switch" >
                  <input type="checkbox"  id="Moppm_enable_ppm"
                          name="Moppm_enable_ppm">    
                  <span class="mo_wpns_slider mo_wpns_round"></span>
                  </label>
                </div>
              </form>
            </div>
          </div>
 </div>
<div>
<div class="moppm_policy_container">
    <ul class="moppm_policy_heading"><li><?php echo __('Password policy','password-policy-manager'); ?></li></ul> 
    <div class='moppm_policy_row'>
      <div> <label><?php  echo __('Must contain <strong>Lower and Uppercase</strong> letter [ a-z | A-Z ]', 'password-policy-manager')?></label></div> 
      <div ><input class="moppm_checkbox" style="padding-top: 200px" type="checkbox" id="moppm_letter" name="moppm_letter" value="moppm_letter"></div> 
    </div>
    <div class='moppm_policy_row'>
      <div> <label><?php echo __( 'Must contain <strong>Numeric digits</strong> [ 0 to 9 ] ','password-policy-manager') ;?></label></div> 
      <div><input class="moppm_checkbox" type="checkbox" id="moppm_Numeric_digit" name="moppm_Numeric_digit"></div> 
    </div>
    <div class='moppm_policy_row'> 
      <div> <label><?php echo __('Must contain <strong>special characters</strong> [ @, #, $, %, etc ]','password-policy-manager') ;?></label><br></div> 
      <div><input class="moppm_checkbox" type="checkbox" id="moppm_special_char" name="moppm_special_char" value="moppm_special_char"></div> 
    </div>
    <div class='moppm_policy_row'>
      <div > <label for="quantity"><?php echo __('<strong>Length of password</strong> [ between 8 and 25 ]','password-policy-manager');?></label></div> 
      <div ><input class="moppm_selector" type="number" id="moppm_digit" name="moppm_digit" value="8" min="8" max="25"></div> 
    </div>
</div>
<div>
  <div>
      <div>
        <div class='moppm_expiry_head'>
          <ul class="moppm_policy_heading"><li><?php echo __('Force reset password','password-policy-manager') ?></ul>
      </div>
      <div class='moppm_policy_row'>
        <strong> <label><?php echo __('Force reset password on first login','password-policy-manager')?> </label></strong>
        <div><input class="moppm_checkbox" type="checkbox" id="moppm_first_reset" name="moppm_first_reset" value="moppm_first_reset"></div> 
    </div>
  </div>
</div>
<div>
  <div>
      <div>
        <div class='moppm_expiry_head'>
          <ul class="moppm_policy_heading"><li><?php echo __('Enable expiration time','password-policy-manager'); ?></ul>
      </div>
      <div class='moppm_policy_row'>
        <div>
          <?php echo __('Password will be expired after 7 weeks','password-policy-manager');?></div>
          <div class="moppm_expiry_toggle"> <input class="moppm_selector" style="width: 70px; height: 2%;"type="number" id="moppm_expiration_time" name="moppm_expiration_time" value="7" min="7" max="7" disabled>       
          </div>
          <div><?php echo __('Enable/disable Password expiry','password-policy-manager');?></div>
          <div>
                <label class="moppm_switch" >
                <input type="checkbox"  id="moppm_enable_disable_expiry"
                      name="moppm_enable_disable_expiry">    
                <span class="moppm_switch_slider moppm_switch_round"></span>
                </label>
        </div>
        </div>
    </div>
  </div> 
</div>
<br>

<div class="moppm_policy_submit">
    <input type="button" value="<?php echo __( 'Save Settings','password-policy-manager') ?>"  id="moppm_save_form" class="button button-primary button-large">
</div>
<br>
<div class="moppm_reset_password"> 
    <ul class="moppm_policy_heading"><li><?php echo __('One-click Reset Password','password-policy-manager');?></li></ul>
    <div class='moppm_policy_row' style="border:none">
        <strong><?php echo __('Terminates all logged in sessions for the users and resets their Password. Users need to set up a new Password via a Reset link sent on their email.','password-policy-manager');?></strong>       
      <div class="moppm_reset_btn"><input type="button" value="<?php echo __('Reset Password','password-policy-manager')?>" id="moppm_reset_pass" class="button button-large"></div>
    </div>  
</div>
</div>
<script>
      
      jQuery('.moppm_show_roles').hide();
      
      
      function displayTab(role){
          role_name_value = role;
          jQuery('.moppm_display_tab').removeClass("moppm_blue");
          jQuery('.moppm_display_tab').addClass("moppm_btn");
          jQuery('#moppm_role_'+role).removeClass("moppm_btn");
          jQuery('#moppm_role_'+role).addClass("moppm_blue");
          jQuery('#moppm_for_all_'+role).show();
          jQuery('.moppm_show_user_redirect').show();
          jQuery('.moppm_hide_user_redirect').find('input, textarea, button, select').attr('disabled','disabled');
        }
        jQuery('#moppm_for_roles' ).click(function(){
             jQuery('.moppm_show_roles').hide();
             jQuery('.moppm_show_user_redirect').show();
             jQuery('.moppm_hide_user_redirect').find('input, textarea, button, select').removeAttr('disabled');
             jQuery('.moppm_for_Select_users-div').removeClass('nav-tab-active');
             jQuery('.moppm_for_roles-div').addClass('nav-tab-active');
      
           })
           jQuery('#moppm_for_Select_users').click(function(){
          
             jQuery('.moppm_show_roles').show();
              jQuery('.moppm_show_user_redirect').hide();
              jQuery('.moppm_for_Select_users-div').addClass('nav-tab-active');
              jQuery('.moppm_for_roles-div').removeClass('  nav-tab-active');
            
           })
      
              var Moppm_enable_ppm = "<?php echo esc_html (get_site_option('Moppm_enable_disable_ppm'));?>";
                   if(Moppm_enable_ppm == 'on')
                      {
                          jQuery('#Moppm_enable_ppm').prop("checked",true);   
                      }
                      else
                      {
                          jQuery('#Moppm_enable_ppm').prop("checked",false);
                      }
              jQuery("#Moppm_enable_ppm").click(function()
                  {
      
                      var Moppm_enable_ppm = jQuery("input[name='Moppm_enable_ppm']:checked").val();
                      var nonce = '<?php echo wp_create_nonce("WAFsettingNonce");?>';
                      if(Moppm_enable_ppm != '')
                      {
                          var data = {
                                      'action'                            : 'moppm_ajax',
                                      'option'                            : 'moppm_setting_enable_disable',
                                      'Moppm_enable_ppm'                  :  Moppm_enable_ppm,
                                      'nonce'                             :  nonce
                                  };
                              jQuery.post(ajaxurl, data, function(response) 
                              {
                                  var response = response.replace(/\s+/g,' ').trim();
                                  if (response == "true"){
                                      Moppm_success_msg("Password policy setting is now enabled");
                                  }
                                  else{
                                          Moppm_error_msg("Password policy is now disabled.");
                                      }
                              });
                      }
                  });
          </script>
        <script>  
                  const moppm_Numeric_digit= "<?php echo esc_html(get_site_option('moppm_Numeric_digit',0));?>";
                  const moppm_enable_disable_expiry= "<?php echo esc_html(get_site_option('moppm_enable_disable_expiry',0));?>";
                  const moppm_letter= "<?php echo esc_html(get_site_option('moppm_letter',0));?>";
                  const moppm_special_char= "<?php echo esc_html(get_site_option('moppm_special_char',0));?>";
                  const moppm_first_reset= "<?php echo esc_html(get_site_option('moppm_first_reset',0));?>";
                  const moppm_digit= "<?php echo  esc_html(get_site_option('moppm_digit'),8);?>";
      
                  
                  jQuery('#moppm_Numeric_digit').prop("checked",parseInt(moppm_Numeric_digit));   
                  jQuery('#moppm_enable_disable_expiry').prop("checked",parseInt(moppm_enable_disable_expiry));   
                  jQuery('#moppm_letter').prop("checked",parseInt(moppm_letter));  
                  jQuery('#moppm_special_char').prop("checked",parseInt(moppm_special_char));    
                  jQuery('#moppm_first_reset').prop("checked",parseInt(moppm_first_reset));  
                  jQuery('#moppm_digit').val(moppm_digit);
      
      
              jQuery("#moppm_save_form").click(function()
              {
                  jQuery("#moppm_save_form").attr('disabled','disabled');
                  var nonce = '<?php echo wp_create_nonce("WAFsettingNonce");?>'; 
                          var data = {
                                      'action'                            :  'moppm_ajax',
                                      'option'                            :  'moppm_setting_enable_disable_form',
                                      'moppm_save_form'                   :   'moppm_save_form',
                                      'nonce'                             :   nonce,
                                      'moppm_special_char'                :   jQuery("#moppm_special_char").is(':checked'),
                                      'moppm_Numeric_digit'               :   jQuery("#moppm_Numeric_digit").is(':checked'),
                                      'moppm_enable_disable_expiry'       :   jQuery("#moppm_enable_disable_expiry").is(':checked'),
                                      'moppm_letter'                      :   jQuery("#moppm_letter").is(':checked'),
                                      'moppm_first_reset'                 :   jQuery("#moppm_first_reset").is(':checked'),
                                      'moppm_digit'                       :   jQuery("#moppm_digit").val(),
                                      
                                  };
                              jQuery.post(ajaxurl, data, function(response) 
                              {
                                  var response = response.replace(/\s+/g,' ').trim(); 
                                   jQuery("#moppm_save_form").removeAttr('disabled');
                                   if(response == 'Exp_Time_Invalid')
                                      Moppm_error_msg('Please enter expiration time in given range');
                                  else if(response == 'Digit_Invalid')
                                      Moppm_error_msg('Please enter the characters of password between given range');
                                  else
                                      Moppm_success_msg('Your Password policy Settings are saved');
                              });
              }); 
      
          jQuery("#moppm_reset_pass").click(function()
              {
                  jQuery("#moppm_reset_pass").attr('disabled','disabled');
                  var nonce = '<?php echo wp_create_nonce("moppm_reset_nonce");?>'; 
                          var data = {
                                      'action'                            :  'moppm_ajax',
                                      'option'                            :  'moppm_reset_button',
                                      'moppm_reset_form'                  :  'moppm_reset_form',
                                      'nonce'                             :   nonce,
                                  };
                              jQuery.post(ajaxurl, data, function(response) 
                              {
                                  var response = response.replace(/\s+/g,' ').trim(); 
                                  jQuery("#moppm_reset_pass").removeAttr('disabled');
                                   if(response == 'reset_not_submit')
                                      Moppm_error_msg('Please click again');
                                  else if (response == 'SMTP_NOT_SET') {
                                      Moppm_error_msg("Please Configure SMTP to Reset Your all user password");
                                    }
                                   else if (response == 'attempts_over')
                                      Moppm_error_msg('Your Reset password limit is expire please upgraded to premium');
                                  else
                                      Moppm_success_msg('Your all user password is reset');
                              });
              }); 
      
              function Moppm_success_msg(success) {
                jQuery('#moppm_message').empty();
                var msg = "<div id='notice_div' class='moppm_overlay_success'><div class='popup_text'>&nbsp; &nbsp; "+success+"</div></div>";
                jQuery('#moppm_message').append(msg);
                window.onload = Moppm_nav_popup();
              }
              function Moppm_nav_popup() {
                document.getElementById("notice_div").style.width = "40%";
                document.getElementById("notice_div").style.height = "8%";
                setTimeout(function(){ jQuery('#notice_div').fadeOut('slow'); }, 3000);
              }
              function Moppm_error_msg(error) 
              {
                jQuery('#moppm_message').empty();
                var msg = "<div id='notice_div' class='moppm_overlay_error'><div class='popup_text'>&nbsp; &nbsp; "+error+"</div></div>";
                jQuery('#moppm_message').append(msg);
                window.onload = Moppm_nav_popup();
              }
      </script>
      
      