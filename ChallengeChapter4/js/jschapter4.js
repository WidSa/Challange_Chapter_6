function Komputer() {
	const Cgunting = document.getElementById('gunting');
	const Cbatu = document.getElementById('batu');
	const Ckertas = document.getElementById('kertas');
	const pilihan = [Cgunting, Cbatu, Ckertas]
	const comp = pilihan[Math.floor(Math.random() * pilihan.length)];
	if(comp == Cgunting) return 'gunting';
	if(comp == Cbatu) return 'batu';
	if(comp == Ckertas) return 'kertas';
	return comp;
}

function getHasil(comp, player){
	const draw = document.querySelector('.Draw');
	const win = document.querySelector('.Win');
	const lose = document.querySelector('.Lose');
	if (player == comp) return draw.style.display = 'block';
	if (player == 'gunting') return (comp == 'kertas') ? win.style.display = 'block': lose.style.display = 'block';
	if (player == 'batu') return (comp == 'kertas') ? lose.style.display = 'block' : win.style.display = 'block';
	if (player == 'kertas') return (comp == 'gunting') ? lose.style.display = 'block' : win.style.display = 'block';
}


const PlayerChoise = document.querySelectorAll('.Playar div');
PlayerChoise.forEach(function(GameStart) {
	GameStart.addEventListener('click',function() {
		const Com = Komputer();
		const Pplayer = GameStart.className;
		const hasil = getHasil(Com, Pplayer);
		GameStart.classList.add('hover');

		console.log(Pplayer);
		console.log(Com);
		console.log(hasil);
		
	});
});

const Reload = document.querySelector('.Refresh');
Reload.addEventListener("click", function() {
	location.reload();
	return false;
});


