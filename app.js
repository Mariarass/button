const colorButton=document.querySelectorAll('#head')
const Button=document.querySelector('#widgetButton')
const Slider=document.querySelectorAll('#slid')
const Numbers=document.querySelectorAll('#num')
const Radius=document.querySelectorAll('#radius')
const Copy=document.querySelector('#copy')
let arrayProperty=[ "height","width","background-color",
            "border-top","border-bottom","border-left","border-right",
            "border-top-left-radius","border-bottom-right-radius",
            "border-top-right-radius","border-bottom-left-radius"]
const style = getComputedStyle(Button,null);
let Style=''

Copy.addEventListener('click',function(){
    Style=''
    arrayProperty.forEach(function(entry){
        Style+=`${entry}`+': '+String(style.getPropertyValue(`${entry}`))+';\n' })

    
   
    alert(Style)
})
 




colorButton[0].addEventListener('input',()=>{ Base(2) })

colorButton[1].addEventListener('input',()=>{ Base(3) })
colorButton[2].addEventListener('input',()=>{ Base(4) })
colorButton[3].addEventListener('input',()=>{ Base(5) })
colorButton[4].addEventListener('input',()=>{ Base(6) })

Slider[0].addEventListener('input',()=>{ Base(3) })
Slider[1].addEventListener('input',()=>{ Base(4) })
Slider[2].addEventListener('input',()=>{ Base(5) })
Slider[3].addEventListener('input',()=>{ Base(6) })

Slider[4].addEventListener('input',()=>{ Base(7) })
Slider[5].addEventListener('input',()=>{ Base(7) })
Slider[6].addEventListener('input',()=>{ Base(7) })
Slider[7].addEventListener('input',()=>{ Base(7) })


function Base(num){
    if(num===0){
        Button.style.width=`${Numbers[num].value}px`}
    else if (num===1){  
        Button.style.height=`${Numbers[num].value}px`}
    else if (num===2){
        Button.style.background=colorButton[0].value}
    else if (num===3){
        Button.style.borderTop=`${Slider[0].value}px solid ${colorButton[1].value}` }
    else if (num===4){
        Button.style.borderBottom=`${Slider[1].value}px solid ${colorButton[2].value}` }
    else if (num===5){
        Button.style.borderLeft=`${Slider[2].value}px solid ${colorButton[3].value}` }
    else if (num===6){
        Button.style.borderRight=`${Slider[3].value}px solid ${colorButton[4].value}` }
    else if(num==7){
        Button.style.borderRadius=`${Slider[4].value}px ${Slider[6].value}px ${Slider[5].value}px ${Slider[7].value}px`}
    }

