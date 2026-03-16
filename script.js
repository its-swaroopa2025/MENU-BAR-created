const iceIcon=document.querySelector(".ice-menu-container")
const headerContent=document.querySelector(".header-content")
const closeIcon=document.querySelector(".close")
const nav=document.querySelector('nav')


iceIcon.addEventListener('click',(e)=>{
e.stopPropagation()
      headerContent.classList.add('open-menu')
})

nav.addEventListener('click',(e)=>{
      e.stopPropagation()
})
closeIcon.addEventListener('click',()=>{
      headerContent.classList.remove('open-menu')
})
window.addEventListener('click',()=>{
      headerContent.classList.remove('open-menu')
})
