function colapsar(){
    document.getElementById('aprincipal').classList.toggle('articlecollapse');
    document.getElementsByClassName('right')[0].classList.toggle('rightcollapse');
    if(document.getElementById('asecundario').style.visibility==='visible'){
        document.getElementById('asecundario').style.visibility='collapse';
    } else{
        document.getElementById('asecundario').style.visibility='visible';
    };
}