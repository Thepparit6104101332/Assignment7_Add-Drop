<template>
    <div class="Namesubject">
        <h1>ดรอปเรียนคืออะไร ไปดูกัน กดที่รูปก็จะรู้!!!</h1>
      </div>
      
      <div class="responsive">
      <div class="gallery">
        <a><RouterLink to="รายชื่อวิชาในแผนการเรียน"><img src="https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/25/2022/02/take-yeae-off-.jpg"  class="card-img-top" alt="...">
        </RouterLink></a>
        </div>
        </div>
    
        <div class="responsive">
      <div class="gallery">
        <a><RouterLink to="การเพิ่มถอนวิชา"><img src="https://mustudent.mahidol.ac.th/wp-content/uploads/2022/07/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%96%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2.png"  class="card-img-top" alt="...">
        </RouterLink></a>
        </div>
        </div>
    
        <div class="responsive">
      <div class="gallery">
        <a><RouterLink to="รายชื่อวิชาในแผนการเรียน"><img src="https://static.trueplookpanya.com/cmsblog/2938/66938/banner_file.jpg"  class="card-img-top" alt="...">
        </RouterLink></a>
        </div>
        </div>
    
        
    
        <div class="responsive">
      <div class="gallery">
        <a><RouterLink to="การเพิ่มถอนวิชา"><img src="https://pbs.twimg.com/media/DsCoed3U8AIn6O-.jpg"  class="card-img-top" alt="...">
        </RouterLink></a>
        </div>
        </div>
    
        
    
    
    
</template>
    
    
<style>
    @media (min-width: 1024px) {
      .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }
    }
    
    div.gallery {
      border: 1px solid #ccc;
    }
    
    div.gallery:hover {
      border: 1px solid #777;
    }
    
    div.gallery img {
      width: 100%;
      height: auto;
    }
    
    div.desc {
      padding: 15px;
      text-align: center;
    }
    
    * {
      box-sizing: border-box;
    }
    
    .responsive {
      padding: 0 6px;
      float: left;
      width: 24.99999%;
    }
    
    @media only screen and (max-width: 700px) {
      .responsive {
        width: 49.99999%;
        margin: 6px 0;
      }
    }
    
    @media only screen and (max-width: 500px) {
      .responsive {
        width: 100%;
      }
    }
    
    .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }
    
    
</style>