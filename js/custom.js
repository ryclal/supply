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

    $('.modal').on('hidden.bs.modal', function () {
        $(this).find('form')[0].reset();
    });

    $('*').click(function (event) {
        if (!$(event.target).closest('.search_b').length) {
            $('.search_b').removeClass('expand');
        }
    });

    // Split view
    $('.split_view_block .split').unbind().on('click', function () {
        var prev_element = $(this),
            prev_value = prev_element.data('open');

        if (!prev_element.hasClass('active')) {
            var active_element = $('.split_view_block .split.active'),
                active_value = active_element.data('open');

            active_element.removeClass('active');
            prev_element.addClass('active');

            $('.product_side ' + '.' + active_value).removeClass('hidden');
            $('.product_side ' + '.' + prev_value).addClass('hidden');
        }
        return false;
    });


    //Colors checkbox

    $(".color_list label").click(function () {

        $(".color_list").addClass('darker');
        $(this).toggleClass('active');

    });

    $('.search_trigger').unbind().on('click', function () {
        $(this).parents('#search_b').toggleClass('expand');
    });


    var slider_b = $('#slider');
    slider_b.slider({
        range: true,
        min: 0,
        max: 1000,
        values: [75, 300],
        slide: function (event, ui) {
            $(".slider_block .first_value").text("$" + ui.values[0]);
            $(".slider_block .second_value").text("$" + ui.values[1]);
        }
    });
    $('.slider_block .first_value').text("$" + slider_b.slider("values", 0));
    $('.slider_block .second_value').text("$" + slider_b.slider("values", 1));


    $("#filter_select,#filter_select_1").selectmenu();


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
        else if ($(this).hasClass('fourth_modal')) {
            $('#reset_password_modal').modal('show');
            $('#reset_password_modal').modal('handleUpdate');
        }
    });

    $('.reset_password_modal .btn_send').on('click', function () {
        var button = $(this),
            loader = button.siblings('.loader'),
            btn_sent = button.siblings('.btn_sent');

        button.css('visibility', 'hidden');

        setTimeout(function () {
            loader.css('display', 'block');
        }, 100);

        setTimeout(function () {
            loader.css('display', 'none');
            btn_sent.css('display', 'block');
        }, 2000);
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
})
;