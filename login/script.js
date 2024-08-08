function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('Usuário já cadastrado.');
        return;
    }

    localStorage.setItem(username, password);
    alert('Cadastro realizado com sucesso!');
    showLogin();
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === null) {
        alert('Usuário não encontrado.');
        return;
    }

    if (storedPassword !== password) {
        alert('Senha incorreta.');
        return;
    }

    window.location.replace("../moedas/index.html");
}
