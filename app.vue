<script setup lang="ts">
//#region enums   < Gender, Popularity, Length names ...
import {Gender, Popularity, Length, names} from '@/data'
//#endregion

//#region Interfaces < OptionsState ...

interface OptionsState {
  gender : Gender;
  popularity : Popularity;
  length : Length;
}

//#endregion

//#region reactive < <OptionsState> ...

const options = reactive<OptionsState>({
  gender : Gender.UNISEX,
  popularity : Popularity.TRENDY,
  length : Length.ALL,
});

//#endregion

const computeSelectedNames = () =>{
  const filterNames = names
  .filter((name) => name.gender === options.gender)
  .filter((name) => name.popularity === options.popularity)
  .filter((name) => {
    if(options.length === Length.ALL) return true
    else return name.length === options.length
  })

  selectedNames.value = filterNames.map(name => name.name);
};

const selectedNames = ref<string[]>([]);
</script>


<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>
    <div class="options-container">
      <div class="option-container">
        <h4> 1) Choose a gender</h4>
        <div class="option-buttons">
          <button class="option option-left" 
            :class="options.gender === Gender.BOY && 'option-active'"
            @click="options.gender = Gender.BOY"
          >Boy</button>
          <button class="option" 
            :class="options.gender === Gender.UNISEX && 'option-active'"
            @click="options.gender = Gender.UNISEX"
          >Unisex</button>
          <button class="option option-right"  
            :class="options.gender === Gender.GIRL && 'option-active'"
            @click="options.gender = Gender.GIRL"
          >Girl</button>
        </div>
      </div>
      <div class="option-container">
        <h4> 2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button class="option option-left"
            :class="options.popularity === Popularity.TRENDY && 'option-active'"
            @click="options.popularity = Popularity.TRENDY"
          >Trendy</button>
          <button class="option option-right"
            :class="options.popularity === Popularity.UNIQUE && 'option-active'"
            @click="options.popularity = Popularity.UNIQUE"
          >Unique</button>
        </div>
      </div>
      <div class="option-container">
        <h4> 3) Choose name's length</h4>
        <div class="option-buttons">
          <button class="option option-left"
            :class="options.length === Length.LONG && 'option-active'"
            @click="options.length = Length.LONG"
          >Long</button>
          <button class="option"
            :class="options.length === Length.ALL && 'option-active'"
                        @click="options.length = Length.ALL"
          >All</button>
          <button class="option option-right"
            :class="options.length === Length.SHORT && 'option-active'"
            @click="options.length = Length.SHORT"
          >Short</button>
        </div>
      </div>
      <button class="primary"
      @click="computeSelectedNames">find name</button>
    </div>
    <div class="cards-container">
      <div v-for="name in selectedNames" :key="name" class="card">
        <h4>{{name}}</h4>
        <p>x</p>
      </div>
    </div>
    <!-- {{ selectedNames }} -->
  </div>
</template>

<style scoped>
.container{
  font-family : Arial, Helvetica, sans-serif;
  color : rgb(27, 60, 138);
  max-width: 50rem;
  margin : 0 auto;
  text-align: center;
}

h1{
  font-size: 3vh;
}

.options-container{
  background-color : rgba(255,238,236,1);
  border-radius : 2vh;
  padding : 1vh;
  width : 95%;
  margin: 0 auto;
  margin-top: 4vh;
  position: relative;
}

.option-container{
  margin-bottom: 2vh;
}

.option{
  background: white;
  outline: 0.15vh solid rgba(249, 87, 89, 1);
  border: none;
  padding : 0.75vh;
  width: 12vh;
  color: rgba(27, 60, 138, 1);
  cursor: pointer;
  font-weight: 200;
}

.option-left{
  border-radius : 1vh 0 0 1vh;
}
.option-right{
 border-radius : 0 1vh 1vh 0;
}

.option-active{
  background-color: rgba(249, 87, 89, 1);
  color : white;
}

.primary{
  background-color: rgba(249, 87, 89, 1);
  color: white;
  border-radius: 6.5vh;
  border: none;
  padding: 0.75vh 4vh;
  font-size: 1.5vh;
  margin-top: 1vh;
  cursor: pointer;
}

.cards-container{
  display: flex;
  margin-top: 3vh;
  flex-wrap: wrap;
}

.card{
  background-color: rgb(27, 60, 138);
  width: 28%;
  color: white;
  border-radius: 1vh;
  padding: 0.1vh;
  margin-right: 0.5vh;
  margin-bottom: 1vh;
  position: relative;
}

.card p{
  position: absolute;
  top: -15%;
  left: 92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.178);
}
</style>