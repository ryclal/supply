$(document).ready(function () {

    function toggleNavbarMethod() {
        if ($(window).width() > 768) {
            $('ul.nav li.dropdown').hover(function () {
                var dropdown = $(this);
                dropdown.find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
                dropdown.toggleClass('open');
            }, function () {
                var dropdown = $(this);
                dropdown.find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
                dropdown.toggleClass('open');
            });
        }
        else {
            $('ul.nav li.dropdown').off('mouseover').off('mouseout');
        }
    }

    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);

    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });


    //Modal open
    $('.open_modal').on('click', function () {
        var to = $(this).data('modal');

        $('body').removeClass('modal-open');
        $('#' + to).modal('hide');

        if ($(this).hasClass('first_modal')) {
            $('#loginModal').modal('show');
            $('#loginModal').modal('handleUpdate');
        }
        else if ($(this).hasClass('seconds_modal')) {
            $('#registerModal').modal('show');
            $('#registerModal').modal('handleUpdate');

        }
        else if ($(this).hasClass('third_modal')) {
            $('#register_mail_Modal').modal('show');
            $('#register_mail_Modal').modal('handleUpdate');
        }
        else  if ($(this).hasClass('fourth_modal')){
            $('#reset_password_modal').modal('show');
            $('#reset_password_modal').modal('handleUpdate');
        }
    });

    $('.reset_password_modal .btn_send').on('click',function(){
        var button = $(this) ,
            loader = button.siblings('.loader'),
            btn_sent = button.siblings('.btn_sent');

        button.css('visibility','hidden');

        setTimeout(function () {
            loader.css('display','block');
        },100);

        setTimeout(function () {
            loader.css('display','none');
            btn_sent.css('display','block');
        },2000);
    });



    var inputs = $('input[type="text"],input[type="email"],input[type="password"],textarea');

    inputs.focus(function () {
        $(this).attr("data-placeholder", $(this).attr('placeholder')).removeAttr("placeholder");
    });

    inputs.blur(function () {
        $(this).attr("placeholder", $(this).attr('data-placeholder'));
    });


    $('.wishlist_add .clickable_block').on('click', function (event) {
        event.preventDefault();

        var title,
            parent = $('wishlist_add');
        if (!parent.hasClass('added')) {
            // product was in wishlist and removed
            title = 'Add to Wishlist';
        }
        else {
            // product was NOT in wishlist and added
            title = 'Remove from Wishlist';
        }
        $(this).attr('title', title).parent('.wishlist_add').toggleClass('added', '');
    });
});