<template>
<section id="loginandregister">
    <div class="container" id="container">
        <div class="form-container register-container">
            <form action="#">
                <h1>Register here</h1>
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <button>Register</button>
            </form>
        </div>

        <div class="form-container login-container">
            <form action="#">
                <h1>Login here</h1>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="password">
                <button>Login</button>
            </form>
        </div>

        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1 class="title">Hello friends</h1>
                    <p>if you already have an account, login here and have fun</p>
                    <button id="login" class="ghost">Login</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1 class="title">Start your journey</h1>
                    <p>If you don't have an account, start your journey here.</p>
                    <button id="register" class="ghost">Register</button>
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
#loginandregister {
    display: flex;
    background-color: crimson;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 100vh;
}

h1.title {
    font-size: 45px;
    margin: 0;
}

p {
    font-size: 14px;
    margin: 20px 0 30px;
}


</style>