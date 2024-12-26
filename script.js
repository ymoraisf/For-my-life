$(document).ready(function() {
    $('#navbar').on('click', function () {
        $('#mobile_nav_list').toggleClass('active');
        $('#navbar').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

   
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    

  
