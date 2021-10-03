window.onload = function () {
    var img1 = document.getElementById('jacket');
    var img2 = document.getElementById('knit');
    var block1text = document.getElementById('block1text')
    var block2text = document.getElementById('block2text')
//img1
    img1.addEventListener('mouseover', function(e){
        img1.style.opacity = 0.7;
        block1text.style.display = 'block';
    });
    block1text.addEventListener('mouseover', function(e){
        img1.style.opacity = 0.7;
        block1text.style.display = 'block';
    });

    img1.addEventListener('mouseout', function(e){
        img1.style.opacity = 1;
        block1text.style.display = 'none';
    });
    block1text.addEventListener('mouseout', function(e){
        img1.style.opacity = 1;
        block1text.style.display = 'none';
    });


//img2
    img2.addEventListener('mouseover', function(e){
        img2.style.opacity = 0.7;
        block2text.style.display = 'block';
    });
    block2text.addEventListener('mouseover', function(e){
        img2.style.opacity = 0.7;
        block2text.style.display = 'block';
    });
    img2.addEventListener('mouseout', function(e){
        img2.style.opacity = 1;
        block2text.style.display = 'none';
    });
    block2text.addEventListener('mouseout', function(e){
        img2.style.opacity = 1;
        block2text.style.display = 'none';
    });
}

