// $('ul.nav li.dropdown').hover(function() {
//     var dropdown = $(this);
//     dropdown.find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//     dropdown.toggleClass('open');
// }, function() {
//     var dropdown = $(this);
//     dropdown.find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//     dropdown.toggleClass('open');
// });

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