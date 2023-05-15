const { error } = require('console');
const fs  = require('fs');

/*        
// verileri okur      
const files = fs.readdir( './' , function(error,data){
    if(error)
    {console.log(error);}
    else{
        console.log(data);
    }
})
//[ 'app.js', 'deneme.txt', 'deneme1.txt', 'deneme2.txt' ]
*/
            // aynı zamanda readFileSync yaparak sync bir işlem gerçeleştirebilinir,
/*const data = fs.readFile('deneme.txt', 'utf-8' , function(error,data){


    if(error){
        console.log(error);

    }
    else
    {
        console.log(data);
    }

})*/
 /*
fs.writeFile('deneme3.txt', 'deneme 1234', function(error){


    if(error){
        console.log(error);

    }
    else
    {
        console.log('dosya oluşturuldu');
    }

} )
*/
// apendFile ile writeFile arasındaki fark iki defa aynı dosya eklendiğinde writeFile  
// dosyayı sıfırdan oluşturur ve içeriği ekler appendFile ise 
// dosyanın üzerine 
fs.appendFile('deneme3.txt', 'deneme 1234', function(error){


    if(error){
        console.log(error);

    }
    else
    {
        console.log('dosya oluşturuldu');
    }

} )
fs.unlink('deneme3.txt' , function(error){
    if(error){
        console.log(error);
    }else{
        console.log('silindi');
    }

})

