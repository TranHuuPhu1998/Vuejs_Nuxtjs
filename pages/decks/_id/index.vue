<template>
  <section class="r">
    <div class="ct text_center">
      <h3>Deck: Learn English {{ $route.params.id }}</h3>
      <div class="tools">
        <button class="btn btn_success">Start now!</button>
        <button class="btn btn_primary">Create a card</button>
      </div>
      <hr class="devide" />
      <div class="r cards">
        <div class="c_3">
          <div class="card">
            <div class="front-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU"
                alt="sasa"
              />
            </div>
            <div class="back-card">
              <h6>Shop</h6>
            </div>
          </div>
        </div>
        <div class="c_3">
          <div class="card">
            <div class="front-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU"
                alt="sasa"
              />
            </div>
            <div class="back-card">
              <h6>Shop</h6>
            </div>
          </div>
        </div>
        <div class="c_3">
          <div class="card">
            <div class="front-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU"
                alt="sasa"
              />
            </div>
            <div class="back-card">
              <h6>Shop</h6>
            </div>
          </div>
        </div>
        <div class="c_3">
          <div class="card">
            <div class="front-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU"
                alt="sasa"
              />
            </div>
            <div class="back-card">
              <h6>Shop</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// export default {
//   validate({ params }) {
//     return /^[0-9]{9,12}$/.test(params.id)
//   },
// }
//
</script>

<style lang="scss" scoped>
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 100%;
    }
  }
  .devide {
    margin: 2rem 0;
  }
}
</style>
