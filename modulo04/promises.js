var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET','https://api.github.com/users/paulo-hst');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('ERRO');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response.name);
    })
    .catch(function (errpr) {
        console.warn('ERRO')
    });
