let images={
    1:"img1.jpg",
    2:"img2.jpg",
    3:"img3.jpg",
    4:"img.jfif"
}
let autoPlay=true;
let content=document.querySelector(".imgWrapper");
let picture=document.querySelector(".imgWrapper>img");
let arrow=document.querySelectorAll(".arrow")
let leftArrow=document.querySelector('.arrow.left')
let rightArrow=document.querySelector('.arrow.right')
let dots=document.querySelectorAll(".dot")
let timer
leftArrow.addEventListener("click",()=>{})
rightArrow.addEventListener("click",()=>{})
dots.forEach((item)=>{
    item.addEventListener("click",()=>{})
})

content.addEventListener("mouseover",()=>{
    autoPlay=false
    arrow.forEach((item=>{
        item.style.display="block"
    }))
    }
)

if(autoPlay){
   timer= setTimeout(()=>{
       console.log('setTimeout')
       picture.setAttribute("src",images[2])
       console.log('setTimeout结束')
   },6000)
}