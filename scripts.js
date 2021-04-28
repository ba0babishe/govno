const sb1=document.querySelector(".serv_block_1");
const sb2=document.querySelector(".serv_block_2");
const sb3=document.querySelector(".serv_block_3")
const sb4=document.querySelector(".serv_block_4");
const sb5=document.querySelector(".serv_block_5");
const sb6=document.querySelector(".serv_block_6");
const sbtn1=document.querySelector("#serv_block_btn_1");
const sbtn2=document.querySelector("#serv_block_btn_2");
const sbtn3=document.querySelector("#serv_block_btn_3")
const sbtn4=document.querySelector("#serv_block_btn_4");
const sbtn5=document.querySelector("#serv_block_btn_5");
const sbtn6=document.querySelector("#serv_block_btn_6");
const simg1=document.querySelector(".serv_blocks_img1");
const simg1_h=document.querySelector(".serv_blocks_img1_hide");
const simg2=document.querySelector(".serv_blocks_img2");
const simg2_h=document.querySelector(".serv_blocks_img2_hide");
const simg3=document.querySelector(".serv_blocks_img3");
const simg3_h=document.querySelector(".serv_blocks_img3_hide");
const simg4=document.querySelector(".serv_blocks_img4");
const simg4_h=document.querySelector(".serv_blocks_img4_hide");
const simg5=document.querySelector(".serv_blocks_img5");
const simg5_h=document.querySelector(".serv_blocks_img5_hide");
const simg6=document.querySelector(".serv_blocks_img6");
const simg6_h=document.querySelector(".serv_blocks_img6_hide");
const workbl1=document.querySelectorAll('.work_blocks_1_img');
const worktext1=document.querySelectorAll('.work_blocks_img_1_sub');
const worktext2=document.querySelectorAll('.work_blocks_img_1_sup');
const workimgs=document.querySelectorAll('.work_blocks_img');
const priceblock=document.querySelectorAll('.prices_blocks_1');
const pricebtn=document.querySelectorAll('.prices_btn');
const soc=document.querySelectorAll('.circle_link');
const socc=document.querySelectorAll('.circle');

soc[0].addEventListener("click",function(){
    socc[0].style.backgroundColor='#3949ab';
    socc[1].style.backgroundColor='#00897b';
    socc[2].style.backgroundColor='#00897b';
});
soc[1].addEventListener("click",function(){
    socc[1].style.backgroundColor='#3949ab';
    socc[0].style.backgroundColor='#00897b';
    socc[2].style.backgroundColor='#00897b';
});
soc[2].addEventListener("click",function(){
    socc[2].style.backgroundColor='#3949ab';
    socc[1].style.backgroundColor='#00897b';
    socc[0].style.backgroundColor='#00897b';
});

pricebtn[0].addEventListener("mouseover",function(){
    priceblock[0].style.boxShadow='0 10px 30px rgb(131, 131, 131)';
    priceblock[0].style.transition='all .1s linear';
});
pricebtn[0].addEventListener("mouseout",function(){
    priceblock[0].style.boxShadow='none';
    priceblock[0].style.transition='all .1s linear';
});
pricebtn[1].addEventListener("mouseover",function(){
    priceblock[1].style.boxShadow='0 10px 30px rgb(131, 131, 131)';
    priceblock[1].style.transition='all .1s linear';
});
pricebtn[1].addEventListener("mouseout",function(){
    priceblock[1].style.boxShadow='none';
    priceblock[1].style.transition='all .1s linear';
});
pricebtn[2].addEventListener("mouseover",function(){
    priceblock[2].style.boxShadow='0 10px 30px rgb(131, 131, 131)';
    priceblock[2].style.transition='all .1s linear';
});
pricebtn[2].addEventListener("mouseout",function(){
    priceblock[2].style.boxShadow='none';
    priceblock[2].style.transition='all .1s linear';
});

workbl1[0].addEventListener("mouseover",function(){
    workimgs[0].style.transition='all .1s linear';
    worktext1[0].style.transition='all .1s linear';
    worktext2[0].style.transition='all .1s linear';
    worktext1[0].style.opacity='1';
    worktext2[0].style.opacity='1';
    workimgs[0].style.opacity='0';
});
workbl1[0].addEventListener("mouseout",function(){
    workimgs[0].style.transition='all .1s linear';
    worktext1[0].style.transition='all .1s linear';
    worktext2[0].style.transition='all .1s linear';
    worktext1[0].style.opacity='0';
    worktext2[0].style.opacity='0';
    workimgs[0].style.opacity='1';
});
workbl1[1].addEventListener("mouseover",function(){
    workimgs[1].style.transition='all .1s linear';
    worktext1[1].style.transition='all .1s linear';
    worktext2[1].style.transition='all .1s linear';
    worktext1[1].style.opacity='1';
    worktext2[1].style.opacity='1';
    workimgs[1].style.opacity='0';
});
workbl1[1].addEventListener("mouseout",function(){
    workimgs[1].style.transition='all .1s linear';
    worktext1[1].style.transition='all .1s linear';
    worktext2[1].style.transition='all .1s linear';
    worktext1[1].style.opacity='0';
    worktext2[1].style.opacity='0';
    workimgs[1].style.opacity='1';
});
workbl1[2].addEventListener("mouseover",function(){
    workimgs[2].style.transition='all .1s linear';
    worktext1[2].style.transition='all .1s linear';
    worktext2[2].style.transition='all .1s linear';
    worktext1[2].style.opacity='1';
    worktext2[2].style.opacity='1';
    workimgs[2].style.opacity='0';
});
workbl1[2].addEventListener("mouseout",function(){
    workimgs[2].style.transition='all .1s linear';
    worktext1[2].style.transition='all .1s linear';
    worktext2[2].style.transition='all .1s linear';
    worktext1[2].style.opacity='0';
    worktext2[2].style.opacity='0';
    workimgs[2].style.opacity='1';
});
workbl1[3].addEventListener("mouseover",function(){
    workimgs[3].style.transition='all .1s linear';
    worktext1[3].style.transition='all .1s linear';
    worktext2[3].style.transition='all .1s linear';
    worktext1[3].style.opacity='1';
    worktext2[3].style.opacity='1';
    workimgs[3].style.opacity='0';
});
workbl1[3].addEventListener("mouseout",function(){
    workimgs[3].style.transition='all .1s linear';
    worktext1[3].style.transition='all .1s linear';
    worktext2[3].style.transition='all .1s linear';
    worktext1[3].style.opacity='0';
    worktext2[3].style.opacity='0';
    workimgs[3].style.opacity='1';
});
workbl1[4].addEventListener("mouseover",function(){
    workimgs[4].style.transition='all .1s linear';
    worktext1[4].style.transition='all .1s linear';
    worktext2[4].style.transition='all .1s linear';
    worktext1[4].style.opacity='1';
    worktext2[4].style.opacity='1';
    workimgs[4].style.opacity='0';
});
workbl1[4].addEventListener("mouseout",function(){
    workimgs[4].style.transition='all .1s linear';
    worktext1[4].style.transition='all .1s linear';
    worktext2[4].style.transition='all .1s linear';
    worktext1[4].style.opacity='0';
    worktext2[4].style.opacity='0';
    workimgs[4].style.opacity='1';
});
workbl1[5].addEventListener("mouseover",function(){
    workimgs[5].style.transition='all .1s linear';
    worktext1[5].style.transition='all .1s linear';
    worktext2[5].style.transition='all .1s linear';
    worktext1[5].style.opacity='1';
    worktext2[5].style.opacity='1';
    workimgs[5].style.opacity='0';
});
workbl1[5].addEventListener("mouseout",function(){
    workimgs[5].style.transition='all .1s linear';
    worktext1[5].style.transition='all .1s linear';
    worktext2[5].style.transition='all .1s linear';
    worktext1[5].style.opacity='0';
    worktext2[5].style.opacity='0';
    workimgs[5].style.opacity='1';
});
sbtn1.addEventListener("mouseover" , function(){
    sb1.style.transition= 'all .2s linear';
    simg1.style.transition= 'all .2s linear';
    simg1_h.style.transition= 'all .2s linear';
    sb1.style.background='#00897b';
    sb1.style.color='white';
    simg1.style.opacity='0';
    simg1_h.style.opacity='1';
});

sbtn1.addEventListener("mouseout" , function(){
    sb1.style.transition= 'all .2s linear';
    simg1.style.transition= 'all .2s linear';
    simg1_h.style.transition= 'all .2s linear';
    sb1.style.background='white';
    sb1.style.color='black';
    simg1.style.opacity='1';
    simg1_h.style.opacity='0';
});

sbtn2.addEventListener("mouseover" , function(){
    sb2.style.transition= 'all .2s linear';
    simg2.style.transition= 'all .2s linear';
    simg2_h.style.transition= 'all .2s linear';
    sb2.style.background='#00897b';
    sb2.style.color='white';
    simg2.style.opacity='0';
    simg2_h.style.opacity='1';
});

sbtn2.addEventListener("mouseout" , function(){
    sb2.style.transition= 'all .2s linear';
    simg2.style.transition= 'all .2s linear';
    simg2_h.style.transition= 'all .2s linear';
    sb2.style.background='white';
    sb2.style.color='black';
    simg2.style.opacity='1';
    simg2_h.style.opacity='0';
});
sbtn3.addEventListener("mouseover" , function(){
    sb3.style.transition= 'all .2s linear';
    simg3.style.transition= 'all .2s linear';
    simg3_h.style.transition= 'all .2s linear';
    sb3.style.background='#00897b';
    sb3.style.color='white';
    simg3.style.opacity='0';
    simg3_h.style.opacity='1';
});

sbtn3.addEventListener("mouseout" , function(){
    sb3.style.transition= 'all .2s linear';
    simg3.style.transition= 'all .2s linear';
    simg3_h.style.transition= 'all .2s linear';
    sb3.style.background='white';
    sb3.style.color='black';
    simg3.style.opacity='1';
    simg3_h.style.opacity='0';
});
sbtn4.addEventListener("mouseover" , function(){
    sb4.style.transition= 'all .2s linear';
    simg4.style.transition= 'all .2s linear';
    simg4_h.style.transition= 'all .2s linear';
    sb4.style.background='#00897b';
    sb4.style.color='white';
    simg4.style.opacity='0';
    simg4_h.style.opacity='1';
});

sbtn4.addEventListener("mouseout" , function(){
    sb4.style.transition= 'all .2s linear';
    simg4.style.transition= 'all .2s linear';
    simg4_h.style.transition= 'all .2s linear';
    sb4.style.background='white';
    sb4.style.color='black';
    simg4.style.opacity='1';
    simg4_h.style.opacity='0';
});
sbtn5.addEventListener("mouseover" , function(){
    sb5.style.transition= 'all .2s linear';
    simg5.style.transition= 'all .2s linear';
    simg5_h.style.transition= 'all .2s linear';
    sb5.style.background='#00897b';
    sb5.style.color='white';
    simg5.style.opacity='0';
    simg5_h.style.opacity='1';
});

sbtn5.addEventListener("mouseout" , function(){
    sb5.style.transition= 'all .2s linear';
    simg5.style.transition= 'all .2s linear';
    simg5_h.style.transition= 'all .2s linear';
    sb5.style.background='white';
    sb5.style.color='black';
    simg5.style.opacity='1';
    simg5_h.style.opacity='0';
});
sbtn6.addEventListener("mouseover" , function(){
    sb6.style.transition= 'all .2s linear';
    simg6.style.transition= 'all .2s linear';
    simg6_h.style.transition= 'all .2s linear';
    sb6.style.background='#00897b';
    sb6.style.color='white';
    simg6.style.opacity='0';
    simg6_h.style.opacity='1';
});

sbtn6.addEventListener("mouseout" , function(){
    sb6.style.transition='all .2s linear';
    simg6.style.transition= 'all .2s linear';
    simg6_h.style.transition= 'all .2s linear';
    sb6.style.background='white';
    sb6.style.color='black';
    simg6.style.opacity='1';
    simg6_h.style.opacity='0';
});


