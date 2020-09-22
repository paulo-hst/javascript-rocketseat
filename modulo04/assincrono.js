var xhr = new XMLHttpRequest();
// https://avatars2.githubusercontent.com/u/52765746?v=4
xhr.open('GET', 'https://api.github.com/users/paulo-hst');
xhr.send(null);

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        var teste = JSON.parse(xhr.responseText);
        console.log(teste.name);
        
        var div = document.querySelector('#app');
        var image = document.createElement('img');
        image.setAttribute('src','https://avatars2.githubusercontent.com/u/52765746?v=4');

        div.appendChild(image);        
    }
}