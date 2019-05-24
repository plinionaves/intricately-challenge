<template>
  <footer class="footer">

    <div class="container">

      <div class="col-9 row">
        <ul class="footer__links col-12">
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Webinars</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
        <p class="footer_copyright col-12">Ⓒ Copyright 2017, Intricately, Inc. All Rights Reserved.</p>
      </div>

      <div class="col-3 row">
        <ul class="footer__links col-12">
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
@import "../scss/colors";

.footer {
  width: 100%;
  height: 130px;
  padding: 30px 0;
  background-color: #f3f3f3;
}

.footer__links {
  list-style-type: none;
  li {
    float: left;
    a {
      display: inline-block;
      text-decoration: none;
      color: $primary;
      font-size: 14px;
      padding-right: 10px;
      padding-left: 10px;
      border-right: 1px solid $primary;
    }
    &:first-child a {
      padding-left: 0;
    }
    &:last-child a {
      border-right: none;
    }
  }
}

.footer_copyright {
  color: #aeaeae;
  font-size: 14px;
}
</style>
