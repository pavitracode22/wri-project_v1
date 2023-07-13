
document.getElementById("blog_page_1").addEventListener("click",()=>{
    let page1=document.getElementById("blog_page1_card")
    let page2=document.getElementById("blog_page2_card")
    let page3=document.getElementById("blog_page3_card")
    let page4=document.getElementById("blog_page4_card")

    let button1=document.getElementById("blog_page_1")
    let button2=document.getElementById("blog_page_2")
    let button3=document.getElementById("blog_page_3")
    let button4=document.getElementById("blog_page_4")
    
    page1.setAttribute("style","display:block")
    page2.setAttribute("style","display:none")
    page3.setAttribute("style","display:none")
    page4.setAttribute("style","display:none")

    button1.setAttribute("class","activelist")
    button2.removeAttribute("class","activelist")
    button3.removeAttribute("class","activelist")
    button4.removeAttribute("class","activelist")

   })

   document.getElementById("blog_page_2").addEventListener("click",()=>{
    let page1=document.getElementById("blog_page1_card")
    let page2=document.getElementById("blog_page2_card")
    let page3=document.getElementById("blog_page3_card")
    let page4=document.getElementById("blog_page4_card")

    let button1=document.getElementById("blog_page_1")
    let button2=document.getElementById("blog_page_2")
    let button3=document.getElementById("blog_page_3")
    let button4=document.getElementById("blog_page_4")
    
    
    page1.setAttribute("style","display:none")
    page2.setAttribute("style","display:block")
    page3.setAttribute("style","display:none")
    page4.setAttribute("style","display:none")


    button1.removeAttribute("class","activelist")
    button2.setAttribute("class","activelist")
    button3.removeAttribute("class","activelist")
    button4.removeAttribute("class","activelist")
    
   })

   document.getElementById("blog_page_3").addEventListener("click",()=>{
    let page1=document.getElementById("blog_page1_card")
    let page2=document.getElementById("blog_page2_card")
    let page3=document.getElementById("blog_page3_card")
    let page4=document.getElementById("blog_page4_card")

    let button1=document.getElementById("blog_page_1")
    let button2=document.getElementById("blog_page_2")
    let button3=document.getElementById("blog_page_3")
    let button4=document.getElementById("blog_page_4")
    
    
    page1.setAttribute("style","display:none")
    page2.setAttribute("style","display:none")
    page3.setAttribute("style","display:block")
    page4.setAttribute("style","display:none")

    button1.removeAttribute("class","activelist")
    button2.removeAttribute("class","activelist")
    button3.setAttribute("class","activelist")
    button4.removeAttribute("class","activelist")

   })

   document.getElementById("blog_page_4").addEventListener("click",()=>{
    let page1=document.getElementById("blog_page1_card")
    let page2=document.getElementById("blog_page2_card")
    let page3=document.getElementById("blog_page3_card")
    let page4=document.getElementById("blog_page4_card")

    let button1=document.getElementById("blog_page_1")
    let button2=document.getElementById("blog_page_2")
    let button3=document.getElementById("blog_page_3")
    let button4=document.getElementById("blog_page_4")
    
    
    page1.setAttribute("style","display:none")
    page2.setAttribute("style","display:none")
    page3.setAttribute("style","display:none")
    page4.setAttribute("style","display:block")

    button1.removeAttribute("class","activelist")
    button2.removeAttribute("class","activelist")
    button3.removeAttribute("class","activelist")
    button4.setAttribute("class","activelist")



   })


var word_length=document.getElementsByClassName("blogpara")
// console.log(word_length[0])
for(let i=0;i<word_length.length;i++){
    let a=word_length[i].innerText.trim()
    // if(a.length>=20){
    //     word_length.innerText = content.slice(0, 20);
    // }
    console.log(a)
}

