axios.get('https://api.github.com/users/paulo-hst')
    .then(function(response){
        console.log(response.data.name);
    })
    .catch(function (errpr) {
        console.warn('ERRO')
    });
