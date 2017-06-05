<template>
    <nav class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
                  data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" id="custom-navbar-brand">
            {{brandName}}
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">{{mainPageLink}}</a></li>
            <li><a href="#about">{{addVideoLink}}</a></li>
            <li><a href="#contact">{{aboutUsLink}}</a></li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div><!-- /.container -->
    </nav><!-- /.navbar -->
</template>

<script>
    export default {
      data(){
        return {
          brandName: "AMV хостинг для любителей сериалов и аниме",
          mainPageLink: "Главная",
          addVideoLink: "Добавить видео",
          aboutUsLink: "О проекте"
        }
      }
    }
</script>