calculator = function() {
    $('.answer').html('')
    r1 = Number($('input[name=hub_flange]').val())/2
    r2 = Number($('input[name=erd]').val())/2
    r3 = 1.2
    d = Number($('input[name=center_to_flange]').val())
    m = Number($('input[name=number_holes]').val())/2
    k = Number($('input[name=number_crosses]').val())
    a = 360 * k / m
    //a = 720 * k * Math.PI / 180 * m
    console.log([r1,r2,r3,d,m,k,a]) 
    
    part1 = d*d + r1*r1 + r2*r2
    part2 = 2 * r1 * r2 * Math.cos(a * Math.PI / 180)
    part3 = part1 - part2 
    answer = Math.sqrt(part3) 
       
    //answer = Math.sqrt(d*d + r1*r1 + r2*r2 - 2 * r1 * r2 * Math.cos(a)) - r3
    
    $('.answer').html('Spoke Length ' + String(answer))

    console.log(answer)

    return true
}
setup = function() {
    $('input[name=calc]').click(calculator)
}

// Magic line to load everything after page is ready:
$(document).ready(setup)
