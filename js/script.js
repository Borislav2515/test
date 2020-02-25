let total = document.getElementById('total');
let localValue = localStorage.getItem('p1');
window.onload = function(){
	if (localStorage.getItem('p1')!==null) {
		let localValue = localStorage.getItem('p1');
		total.innerHTML = localValue;
    }else if (localStorage.getItem('p1')===null){
        localValue = 0;
        total.innerHTML = localValue;
    	}
    }
let cont = localStorage.getItem('p1');
document.getElementById('plus').onclick = function(){
	if (localStorage.getItem('p1')!==null) {
		let cont = localStorage.getItem('p1');
		cont ++;
		localStorage.setItem('p1', cont)
        total.innerHTML = cont;
	}else if (localStorage.getItem('p1')===null) {
		cont1 = 0;
		cont1 ++;
		localStorage.setItem('p1', cont1)
        total.innerHTML = cont1;
	}
}
document.getElementById('minus').onclick = function(){
	if (localStorage.getItem('p1')!==null) {
		let cont = localStorage.getItem('p1');
		if (cont >=1) {
			cont --;
			localStorage.setItem('p1', cont)
	        total.innerHTML = cont;
		}
	}else if (localStorage.getItem('p1')===null) {
		if (cont >= 1) {
			cont --;	
			localStorage.setItem('p1', cont)
	        total.innerHTML = cont;
		}	
	}
}

//--------------------------MutationObserver-----------------------------

 let mutationObserver = new MutationObserver(function(mutations) {
   mutations.forEach(function(mutation) {
   	
   	if (cont <= 1 ) {
   		console.log('Количество изменилось, текущее значение:'+  cont)
   	}else if (cont >=1) {
   		console.log('Количество изменилось, текущее значение:'+ cont)
   	}else{

   	}
    
   });
 });

mutationObserver.observe(document.getElementById('total'), {
  // attributes: true,
  // characterData: true,
  childList: true, 
//   subtree: true,
//   attributeOldValue: true,
//   characterDataOldValue: true
});







// //----------------------------------------------

