<template>
    <div class="inner-class">
        <h2>{{addVideoHeader}}</h2>
        <hr>
        <form>
            <div class="form-group">
                <label for="nameInput">{{nameText}}</label>
                <input type="text" class="form-control" id="nameInput" placeholder="Название...">
            </div>
            <div class="form-group">
                <label for="descriptionInput">{{descriptionText}}</label>
                <input type="text" class="form-control" id="descriptionInput" placeholder="Описание...">
            </div>
            <div class="form-group">
                <label for="fileInput">{{fileInputText}}</label>
                <input type="file" id="fileInput">
            </div>
            <button type="submit" class="btn btn-default">{{sendVideoText}}</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addVideoHeader: "Добавить видео",
            nameText: "Введите название видеоролика:",
            descriptionText: "Введите описание видеоролика:",
            fileInputText: "Выберите видеоролик:",
            sendVideoText: "Отправить"
        }
    }
}
</script>

