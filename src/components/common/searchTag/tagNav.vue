<template>
  <div class="div-nav-tag">
    <ul class="nav-tag">
      <li :key="navTag.id" v-for="navTag in navTags">
        <a class="movie-link" href="#">{{ navTag.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script scoped>

export default {
  data() {
    return {
      navTags: this.$store.state.navTags
    }
  }
}
</script>

<style scoped>
.div-nav-tag {
  text-align: center;
}

.nav-tag {
  float: left;
  padding: 0px;
  width: 100%;
  height: 40px;
  background: #f8f8f8;
  list-style-type: none;
  text-align: center;
}

.nav-tag li {
  display: inline;
  position: relative;
  white-space: nowrap;
}

.nav-tag li a {
  color: #666;
  display: inline-block;
}

.nav-tag li a:hover {
  color: #19b955;
}

.nav-tag li a:visited {
  color: #19b955;
}

@media screen and (min-width:1120px) {
  .nav-tag li {
    margin-right: 10px;
    font-size: 17px;
  }

  .nav-tag li a {
    height: 34px;
    line-height: 34px;
    width: 40px;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .nav-tag li {
    margin-right: 10px;
    font-size: 13px;
  }
  .nav-tag li a {
    height: 34px;
    line-height: 34px;
    width: 34px;
  }
}

@media screen and (max-width:770px) {
  .nav-tag li {
    margin-right: 8px;
    font-size: 13px;
  }
  .nav-tag li a {
    height: 34px;
    line-height: 34px;
    width: 25px;
  }
}
</style>


