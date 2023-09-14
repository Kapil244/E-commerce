const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky',this.window.scrollY > 0);
})

//let menu = document.querySelector('#menu-icon');
//

var main = document.querySelector('.div');
var nav = document.querySelector('.navmenu');
var link = document.querySelector('a');
var flag = 0;
main.addEventListener('click',function(){
    if(flag==0){
        nav.style.right='0'
        
        flag=1
        
    }else{
        nav.style.right='-100%'
        flag=0
        
    }
    
})
nav.addEventListener('click',function(){
    nav.style.right='-100%'
    
})