const shuffle = arr => arr.sort((a,b)=>0.5-Math.random());

window.onload = ()=> {
	document.getElementById('submit').onclick = ()=> {
		const chars = document.getElementById('input').value.split('').filter(s=>s!=' ');
		let combos = [];
		for(let i=0; i<10; i++) {
			combos.push(shuffle([...chars]).join(''));
		}
		document.getElementById('outputs').innerHTML = combos.join('<br>');
	};
};
