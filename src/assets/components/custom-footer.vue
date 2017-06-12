<template>
    <div>
        <hr>
        <footer>
            <p>&copy; {{currentYear}} {{companyName}}.</p>
        </footer>
    </div>    
</template>

<script>
    
    export default {
        data(){
            return {
                currentYear: this.getCurrentYear(),
                companyName: "ImpeLatOL"
            }
        },
        methods: {
            getCurrentYear: function(){
                    return new Date().getFullYear();
            }
        }
    }
</script>

<style>
    footer {
        margin-left: 15px; 
    }
</style>
