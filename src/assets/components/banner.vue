<template>
    <div class="jumbotron">
        <h1>{{bannerHeader}}</h1>
        <p>{{bannerTextContent}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bannerHeader: "Добро пожаловать!",
                bannerTextContent: "Приветствуем Вас на хостинге для любительских музыкальных видеороликов по аниме и сериалам!"
            }
        }
    }
</script>