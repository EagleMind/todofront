<template>
   <div>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
   <div class="container">
       <div class="row">
           <div class="col-6">
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

           </div>
           <div class="col-2">
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
           </div>
       </div>
   </div>
   </div>
</template>

<script>

    export default {
        name: 'HelloWorld',

    }
</script>

