$(document).ready(function () {
    $('.form__input-file-wrap input[type="file"]').on('change', function (e) {
        const file = e.target.files[0];

        if (file.size > 5242880) {
            e.target.value = '';
            alert('Filesize is more than 5 MB. Try again with smaller file.');
            return;
        }

        const fileEl = $(this).closest('.form__input-file-wrap').find('.form__file');

        fileEl.find('.form__file-name').html(file.name);
        if (!fileEl.hasClass('form__file_active')) {
            fileEl.addClass('form__file_active');
        }
    });

    $('.form__file-cross').on('click', function () {
        $(this).closest('.form__input-file-wrap').find('input[type="file"]').val(null);
        $(this).closest('.form__file').removeClass('form__file_active');
    });

    $('.form__submit .btn').on('click', function (e) {
        e.preventDefault();
        const form = $(this).closest('.form');
        if (!form[0].checkValidity()) {
            alert('Form was filled incorrectly. Check your e-mail field validity and required fields');
            return;
        }

        const data = new FormData(form[0]);

        if (data.has('agreement')) {
            if (data.get('agreement') === 'on') {
                data.set('agreement', '1');
            }
        } else {
            data.set('agreement', '0');
        }



        $.ajax({
            url: '/form/send',
            method: 'POST',
            processData: false,
            contentType: false,
            data,
            success: () => {
                console.log('success');
            },
            error: () => {
                alert('Error, try to send form later');
            }
        })
    })
});