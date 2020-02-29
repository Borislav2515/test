var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var total = document.getElementById('total');
var inputNone = document.getElementById('input-none');
var locVal = localStorage.getItem('p1');
var x = inputNone.value;
var y = 0; 
var yPred = 0;

window.onload = function(){
	if (localStorage.getItem('p1')!==null) {
        locVal = localStorage.getItem('p1');
        total.innerHTML = locVal;
        y = locVal;
	}else{
		localStorage.getItem('p1')===null;
		console.log('Текущее значение: '+ y);

	}
}

plus.onclick = function pl(){
	    yPred = y;
		y++;
		x = y;
		localStorage.setItem('p1', x);
		var locVal = localStorage.getItem('p1');
		total.innerHTML = locVal;

		
	}
minus.onclick = function mn(){
	if (y>=1) {
        yPred = y;
		y--;
		x = y;
		localStorage.setItem('p1', x)
		var locVal = localStorage.getItem('p1');
		total.innerHTML = locVal;
	}
}
	let mutationObserver = new MutationObserver(function(mutations) {
   mutations.forEach(function(mutation) {
   	if  (x > yPred) {
   		console.log('Количество увеличилось, текущее значение: ' + x);
   	}else if  (x < yPred) {
   		console.log('Количество уменьшилось, текущее значение: ' + x)
   	}else{
   		x=y;
   		console.log('Текущее значение:'+ x);

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

