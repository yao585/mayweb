const container = document.querySelector('#container');
const ghost = document.querySelector('#signIn');
const signUp = document.querySelector('#signUp');

signUpBtn.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        // 点击「登录」按钮：激活登录面板
signInBtn.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
