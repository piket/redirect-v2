var firstName = $('#firstName');
var lastName = $('#lastName');
var company = $('#company');
var email = $('#email');

$('#survey').on('submit', function(e) {
    var valid = true;
    if(firstName.val().length < 1) {
        valid = false;
        firstName.addClass('invalid').next('label').addClass('active');
    }
    if(lastName.val().length < 1) {
        valid = false;
        lastName.addClass('invalid').next('label').addClass('active');
    }
    if(company.val().length < 2) {
        valid = false;
        company.addClass('invalid').next('label').addClass('active');
    }
    if(email.val().match(/(.+)@(.+){2,}\.(.+){2,}/) === null) {
        valid = false;
        email.addClass('invalid').next('label').addClass('active');
    }

    if(!valid || $('.invalid').length > 0) {
        e.preventDefault();
    }
});