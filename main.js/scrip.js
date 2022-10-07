$(document).ready(function(){

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_item[category="todo"]').addClass('ct_item-active');
  
    // FILTRANDO PRODUCTOS  ============================================
  
    $('.category_item').click(function(){
      var catProduct = $(this).attr('category');
      console.log(catProduct);
  
      // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
      $('.category_item').removeClass('ct_item-active');
      $(this).addClass('ct_item-active');
  
      // OCULTANDO PRODUCTOS =========================
      $('.games_item').css('transform', 'scale(0)');
      function hideProduct(){
        $('.games_item').hide();
      } setTimeout(hideProduct,400);
  
      // MOSTRANDO PRODUCTOS =========================
      function showProduct(){
        $('.games_item[category="'+catProduct+'"]').show();
        $('.games_item[category="'+catProduct+'"]').css('transform', 'scale(1)');
      } setTimeout(showProduct,400);
    });
  
    // MOSTRANDO TODOS LOS PRODUCTOS =======================
  
    $('.category_item[category="todo"]').click(function(){
      function showAll(){
        $('.games_item').show();
        $('.games_item').css('transform', 'scale(1)');
      } setTimeout(showAll,400);
    });
  });