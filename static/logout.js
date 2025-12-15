  //for logout
  document.addEventListener("DOMContentLoaded", () => {
  const show_opt1=document.getElementById('logout');
  const choose=document.getElementById('event');

if(show_opt1&&choose){
show_opt1.addEventListener('click',()=>{
  choose.style.display='flex';

});
}
  });