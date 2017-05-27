$(function () {

    var issues = [];
    var obj = {check: false};
    var $container = $('.main__content');
    var consultantName = $container.data('name');

    function containerToBottom() {
        $container.mCustomScrollbar('scrollTo', 'bottom', {timeout: 100});
    }

    function addAnswer(question, answer) {
        issues.push({question: question, answer: answer});
        console.log(issues);
    }

    function findAnswer(question){
        var answer = false;
        issues.forEach(function(issue){
            if(issue.question == question){
                answer = issue.answer;
            }
        });

        return answer;
    }

    function renderAnswer(answer) {
        var $message;
        if(answer === null){
            $message = $('<div js-field-message class="message message_admin"> <div  class="message__info"><b>'+consultantName+'</b> <span class="message__info-time"> 15:45 </span></div> <div js-send class="message__text"> не понимаю <br> </div> </div>')
        }else{
            $message = '<div js-field-message class="message message_admin message_admin_new"> <div  class="message__info"><b>'+consultantName+'</b> <span class="message__info-time"> </span></div> <div js-send class="message__text">' + answer + '<br> </div> </div>'
        }

        $('[js-field-message]').last().after($message);
        containerToBottom();
    }

    $('[js-field]').on('keyup', function (event) {
        if ($(this).val().trim() !== "") {
            $(this).removeClass('is-error');
        }
        if (event.keyCode == 13) {

            if ($(this).val().trim() == "") {
                // $(this).addClass('is-error');
                $(this).val('');
                return false;
            }

            var message = $('[js-field]').val().toLowerCase().trim(),
                $newMessage = $('<div js-field-message class="message message_user"><div class="message__info"><span class="message__info-time"></span></div><div js-send class="message__text">' + message + '<br></div></div>');

            $('[js-field-message]').last().after($newMessage);
            $('[js-field]').val('').text('');
            containerToBottom();

            var answer = findAnswer(message);
            if(answer !== false) {
                renderAnswer(answer);

            }else{
                $.ajax({
                    url: '/issue/',
                    type: 'get',
                    dataType: 'json',
                    data: {question: message},
                    success: function (response) {
                        var $message;
                        if (response.error) {
                            addAnswer(message, null);
                            renderAnswer(null);

                        } else if (response.answer) {
                            addAnswer(message, response.answer);
                            renderAnswer(response.answer);
                        }
                    }
                });
            }



            // ask.forEach(function (item, i, arr) {
            //     if (item == message) {
            //         var askMessage = '<div js-field-message class="message message_admin message_admin_new"> <div  class="message__info"><b> Робот </b> <span class="message__info-time"> </span></div> <div js-send class="message__text">' + qst[i] + '<br> </div> </div>'
            //         $('[js-field-message]').last().after(askMessage);
            //         obj.check = true;
            //     }
            // });
            //
            // if (obj.check == false) {
            //     var $errorMessage = $('<div js-field-message class="message message_admin"> <div  class="message__info"><b> Admin </b> <span class="message__info-time"> 15:45 </span></div> <div js-send class="message__text"> не понимаю <br> </div> </div>')
            //     $('[js-field-message]').last().after($errorMessage);
            //
            // }
            // obj.check = false;
        }

    })
});