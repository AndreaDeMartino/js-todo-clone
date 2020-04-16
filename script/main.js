$(document).ready(function () {
  
  // General Variables
  var list = $('.items');
  var hobbyItems = $('.hobby-content li').length;
  $('.hobby h5').text(hobbyItems);
  var personalItems = $('.personal-content li').length;
  $('.personal h5').text(personalItems);
  var codingItems = $('.coding-content li').length;
  $('.coding h5').text(codingItems);
  var editingItems = $('.editing-content li').length;
  $('.editing h5').text(editingItems);

  // Add element with button
  $('#app').on('click', '.plus-button', function(){
    addElement();
    hobbyItems = $('.hobby-content li').length;
    $('.hobby h5').text(hobbyItems);
    personalItems = $('.personal-content li').length;
    $('.personal h5').text(personalItems);
    codingItems = $('.coding-content li').length;
    $('.coding h5').text(codingItems);
    editingItems = $('.editing-content li').length;
    $('.editing h5').text(editingItems);
    
  })

  // Add element with keyboard
  $('#app').on('keyup', '.add-item', function(e){
    
    if (e.which == 13){
      console.log('Premuto Invio su Input');
      
      addElement();
      hobbyItems = $('.hobby-content li').length;
      $('.hobby h5').text(hobbyItems);
      personalItems = $('.personal-content li').length;
      $('.personal h5').text(personalItems);
      codingItems = $('.coding-content li').length;
      $('.coding h5').text(codingItems);
      editingItems = $('.editing-content li').length;
      $('.editing h5').text(editingItems);
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
    hobbyItems = $('.hobby-content li').length;
    $('.hobby h5').text(hobbyItems);
    personalItems = $('.personal-content li').length;
    $('.personal h5').text(personalItems);
    codingItems = $('.coding-content li').length;
    $('.coding h5').text(codingItems);
    editingItems = $('.editing-content li').length;
    $('.editing h5').text(editingItems);
  })

});

// Sidebar

  // Add element with button
  $('#app').on('click', '.hobby', function(){
    console.log('hobby click');
    $('.title h1').css('color','rgb(15, 146, 15)').text('My Hobby')
    $('.todo-list .items').addClass('hide-item');
    $('.hobby-content').removeClass('hide-item');
  })

  $('#app').on('click', '.coding', function(){
    console.log('coding click');
    $('.title h1').css('color','#0974FF').text('Coding Snippets');
    $('.todo-list .items').addClass('hide-item');
    $('.coding-content').removeClass('hide-item');
  })

  $('#app').on('click', '.editing', function(){
    console.log('editing click');
    $('.title h1').css('color','red').text('Editing Projects');
    $('.todo-list .items').addClass('hide-item');
    $('.editing-content').removeClass('hide-item');
  })

  $('#app').on('click', '.personal', function(){
    console.log('personal click');
    $('.title h1').css('color','#FC9400').text('Personal To Do');
    $('.todo-list .items').addClass('hide-item');
    $('.personal-content').removeClass('hide-item');
  })