<template>
    <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          <div class="list-group">
            <div href="#" class="list-group-item" v-for="item in items">
                {{item.text}}
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                items:[
                    {text: "Первое видео"},
                    {text: "Второе видео"},
                    {text: "Третье видео"},
                    {text: "Четвертое видео"},
                    {text: "Пятое видео"}
                ]
            }
        }
    }
</script>