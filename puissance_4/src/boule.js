var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-70)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-70)+'px)';
},false);

var z = document.getElementById('foo1');
document.addEventListener('click', function(ev){
    z.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    z.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);