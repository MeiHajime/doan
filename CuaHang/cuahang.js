$(document).ready(function(){
    const productPage=12;
    function showPage(page){
        $(".product-item").css("display","none");
        const start=(page-1)*productPage;
        const end=start+productPage;
        $(".product-item").slice(start,end).css("display","block");
    }
    $(".page-btn").on("click",function(){
        const page=$(this).data("page");
        $(".page-btn").removeClass("active");
        $(this).addClass("active");
        showPage(page);
    });
    showPage(1);
});
$(document).ready(function(){
  $('input[name="sanpham"]').on('change',function(){
    let selectedCategory=$(this).val();
    $('.product-item').hide();
    $('.product-item[data-category="'+selectedCategory+'"]').show();
    $('.product-item').fadeOut();
    $('.product-item[data-category="'+selectedCategory+'"]').fadeIn();
  });
});
$(document).ready(function(){
  $('input[name="sanpham"]').on('change',function(){
    let selectedRange=$(this).val();
    $('.product-item').hide();
    $(`.product-item[data-price-range="${selectedRange}"]`).show();
    $('.product-item').fadeOut();
    $(`.product-item[data-price-range="${selectedRange}"]`).fadeIn();
  });
})

document.addEventListener('DOMContentLoaded', function() {
  var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu > a');
  dropdownSubmenus.forEach(function(dropdownSubmenu) {
      dropdownSubmenu.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          
          var submenu = this.nextElementSibling;
          var allSubmenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu');
          
          allSubmenus.forEach(function(menu) {
              if (menu !== submenu) {
                  menu.style.display = 'none';
              }
          });
          
          if (submenu.style.display === 'block') {
              submenu.style.display = 'none';
          } else {
              submenu.style.display = 'block';
          }
      });
  });
});