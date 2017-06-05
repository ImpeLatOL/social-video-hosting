<template>
    <div class="row">
        <div class="col-xs-6 col-lg-4" v-for="item in items">
          <h2>{{item.header}}</h2>
          <p>{{item.content}}</p>
          <p><a class="btn btn-default" href="#" role="button">{{buttonName}}</a></p>
        </div>  
    </div>  
</template>

<script>
    export default {
        data(){
            return {
                buttonName: "Просмотреть",
                items: [
                    {
                        header: "Первое видео",
                        content: "Здесь будет первое видео"
                    },
                    {
                        header: "Второе видео",
                        content: "Здесь будет второе видео"
                    },
                    {
                        header: "Третье видео",
                        content: "Здесь будет третье видео"
                    },
                    {
                        header: "Четвертое видео",
                        content: "Здесь будет четвертое видео"
                    },
                    {
                        header: "Пятое видео",
                        content: "Здесь будет пятое видео"
                    },
                    {
                        header: "Шестое видео",
                        content: "Здесь будет шестое видео"
                    }
                ]
            }
        }
    }
</script>