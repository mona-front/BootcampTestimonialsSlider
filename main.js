const array=[
    // {
    //     description:"“If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer. ”"
    //      ,

    //   fullName:"John Tarkpor",
    //   job:"Junior Front-end Developer",
    //   img:"images/image-john.jpg"}

    // ,
    {
        description:" “I’vebeen interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”" ,
        fullName:"Tanya Sinclair",
        job:"UX Engineer",
        img:"images/image-Tanya.jpg"
    }
]

// items
const desc=document.querySelector(".desc")
const image=document.querySelector("img")
const fullName=document.querySelector(".fullName")
const job=document.querySelector(".job")
// arrwo
const arrwoNext=document.querySelector(".next")
const arrowPrev=document.querySelector(".prev")

// counter
let counter=0;
window.addEventListener("DOMContentLoaded",()=>{
    showPerson()
    

})


// show person
const showPerson=()=>{
    const Slide=array[counter]
    desc.textContent=Slide.description
    fullName.textContent=Slide.fullName
    job.textContent=Slide.job
    image.src=Slide.img
    
}
// nextSlide
arrwoNext.addEventListener("click",()=>{

    counter++
    if(counter>array.length-1){
        counter=0;
    }
    showPerson()
})

// prevSlide
arrowPrev.addEventListener("click",()=>{
    counter--
    if(counter<0){
        counter=Array.length
    }
    showPerson()
    

})