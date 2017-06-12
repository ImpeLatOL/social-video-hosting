<template>
  <div id="app">
    <!--menu-->
    <nav class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">{{mainPageLink}}</router-link></li>
            <li><router-link to="/addVideo">{{addVideoLink}}</router-link></li>
            <li><router-link to="/about">{{aboutUsLink}}</router-link></li>
            <li><router-link to="/login">{{logInLink}}</router-link></li>
            <!--search-->
            <form class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Поиск...">
              </div>
              <button type="submit" class="btn btn-default">{{searchButtonText}}</button>
            </form>  
            <!--<form class="form-inline">
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password">
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-default">Sign in</button>
            </form>-->
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      mainPageLink: "Главная",
      addVideoLink: "Добавить видео",
      aboutUsLink: "О проекте",
      logInLink: "Зарегистрироваться",
      searchButtonText: "Поиск"
    }
  },
  components: {
    //
  }
}
</script>

<style>

.inner-class {
  margin-left: 10px;
}

.inner-class input.form-control {
    width: 20%;
}
</style>

