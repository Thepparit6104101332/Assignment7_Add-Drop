<script>
import { useSubjectStore } from '../stores/SubjectStore';
import SubjectDetails from '../components/SubjectDetails.vue';
import SubjectForm from '../components/SubjectForm.vue';

import { ref } from "vue";
import Namesubject from './Namesubject.vue';

 
export default {
  components: { SubjectDetails, SubjectForm, Namesubject },
  setup () {
    const subjectStore = useSubjectStore()

    const filter = ref('all')

    return { subjectStore , filter }
  }
}



</script>

<template>
  <nav class="filter">
  <button @click="filter = 'all'"></button>
  
  
  </nav>


<div class="=new-subject-form">
  <SubjectForm />
</div>

<div class="subject-list" v-if="filter === 'all'">
<p>Your have {{ subjectStore.totalCount }} subject </p>
  <div v-for="subject in subjectStore.subjects">
    <SubjectDetails :subject="subject"/>
  
  </div>
</div>
<div class="subject-list" v-if="filter === 'favs'">
  <p>Your have {{ subjectStore.favCount }} subject </p>
  <div v-for="subject in subjectStore.favs">
    <SubjectDetails :subject="subject"/>
  
  </div>
</div>



  <Namesubject></Namesubject>




   


</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.tala{
   
 
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}

h1{
    padding: 20px;
}

b{
  padding: 20px;
}



</style>