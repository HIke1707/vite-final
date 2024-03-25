<script setup>
</script>
<template>
<div class="container">
  <div class="row mt-5">
    <div class="col-md-12">
      <a>
        <h3 class="h3 fw-bold" style="border-top: solid; padding-top: 0.5%;">分店資訊</h3>
      </a>
    </div>
    <div class="col-md-4 mt-md-4">
      <div class="card border-0 mb-4">
        <img
          src="https://images.unsplash.com/photo-1640715787186-d456de067b22?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top rounded-0"
          alt="..."
          style="height: 330px; object-fit: cover;"
        />
        <div class="card-body text-center">
          <h4>南投店</h4>
          <div class="d-flex justify-content-between">
            <p class="card-text text-muted mb-0">
              南投縣苗栗市彰化鎮延平路一段666號
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-md-4">
      <div class="card border-0 mb-4">
        <img
          src="https://images.unsplash.com/photo-1634731755611-bc087bb8738d?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top rounded-0"
          alt="..."
          style="height: 330px; object-fit: cover;"
        />
        <div class="card-body text-center">
          <h4>台北店</h4>
          <div class="d-flex justify-content-between">
            <p class="card-text text-muted mb-0">
              台北市高雄區台南路台中街一號
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-md-4">
      <div class="card border-0 mb-4">
        <img
          src="https://images.unsplash.com/photo-1542372177-002ea9732b17?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top rounded-0"
          alt="..."
          style="height: 330px; object-fit: cover;"
        />
        <div class="card-body text-center">
          <h4>台東店</h4>
          <div class="d-flex justify-content-between">
            <p class="card-text text-muted mb-0">
              台東縣屏東鄉嘉義路5號
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container my-7">
  <div class="row">
    <div class="col-md-6">
      <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-fluid">
    </div>
    <div class="col-md-4 m-auto text-center">
      <h4 class="mt-4">各式盒玩</h4>
      <p class="text-muted">發掘驚奇之旅！盒玩帶您進入充滿挑戰與驚喜的世界，每個組件都是一場冒險的起點。</p>
    </div>
  </div>
  <div class="row flex-row-reverse justify-content-between mt-4">
    <div class="col-md-6">
      <img src="https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-fluid">
    </div>
    <div class="col-md-4 m-auto text-center">
      <h4 class="mt-4">經典模型</h4>
      <p class="text-muted">打造夢想世界！高品質模型，細緻製作，讓您盡情展現創造力，打造屬於自己的獨特收藏。</p>
    </div>
  </div>
</div>
<section class="container-fluid px-0 mb-8 mb-md-7">
  <div class="row g-0 flex-column-reverse flex-md-row">
    <div class="col-md-6 ">
      <div class="d-flex flex-column justify-content-center
            align-items-center h-100 position-md-relative">
            <div class="bg-white shadow-xl p-9 p-md-8 p-lg-9 position-md-absolute bigSaleBanner-body">
              <h3 class="h3 fw-bold mb-4">特惠中</h3>
              <p>即日起只要輸入優惠碼「toyland」即可享全站9折優惠</p>
              <a class="btn btn-primary"> 前往選購 </a>
            </div>
      </div>
    </div>
    <div class="col-md-6">
      <img style="margin: 1%;" src="https://images.unsplash.com/photo-1510194638421-92f54ce46444?q=80&w=2735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="瑕疵品圖" class="img-cover img-position-tc w-100">
    </div>
  </div>
</section>
</template>

<style scoped>
.bigSaleBanner {
    height: 380px
}

.bigSaleBanner-body {
    width: 100%
}
@media (min-width: 768px) {
    .bigSaleBanner-body {
        width:100%;
        right: -5%
    }

    .special-px {
        padding-left: 70.08px;
        padding-right: 70.08px
    }
}
@media (min-width: 992px) {
    .indexBanner {
        height:650px
    }

    .bigSaleBanner {
        height: 587px
    }

    .bigSaleBanner-body {
        width: 100%;
        right: -10%
    }

    .masonryCard-imgStretch {
        height: 600px
    }

    .contactForm {
        height: 587px
    }

    .contactForm-body {
        left: -10%
    }

    .cartQty {
        min-width: 15%
    }
}
@media (min-width: 1200px) {
  .bigSaleBanner-body {
      width:80%
  }
}
</style>
