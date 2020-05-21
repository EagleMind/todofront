<template>

    <ul class="nav">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="..." class="rounded mr-2" alt="...">
                <strong class="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                Hello, world! This is a toast message.
            </div>
        </div>
        <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
</template>

<script>
    export default {
            name: "SecondMenu"

    }
</script>

<style scoped>


    .menu{

        border-radius: 20px;
        -webkit-box-shadow: 0px 0px 21px 11px rgba(224,224,224,1);
        -moz-box-shadow: 0px 0px 21px 11px rgba(224,224,224,1);
        box-shadow: 0px 0px 21px 11px rgba(224,224,224,1)
    }
    .menu li{
        margin:10px;
    }


</style>
