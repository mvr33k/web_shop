window.onload = function(){
    document.getElementById('sg-button').onclick=function(){
        document.getElementById('prod').style.display='none';
        document.getElementById('cont').style.display='none';
        document.getElementById('sg').style.display='block';
    };
    document.getElementById('prod-button').onclick=function(){
        document.getElementById('cont').style.display='none';
        document.getElementById('sg').style.display='none';
        document.getElementById('prod').style.display='block';
    };
    document.getElementById('cont-button').onclick=function(){
        document.getElementById('prod').style.display='none';
        document.getElementById('sg').style.display='none';
        document.getElementById('cont').style.display='block';
    };

    
    
}


