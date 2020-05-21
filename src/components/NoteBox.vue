<template>

        <div class="col-sm-2">
            <div class="card">

                <div class="card-inner">
                    <div class="header">
                        <h2>qsdsqd</h2>
                    </div>
                    <div class="content">
                        <p>sqd</p>
                    </div>
                </div>
            </div>
        </div>


</template>

<script>
    import axios from 'axios'

    export default {
        name: "NoteBox",
        data(){
            return{
                notebox:null,
                loading: true,
                errored: false
            }
        },
        mounted () {
            var optionAxios = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, X-Token-Auth, Authorization'
                }
            }
            axios.get('localhost:8000/notes',optionAxios)

                .then(response => {
                    this.notebox = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }
</script>
<style scoped>

    .card {
        border: 1px grey solid;
        transition: all 0.2s ease-in-out;
        box-sizing: border-box;
        margin-top:10px;
        margin-bottom:10px;
        background-color:#FFF;
    }

    .card:hover {
        box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .card > .card-inner {
        padding:10px;
    }
    .card .header h2, h3 {
        margin-bottom: 0px;
        margin-top:0px;
    }
    .card .header {
        margin-bottom:5px;
    }
    .card img{
        width:100%;
    }
</style>
