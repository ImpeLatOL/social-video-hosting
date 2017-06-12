<template>
    <div class="inner-class">
        <h2>Вход</h2>
        <hr>
        <form >
            <div class="form-group">
                <label for="exampleInputEmail1">{{loginText}}</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Логин...">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">{{passwordTextOne}}</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Пароль...">
            </div>
            <button type="submit" class="btn btn-default">{{signInButtonText}}</button>
        </form>
        <hr>
        <h2>Регистрация</h2>
        <hr>
        <form>
            <div class="form-group">
                <label for="inputLoginText">{{loginText}}</label>
                <input type="email" class="form-control" id="inputLoginText" placeholder="Логин...">
            </div>
            <div class="form-group">
                <label for="inputPasswordTextOne">{{passwordTextOne}}</label>
                <input type="password" class="form-control" id="inputPasswordTextOne" placeholder="Пароль...">
            </div>
            <div class="form-group">
                <label for="inputPasswordTextTwo">{{passwordTextTwo}}</label>
                <input type="password" class="form-control" id="inputPasswordTextTwo" placeholder="Пароль снова...">
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox">{{agreementText}}
                </label>
            </div>
            <button type="submit" class="btn btn-default">{{signUpButtonText}}</button>
        </form>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginText: "Введите Ваш ник:",
            passwordTextOne: "Введите Ваш пароль:",
            passwordTextTwo: "Введите пароль снова:",
            agreementText: "Подтверждаю своё согласие с правилами пользования сервисом",
            signUpButtonText: "Зарегистрироваться",
            signInButtonText: "Войти"
        }
    }
}
</script>
