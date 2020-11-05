function inputsToDropdown(container, defaultValue, inputType, controlContainer, hideContainer) {

    if ($(container).length > 0 && ($(container).find('input[type="checkbox"]').length > 0 || $(container).find('input[type="radio"]').length > 0)) {
        var btnGroup = $('<div>', { class: 'btn-group btn-group__multiple btn-group__multiple-' + inputType }),
            btn = $('<button>', {
                'class': 'btn btn-default dropdown-toggle btn-action btn-type__' + inputType,
                'data-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'true',
                'style': 'background:transparent; color: white; text-align:left; border-bottom: 1px solid black; font-size:20px',
                'html': '<span class="value">' + defaultValue + '</span><span class="num"></span><span class="btn-placeholder"></span> <span class="caret"></span>'
            }),
            control = $(container).find('input[type="' + inputType + '"]').parent(),
            controlContainer = $(controlContainer),
            hideContainer = $(hideContainer),
            list = $('<ul>', { 'class': 'dropdown-menu', 'style': 'background:#321e5b;' }),
            placeholder = btn.find('.value'),
            btnAction = btn.find('.btn-action'),
            placeholderHtml = btn.find('.btn-placeholder'),
            num = btn.find('.num').hide();


        function renderButton() {
            if (inputType == 'checkbox') {
                btnGroup.find('li.list-item.active').length != 0 ? placeholder.addClass('hide') : placeholder.removeClass('hide');
            }
        }


        function renderDropdown(inputType) {
            btnGroup.append(btn);
            controlContainer.append(btnGroup);
            $.each(control, function () {
                var li = $('<li>', { 'title': '' || $(this).attr('title'), 'class': 'list-item', 'style': 'color:white;' }),
                    input = $(this).find('input'),
                    label = $(this).find('label').length > 0 ? $(this).find('label') : $(this).parent().find('label'),
                    text = label.text(),
                    span = $('<span>', { 'html': text, 'data-value': text.replace(/\s/g, ''), 'class': 'placeholder-item hide' });
                if (input.prop('checked') == true) li.addClass('active');
                var a = $('<a>').append(input, label);
                li.append(a);
                list.append(li);
                btnGroup.append(list);
                handleClick(li, list);
                if (inputType == 'radio' && input.prop('checked')) placeholder.text(label.text());
            });
            renderButton();

        }
        renderDropdown(inputType);

        function handleClick(element) {
            element.on('click', 'a', function () {
                if (inputType == 'radio') {
                    placeholder.text($(this).find('label').text())
                }
                renderButton();
                return false;
            });
        }
    }
}
