
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
    let a=word_length[i].innerText.trim().split(" ")
    let newarr=checkSpace(a)
    let changetext=document.getElementsByClassName("blogpara")
    if(newarr.join(" ").length>=1){
        let b=newarr.slice(0, 16).join(" ");
        changetext[i].innerHTML =b;
        console.log(b)
    }
  
}

function checkSpace(a){
    let arr=[]
    for(let i=0;i<a.length;i++){
        if(a[i]===""){
        continue;
        }
        else{
            arr.push(a[i])
        }
    }
    return arr
}





var word_length1=document.getElementsByClassName("boxrig1_blogpara")
// console.log(word_length[0])
for(let i=0;i<word_length1.length;i++){
    let a=word_length1[i].innerText.trim().split(" ")
    let newarr=checkSpace1(a)
    let changetext=document.getElementsByClassName("boxrig1_blogpara")
    if(newarr.join(" ").length>=45){
        let b=newarr.slice(0, 45).join(" ");
        changetext[i].innerHTML =b;
        console.log(b)
    }
  
}

function checkSpace1(a){
    let arr=[]
    for(let i=0;i<a.length;i++){
        if(a[i]===""){
        continue;
        }
        else{
            arr.push(a[i])
        }
    }
    return arr
}




var word_length2=document.getElementsByClassName("wri")
// console.log(word_length[0])
for(let i=0;i<word_length2.length;i++){
    let a=word_length2[i].innerText.trim().split(" ")
    let newarr=checkSpace1(a)
    let changetext=document.getElementsByClassName("wri")
    if(newarr.join(" ").length>=25){
        let b=newarr.slice(0, 25).join(" ");
        changetext[i].innerHTML =b;
        console.log(b)
    }
  
}

function checkSpace1(a){
    let arr=[]
    for(let i=0;i<a.length;i++){
        if(a[i]===""){
        continue;
        }
        else{
            arr.push(a[i])
        }
    }
    return arr
}




