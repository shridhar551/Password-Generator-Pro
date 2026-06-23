const p=document.getElementById('password');
const l=document.getElementById('length');
const lenVal=document.getElementById('lenVal');
l.oninput=()=>lenVal.textContent=l.value;
function generatePassword(){
let chars='';
if(upper.checked) chars+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if(lower.checked) chars+='abcdefghijklmnopqrstuvwxyz';
if(number.checked) chars+='0123456789';
if(symbol.checked) chars+='!@#$%^&*()';
if(!chars){alert('Select at least one type');return;}
let pass='';
for(let i=0;i<l.value;i++) pass+=chars[Math.floor(Math.random()*chars.length)];
p.value=pass;
document.getElementById('strength').textContent=l.value<8?'Weak':l.value<14?'Medium':'Strong';
}
function copyPassword(){navigator.clipboard.writeText(p.value);alert('Copied!');}
generatePassword();