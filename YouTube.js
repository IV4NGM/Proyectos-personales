function buscar(){
    var busqueda=document.getElementById('search').value;
    busqueda=busqueda.replace(" ", "+")
    busqueda='https://www.youtube.com/results?search_query='+busqueda
    document.getElementById('search').value=''
    window.open(busqueda)
}