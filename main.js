const btnToggle=document.querySelector('.toggle-btn');
btnToggle.addEventListener('click',function(){
document.getElementById('sidebar').classList.toggle('active');
});

function drag(){
    const divSideBar=document.querySelector('.menu');
    divSideBar.addEventListener('click',function(){
    console.log('clicked');
    });
}
