// 변수설정
const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', function (e) {
	e.preventDefault();

	// btnCall.classList.add('on');
	// menuMo.classList.add('on');

	// 토글버튼으로 구현
	// btnCall.classList.toggle('on');
	// menuMo.classList.toggle('on');

	//on

	let isOn = btnCall.classList.contains('on');

	if (isOn) {
		btnCall.classList.remove('on');
	} else {
		btnCall.classList.add('on');
	}

	// menuMo(내가한거)

	// let menuMo = btnCall.classList.contains('menuMo');
	// if (menuMo) {
	// 	btnCall.classList.remove('menuMo');
	// } else {
	// 	btnCall.classList.add('menuMo');
	// }

	let isOnMo = menuMo.classList.contains('on');

	if (isOnMo) {
		menuMo.classList.remove('on');
	} else {
		menuMo.classList.add('on');
	}

	// 삼항연산자(내가한거)
	// if (on % 2) {
	// 	btnCall = 'remove';
	// } else {
	// 	menuMo = 'add';
	// }
	// let on = x % 2 ? (btnCall = 'remove') : (menuMo = 'add');

	//삼항연산자 o
	// isOn ? btnCall.classList.remove('on') : btnCall.classList.add('on');
	// isOnMo ? menuMo.classList.remove('on') : menuMo.classList.add('on');
});
