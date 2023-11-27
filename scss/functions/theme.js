var ele=document.querySelector('.theme')
ele.addEventListener('click',function(){
    document.body.classList.toggle('light');
    ele.innerHTML=document.body.classList.contains('light')?'Dark':'Light';
})