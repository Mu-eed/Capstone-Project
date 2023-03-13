<template>
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="container my-5">
                        <h1 class="conta-txt text-light">Have any questions? We would love to answer them.</h1>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="container my-5 card-ting">
                        <div class="card w-125 mx-auto p-5 shadow p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                        <form action="https://formspree.io/f/mqkjgakp" method="POST">
                            <div class="row">
                            <div class="col text-black">
                                Name<input name="name" type="text" class="form-control">
                            </div>
                            <div class="col text-black">
                                Surname<input name="lastname" type="text" class="form-control">
                            </div>
                            </div>
                            <div class="form-group text-black">
                            <label for="exampleInputEmail1">Email address</label>
                            <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </div>
                            <div class="form-group text-black">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-light">Submit</button>
                        </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
#contact {
    min-height: 100vh;
    background-color: crimson;

}

.conta-txt {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 40%;
}

.card-ting {
    padding-top: 20%;
}
</style>