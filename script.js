document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
   (document.querySelector('.sidebar').classList.contains('.sidebargo'))
    document.querySelector('.ham').style.display='inline'
})