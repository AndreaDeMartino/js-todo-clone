$(document).ready(function () {
  
  // General Variables
  var list = $('.items');

  // Add element with button
  $('#app').on('click', '.plus-button', function(){
    addElement();
    
  })

  // Add element with keyboard
  $('#app').on('keyup', '.add-item', function(e){
    
    if (e.which == 13){
      console.log('Premuto Invio su Input');
      
      addElement();
    }
  })

  // Add Element Function
  function addElement() {
    // Clono struttura template li
    var item = $('.template li').clone();
    // Prendo valore da inputbox
    itemValue = $('.add-item').val().trim();
    console.log('Valore Input Box Prelevato:', itemValue);
    if (itemValue == '') {
      alert('Attenzione, non hai inserito un testo valido')
    } else{
      // Aggiungo valore inputbox a clone
      item.append(itemValue);

      // Inserisco il tutto in lista
      list.append(item);

      // Svuoto InputBox
      $('.add-item').val('');
    }
  }

  // Selection items logic
  $('#app').on('click','.item i', function(){
    console.log('Click Icon');
    var icon = $(this);
    if (icon.hasClass('far')){
      icon.removeClass('far').addClass('fas').css('color','#F9A35C');
    } else{
      icon.removeClass('fas').addClass('far').css('color','#ccc');
    }
  })

  // Remove Item
  $('#app').on('click','.delete-button', function(){
    console.log('delete');
    $('.fas').parent('li').remove();
  })

});