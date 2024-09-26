let btn = document.querySelectorAll('button');
let input = document.querySelector('input');
let equal = document.getElementsByClassName('btnRedEqual');
let result;

btn.forEach(btn => {
    btn.addEventListener('click', function() {
        if(btn.value == 'c'){
            input.value = '';
        }else{
            parseInt(input.value +=btn.value);
        }
    });
});
equal[0].addEventListener('click', function (){
    result = eval(input.value);
    input.value = result;
    if(result === undefined){
        input.value = '';
    }
    if(result == Infinity){ 
        input.value = '';
    }
})