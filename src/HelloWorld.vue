<template>
   <div>
    <div class="container-fluid">
        <Menu/>
    </div>
   <div class="container">
       <div class="row">
           <div class="col-6">
               <todo-secondmenu/>

               <NoteBox/>
           </div>
           <div class="col-2">
           </div>
       </div>
   </div>
   </div>
</template>

<script>
    import Menu from "@/components/Menu";
    import NoteBox from "@/components/NoteBox";
    import axios from 'axios'

export default {
        components: { Menu,NoteBox},
        data() {
            return {
                info: null
            }
        },
        mounted() {
            axios
                .get('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => (this.info = response))
        }
    }
</script>

