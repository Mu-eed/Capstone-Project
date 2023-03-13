<template>
    <nav class="navbar navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand logo text-center text-danger" href="#">MEEDLEEZ</a>
    <a class="link text-black" href="#cart">
    <button class="nav-btn"><i class="fa-solid fa-cart-shopping"></i></button></a>
    <a class="link text-black" href="#login">
    <button class="nav-btn"><i class="fa-solid fa-user"></i></button></a>
    <button class="navbar-toggler bg-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon bg-danger"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MEEDLEEZ</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#admin">Admin</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Home</a></li>
              <li><a class="dropdown-item" href="#about">About</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-btn {
  border-radius: 50%;
  background-color: white;
  
}

a.link.text-black {
    /* display: flex;
    justify-content: flex-end; */
    /* padding-left: 65%; */
}
</style>