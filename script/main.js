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
    refreshIndex();
  })

  // Add element with keyboard
  $('#app').on('keyup', '.add-item', function(e){
    
    if (e.which == 13){
      console.log('Premuto Invio su Input');
      addElement();
      refreshIndex();
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
    refreshIndex();
  })
});

// Sidebar

  // Add element with button
  $('#app').on('click', '.personal', function(){
    console.log('personal click');
    refreshOnClick(($('.personal-content')),'Personal To Do','#FC9400')
  })

  $('#app').on('click', '.hobby', function(){
    console.log('hobby click');
    refreshOnClick(($('.hobby-content')),'My Hobby','rgb(15, 146, 15)')
  })

  $('#app').on('click', '.coding', function(){
    console.log('coding click');
    refreshOnClick(($('.coding-content')),'Coding Snippets','#0974FF')
  })

  $('#app').on('click', '.editing', function(){
    console.log('editing click');
    refreshOnClick(($('.editing-content')),'Editing Projects','red')
  })

  function refreshOnClick(category,text,color){
    $('.title h1').css('color',color).text(text);
    $('.todo-list .items').addClass('hide-item');
    $(category).removeClass('hide-item');
  }

  function refreshIndex(){
    hobbyItems = $('.hobby-content li').length;
    $('.hobby h5').text(hobbyItems);
    personalItems = $('.personal-content li').length;
    $('.personal h5').text(personalItems);
    codingItems = $('.coding-content li').length;
    $('.coding h5').text(codingItems);
    editingItems = $('.editing-content li').length;
    $('.editing h5').text(editingItems);
  }