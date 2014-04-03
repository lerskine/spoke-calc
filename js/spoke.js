calculator = function() {
    erd = Number($('input[name=erd]').val())
    hub_flange = Number($('input[name=hub_flange]').val())
    answer = erd + hub_flange

    alert(answer)

    return true
}

setup = function() {
    $('input[name=calc]').click(calculator)
}

// Magic line to load everything after page is ready:
$(document).ready(setup)
