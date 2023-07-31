<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onUnmounted} from 'vue'

const el = ref()

const userData = ref()



onBeforeMount(() => {
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const resData = await response.json();
    userData.value = resData;
  console.log(response);
}
getData();
})

onUnmounted(() => {
  el.value 
  console.log('ttt', el.value);
})

 const name = ref<string>('Siva');
 const userLists = ref<{ id: number | null; name: string; age: number | null; }[]>([
   { 
    id:1,
    name:'rama',
    age:34
   },
   { 
    id:2,
    name:'rama',
    age:54
   }
 ])
 const userName = ref();

 const addUser = () => {
  userLists.value.push({id: null, name: userName.value, age: null})
 }
 
</script>

<template>
  <div v-for="item in userLists" @key="item.id">
     {{ item }}
  </div>
  <h1>{{ name }}</h1>
  <form @submit.prevent="addUser">
    <input type="text" name="user" v-model="userName"/>
    <button type="submit">ADD USER</button>
  </form>
  <p>{{ userData }}</p>
</template>
