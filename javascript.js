function validation(){
  let uname=document.getElementById('uname');
  let pass=document.getElementById('password').value;
  let male=document.getElementById('genderm').checked;
  let female=document.getElementById('genderf').checked;
  let mu = document.getElementById('music').checked;
  let sp =document.getElementById('sp').checked;
  let ent=document.getElementById('ent').checked;
  if(uname.value=='' || pass=='' || (male != 1 && female != 1) || (mu != 1 && sp  != 1 && ent != 1)){
    alert('fill all the fields');
    return false;
  }
  else{
    return true;
  }
}