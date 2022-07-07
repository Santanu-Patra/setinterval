window.addEventListener('load',function(){
    setTimeout(function(){
        document.getElementById('pop').classList.replace('hide','popup');
      },6000)
}

);
btn.addEventListener('click',function(){
    document.getElementById('pop').classList.add('hide');
})