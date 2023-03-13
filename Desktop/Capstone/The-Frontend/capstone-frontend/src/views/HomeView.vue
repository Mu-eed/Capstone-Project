<template>
  <section id="myHome" class="bg-danger">
  <div class="home">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-6">
          <img src="https://i.postimg.cc/xdqK9TmT/Picsart-23-03-13-09-32-24-589.png" class="home-img">
        </div>
        <div class="col-md-6 ">
          <h1 class="home-txt text-light">MEEDLEEZ</h1>
          <h5 class="text-light">Hey you! Have you ever loved a game or an anime or an entire franchise, and want collectibles of them to show your love for them?</h5>
          <router-link to="/About"><button id="myBtn" class="animate__animated animate__fadeIn animate__delay-5s">Welcome to Meedlez!</button></router-link>
        </div>
      </div>
    </div>
  </div>
  </section>

  <section id="home-carousel">
  <div class="home">
    <h1 class="home-txt text-dark"> FEATURED</h1>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/MGGbFGTY/Picsart-23-03-13-08-54-16-460.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Attack on Titan Limited Collection</h5>
        <p>Add these limited items to your collections before they leave Meedleez.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/fy79L4yL/Picsart-23-03-13-08-57-28-088.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Five Nights at Freddy's</h5>
        <p>Shop the Five Nights at Freddy's Collection. If your products go missing, we are not responsible for any fatal injuries that occur.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/7Ym5QnTp/Picsart-23-03-13-08-59-38-531.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block text-black">
        <h5>Some more collections</h5>
        <p>We have many more Meedleez from the various franchises.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</section>



</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>

<style scoped>
#myHome {
  min-height: 100vh;
  /* background-color: crimson; */
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.home {
  margin: 7%;
  display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.home-img {
  height: 500px;
}

.home-txt {
  font-size: 100px;
}

#myBtn {
    display: inline-block;
    transition: all 0.5s;
    text-decoration: none;
    border: none;
    border-radius: 6px;
    padding: 10px 24px;
    cursor: pointer;
    background: transparent;
    color: #f1f1f1;
}

#myBtn:hover {
  background-color: white;
  color: crimson;
  transition: 0.8s;
}

#home-carousel {
  background-color: white;
}
</style>
