<script lang="ts" setup>
  const fits = 'cover'
  const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>
  <el-row :gutter="20">
    <el-col v-for="(o, index) in 50"
      :key="o"
      :span="12"
    >
      <el-card class="card" :body-style="{ padding: '0px' }">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-image  class='card-image' :src="url" :fit="fits" alt="image"/>
          </el-col>
          <el-col :span="14">
            <el-text size="large">$2500 Condo For Rent</el-text><br>
            <el-text size="small">Mississauga, Ontario, L5B 0M4</el-text><br>
            <el-text size="small">Fully Furnished | 750 SQft</el-text>
            <el-rate class="rating"/>
            <el-row>
              <el-badge :value="2" class="item">
                <button>Bed</button>
              </el-badge>
              <el-badge :value="1" class="item">
                <button>Bath</button>
              </el-badge>
              <el-badge :value="1" class="item">
                <button>Parking</button>
              </el-badge>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
  .card-image {
    width: 120px; 
    height: 120px;
    margin-bottom: -4px;
  }
  .card {
    margin-bottom: 20px;
    background-color: #FFFDFA;
  }

  .el-icon svg {
    height: .9em;
    width: .9em;
  }

  .el-rate__item{
    width: 18px;
  }

  .item {
    margin:10px 20px 0 0;
  }
</style>
