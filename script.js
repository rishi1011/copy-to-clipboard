const span = document.querySelector('span');
const input = document.querySelector('input');
const copiedBox = document.querySelector('div.copied-box');

const passwordText = document.querySelector('.container.two > input');

span.addEventListener('click', () => {
    copyToClipboardAndSelect(input);
    showCopiedBox();
    setTimeout(hideCopiedBox, 1500);
});

passwordText.addEventListener('mouseover', () => {
    copyToClipboardAndSelect(passwordText);
    passwordText.nextElementSibling.innerText = 'Copied';
    setTimeout(function () {
        passwordText.nextElementSibling.innerText = 'Hover To Copy';
    }, 5000);
});

function hideCopiedBox() {
    copiedBox.classList.remove('show');
}

function showCopiedBox() {
    copiedBox.classList.add('show');
}

function copyToClipboardAndSelect(input) {
    navigator.clipboard.writeText(input.value);
    input.select();
}
