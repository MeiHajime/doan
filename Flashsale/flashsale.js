$(document).ready(function (){
    const saleEndTime = new Date("2025-12-31T23:59:59").getTime();
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = saleEndTime - now;
      if(timeLeft>0){
        const hours = Math.floor((timeLeft%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        const minutes = Math.floor((timeLeft%(1000 * 60 * 60))/(1000 * 60));
        const seconds = Math.floor((timeLeft%(1000 * 60))/1000);
        $(".countdown").html(`Kết thúc trong: <span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span>`);
    }else{
        $(".countdown").html("Flash Sale Ended");
        clearInterval(countdownInterval);
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
});
$(document).ready(function(){
    $(".sale-hours div").click(function(){
        $(".sale-hours div").removeClass("selected");
        $(this).addClass("selected");
    });
});

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