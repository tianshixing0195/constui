<template>
    <div class="con-head con-flexBetween ">
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>

    </div>
</template>

<script>
    export default {
        name: "ConNav",
        props:{

        },
        data(){
          return {
              nowIndex:0
          }
        },
        methods:{
            liClick(index){
                this.nowIndex=index;
            }
        }
    }
</script>

<style scoped>

</style>