
const pressed = [];
const secretCode = 'laurene';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.lenght - 1, pressed.lenght - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
        console.log('yeahhh');
        cornify_add();
    }
    console.log(pressed);
});