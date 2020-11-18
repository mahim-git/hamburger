const navBtn = document.getElementById("ham-btn");
const navDiv = document.getElementById("navigation");
const navWidth = navDiv.clientWidth;

navBtn.addEventListener('click', ()=>{
    navDiv.classList.toggle('active');
    if(navDiv.classList.contains('active')){
        navBtn.style.transform = `translateX(-${navWidth}px)`;
        navBtn.style.transition = `0.2s ease-in`
    }
    else{
        navBtn.style.transform = "translateX(0px)";
    }
});