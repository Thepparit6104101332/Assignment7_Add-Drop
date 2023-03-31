<template>
    <div class="subject">
        <h3>{{ subject.title }}</h3>
        <div class="icons">
        <i class="material=icons" @click="subjectStore.deleteSubject(subject.id)">ยกเลิกวิชา</i>
            
 
  
           

        </div>
    </div>

</template>

<script>
import { useSubjectStore } from '../stores/SubjectStore';

    export default {
        props:['subject'],
        setup(){
            const subjectStore = useSubjectStore()

            return { subjectStore}
        }
    }


</script>