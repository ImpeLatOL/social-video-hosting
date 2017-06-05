<template>
    <div>
        <p class="pull-right visible-xs">
            <button type="button"
                    class="btn btn-primary btn-xs"
                    data-toggle="offcanvas">
                {{toggleButton}}
            </button>
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                toggleButton: "Нажми"
            }
        }
    }
</script>