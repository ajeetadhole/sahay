// Project Title: Sahay
// Author: Ajeeta Dhole
// Version 1.0 April-May 2014

$(document).ready(function(){
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var documentHeight = $(document).height();
    var candidatePreferencesModalWidth = $('#candidatePreferencesModal').width();
    var signUpModalWidth = $('#signUpModal').width();
    var paymentsModalWidth = $('#paymentsModal').width();

    $('#landingBackground').css({
        width: viewportWidth,
        height: viewportHeight,
    });

    $('#candidatePreferencesModal').css({
        left:(viewportWidth-candidatePreferencesModalWidth)/2,
    });

    $('#signUpModal').css({
        left:(viewportWidth-signUpModalWidth)/2,
    });

    $('#paymentsModal').css({
        left:(viewportWidth-paymentsModalWidth)/2,
    });

    $('.modalWrapper').css({
        width: viewportWidth,
        height: documentHeight,
    });

    $('.tab').hover(
        function(){
            $(this).css({"borderBottom":"solid 3px #3e8dbe"}); 
        },
        function(){
            if($(this).css("opacity")!=1){
                $(this).css({"borderBottom":"0"}); 
            }
        }
    );

    $('.tab').click(
        function(){
            $('.tab').css({"borderBottom":"0", "opacity":"0.75"});
            $(this).css({"borderBottom":"solid 3px #3e8dbe", "opacity":"1"}); 
        }
    );

    $('#applicantsTab').click(
        function(){
            $('#new').delay(1600).animate({"opacity":"0"},300);  
        }
    );

    $('#matchesTab').click(
        function(){
            $('#sidebar').animate({"opacity":"1"},75);  
        }
    );

    $('#applicantsTab, #shortlistsTab, #postingsTab').click(
        function(){
            $('#sidebar').animate({"opacity":"0"},75);
        }
    );

    $('.shortlistButton').click(
        function(){
            $(this).css({"display":"none"});
            $(this).next().css({"display":"block"});
        }
    );

    $('.phoneButton').click(
        function(){
            $(this).css({"display":"none"});
            $(this).nextAll().css({"display":"block"}); 
        }
    );

    $('#getStartedButton, #postButton, .editButton').click(
        function(){
            $('.modalWrapper').css({"display":"block"});
            $('#candidatePreferencesModal, .modalWrapper').delay(100).animate({opacity:1,},300);
            $('.disabled').animate({"opacity":"0.2"});
            $('.disabled').css({"pointerEvents":"none"});
            $('.candidatePreferencesForm input:radio, .candidatePreferencesForm input:checkbox').prop( "checked", false );
            $('.candidatePreferencesForm input:text').val("");
        }
    );

    $('#postJobButton').click(
        function(){
            $('.tab').css({"borderBottom":"0", "opacity":"0.75"});
            $('#postingsTab').css({"borderBottom":"solid 3px #3e8dbe", "opacity":"1"}); 
            $('#sidebar, #sideHeader').animate({"opacity":"0"},75);
            $('#candidatePreferencesModal, .modalWrapper').delay(100).animate({opacity:0,},300);
            $('.modalWrapper').css({"display":"none"});  
        }
    );

    $('#jobTypeInput input:radio').change(
        function(){
            if ($('#maid').is(':checked')){
                console.log('foo');
                $('#taskInput').css({"display":"block", "pointerEvents":"auto"});
                $('#taskInput').animate({"opacity":"1"},100);
                $('#hoursInput').css({"display":"none", "pointerEvents":"none"});
                $('#hoursInput').animate({"opacity":"0"});
            }

            if ($('#cook, #caretaker').is(':checked')){
                console.log('foo');
                $('#hoursInput').css({"display":"block", "pointerEvents":"auto"});
                $('#hoursInput').animate({"opacity":"1"},100);
                $('#taskInput').css({"display":"none", "pointerEvents":"none"});
                $('#taskInput').animate({"opacity":"0"});
            }
        }
    );

    $('#taskInput input:checkbox').change(
        function(){
            console.log('foo');
            $('#wageInput').animate({"opacity":"1"},100);   
            $('#wageInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#hoursInput input:text').keydown(
        function(){
            console.log('foo');
            $('#wageInput').animate({"opacity":"1"},100);   
            $('#wageInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#wageInput input:text').keydown(
        function(){
            console.log('foo');
            $('#postalInput').animate({"opacity":"1"},100);   
            $('#postalInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#postalInput input:text').keydown(
        function(){
            console.log('foo');
            $('.disabled').animate({"opacity":"1"},100);   
            $('.disabled').css({"pointerEvents":"auto"}); 
        }
    );

    $('.modalClose, .modalCancelButton').click(
        function(){
            $('.modalWrapper').css({"display":"none"});
            $('#candidatePreferencesModal, .modalWrapper').delay(100).animate({opacity:0,},300);
        }
    );

    $('.remove').click(
        function(){
            console.log('foo');
            $(this).parentsUntil('body').animate({height:'20',},300);
            $(this).parentsUntil('body').find('.actions, .ribbonWrapper, .actionLinks, .actionIcon, .candidateHeader, .candidateBody, .personalMessage').animate({opacity:0,},300);
            $(this).parentsUntil('body').find('.actions, .ribbonWrapper, .actionLinks, .actionIcon, .candidateHeader, .candidateBody, .personalMessage').css({"display":"none"});
            $(this).parentsUntil('body').find('.warningMessage').css({"display":"block"});
            $(this).parentsUntil('body').find('.warningMessage').animate({opacity:1,},100);   
        }
    );

    $('.decline, .deleteButton').click(
        function(){
            console.log('foo');
            $(this).parentsUntil('body').animate({height:'20',},300);
            $(this).parentsUntil('body').find('.successMessage, .ribbonWrapper, .actionLinks, .actionIcon, .candidateHeader, .candidateBody').animate({opacity:0,},300);  
            $(this).parentsUntil('body').find('.successMessage, .ribbonWrapper, .actionLinks, .actionIcon, .candidateHeader, .candidateBody').css({"display":"none"});
            $(this).parentsUntil('body').find('.warningMessage').css({"display":"block"});
            $(this).parentsUntil('body').find('.warningMessage').animate({opacity:1,},100);  
        }
    );

    $('.warningMessage').click(
        function(){
            console.log('foo');
            $(this).parentsUntil('body').animate({height:'218',},50);
            $(this).animate({opacity:0,},300);
            $(this).css({"display":"none"});
            $(this).parentsUntil('body').find('.candidateBody').animate({height:'218',},50);
            $(this).parentsUntil('body').find('.candidateHeader, .ribbonWrapper, .actionLinks, .actionIcon, .candidateBody, .personalMessage').css({"display":"block"});
            $(this).parentsUntil('body').find('.candidateHeader, .ribbonWrapper, .actionLinks, .actionIcon, .candidateBody, .personalMessage').animate({opacity:1,},100);  
        }
    );

    var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    });

    $('.actionSignedOutButtons').hover(
        function(){
            console.log('foo');
            var offset = $(this).offset();
            $('#contactCard').css({"display":"block", "top":offset.top, "left":offset.left - 275});
            $('#contactCard').animate({"opacity":"1"},300);
        },
        function(){
            console.log('foo');
            $('#contactCard').delay(1500).animate({"opacity":"0"},300);
            $('#contactCard').css({"display":"none"});
        }
    );

    $('#postSignedOutButton').hover(
        function(){
            console.log('foo');
            var offset = $(this).offset();
            $('#postCard').css({"display":"block", "top":offset.top, "left":offset.left - 275});
            $('#postCard').animate({"opacity":"1"},300);
        },
        function(){
            console.log('foo');
            $('#postCard').delay(1500).animate({"opacity":"0"},300);
            $('#postCard').css({"display":"none"});
        }
    );

    $('#nameInput input:text').keydown(
        function(){
            console.log('foo');
            $('#emailInput').animate({"opacity":"1"},100);   
            $('#emailInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#emailInput input:text').keydown(
        function(){
            console.log('foo');
            $('#passwordInput').animate({"opacity":"1"},100);   
            $('#passwordInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#passwordInput input:password').keydown(
        function(){
            console.log('foo');
            $('#confirmPasswordInput').animate({"opacity":"1"},100);   
            $('#confirmPasswordInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#confirmPasswordInput input:password').keydown(
        function(){
            console.log('foo');
            $('#tosInput').animate({"opacity":"1"},100);   
            $('#tosInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#tosInput input:checkbox').change(
        function(){
            console.log('foo');
            $('#signUpButton, #sessionInput').animate({"opacity":"1"},100);   
            $('#signUpButton, #sessionInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#postSignedOutButton').click(
        function(){
            $('#signUpModalWrapper').css({"display":"block"});
            $('#signUpModal, #signUpModalWrapper').delay(100).animate({opacity:1,},300);
            $('.disabled').animate({"opacity":"0.2"});
            $('.disabled').css({"pointerEvents":"none"});
            $('.signUpForm input:radio, .signUpForm input:checkbox').prop( "checked", false );
            $('.signUpForm input:text').val("");
        }
    );

    $('#signUpButton').click(
        function(){
            $('#signUpModalWrapper').css({"display":"none"});
            $('#signUpModal, #signUpModalWrapper').delay(100).animate({opacity:0,},300);
            $('#paymentsModalWrapper').css({"display":"block"});
            $('#paymentsModal, #paymentsModalWrapper').delay(100).animate({opacity:1,},300);
            $('.disabled').animate({"opacity":"0.2"});
            $('.disabled').css({"pointerEvents":"none"});
            $('.paymentsForm input:radio, .paymentsForm input:checkbox').prop( "checked", false );
            $('.paymentsForm input:text').val("");
        }
    );

    $('#paymentsButton').click(
        function(){
            $('#paymentsModalWrapper').css({"display":"none"});
            $('#paymentsModal, #paymentsModalWrapper').delay(100).animate({opacity:0,},300);
            $('#candidatePreferencesModalWrapper').css({"display":"block"});
            $('#candidatePreferencesModal, #candidatePreferencesModalWrapper').delay(100).animate({opacity:1,},300);
            $('.disabled').animate({"opacity":"0.2"});
            $('.disabled').css({"pointerEvents":"none"});
            $('.paymentsForm input:radio, .paymentsForm input:checkbox').prop( "checked", false );
            $('.paymentsForm input:text').val("");
        }
    );

    $('#cardNameInput input:text').keydown(
        function(){
            console.log('foo');
            $('#cardNumberInput').animate({"opacity":"1"},100);   
            $('#cardNumberInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#cardNumberInput input:text').keydown(
        function(){
            console.log('foo');
            $('#expiryInput').animate({"opacity":"1"},100);   
            $('#expiryInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#expiryInput input:text').keydown(
        function(){
            console.log('foo');
            $('#securityInput').animate({"opacity":"1"},100);   
            $('#securityInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#securityInput input:text').keydown(
        function(){
            console.log('foo');
            $('#streetInput').animate({"opacity":"1"},100);   
            $('#streetInput').css({"pointerEvents":"auto"}); 
            $('#suburbInput').animate({"opacity":"1"},100);   
            $('#suburbInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#streetInput input:text').keydown(
        function(){
            console.log('foo');
            console.log('foo');
            $('#cityInput').animate({"opacity":"1"},100);   
            $('#cityInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#suburbInput input:text').keydown(
        function(){
            console.log('foo');
            $('#cityInput').animate({"opacity":"1"},100);   
            $('#cityInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#cityInput input:text').keydown(
        function(){
            console.log('foo');
            $('#postalCodeInput').animate({"opacity":"1"},100);   
            $('#postalCodeInput').css({"pointerEvents":"auto"}); 
        }
    );

    $('#postalCodeInput input:text').keydown(
        function(){
            console.log('foo');
            $('#paymentsButton').animate({"opacity":"1"},100);   
            $('#paymentsButton').css({"pointerEvents":"auto"}); 
        }
    );

});