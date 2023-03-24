const btn = document.getElementById('button1');
btn.addEventListener('click', function(event){
    displayText();
    btn.style.color = '#92587F';
    btn3.style.color = '#FFF469';
    btn2.style.color = '#FFF469';
    btn4.style.color = '#FFF469';
}
);


function displayText(){
    document.querySelector('.organizations').style.display = 'block';
    document.querySelector('.media').style.display = 'none';
    document.querySelector('.entertainment').style.display = 'none';
    document.querySelector('.science').style.display = 'none';
}



const btn2 = document.getElementById('button2');
btn2.addEventListener('click', function(event){
    displayText2();
    btn2.style.color = '#92587F';
    btn3.style.color = '#FFF469';
    btn4.style.color = '#FFF469';
    btn.style.color = '#FFF469';
}
);

function displayText2(){
    document.querySelector('.media').style.display = 'block';
    document.querySelector('.organizations').style.display = 'none';
    document.querySelector('.entertainment').style.display = 'none';
    document.querySelector('.science').style.display = 'none';
}



const btn3 = document.getElementById('button3');
btn3.addEventListener('click', function(event){
    displayText3();
    btn3.style.color = '#92587F';
    btn4.style.color = '#FFF469';
    btn2.style.color = '#FFF469';
    btn.style.color = '#FFF469';
}
);

function displayText3(){
    document.querySelector('.entertainment').style.display = 'block';
    document.querySelector('.organizations').style.display = 'none';
    document.querySelector('.media').style.display = 'none';
    document.querySelector('.science').style.display = 'none';
}


const btn4 = document.getElementById('button4');
btn4.addEventListener('click', function(event){
    displayText4();
    btn4.style.color = '#92587F';
    btn3.style.color = '#FFF469';
    btn2.style.color = '#FFF469';
    btn.style.color = '#FFF469';
}
);

function displayText4(){
    document.querySelector('.science').style.display = 'block';
    document.querySelector('.organizations').style.display = 'none';
    document.querySelector('.entertainment').style.display = 'none';
    document.querySelector('.media').style.display = 'none';
}