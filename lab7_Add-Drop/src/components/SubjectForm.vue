<template>
    <form @submit.prevent="handleSubmit">
        <select stustuSubject="" v-model=newSubject required>
        <option></option>
        <option>รวช.001 วัสดุศาสตร์</option>
        <option>รวช.002 คณิตศาสตร์</option>
        <option>รวช.003 เคมีอุตสาหกรรมและเทคโนโลยีสิ่งทอ</option>
        <option>รวช.004 เทคโนโลยีชีวภาพ</option>
        <option>รวช.005เทคโนโลยีสารสนเทศ</option>
        <option>รวช.006ฟิสิกส์ประยุกต์</option>
        <option>รวช.007วิทยาการคอมพิวเตอร์</option>
        <option>รวช.008วิทยาศาสตรบัณฑิต สาขาวิชาเคมี</option>
        <option>รวช.009สถิติ</option>
        </select>
    
    <button>เพิ่มวิชา</button>
    
    </form>


</template>

<script>
import { useSubjectStore } from '../stores/SubjectStore';
import { ref } from 'vue' ;

    export default {
        setup(){
            const subjectStore = useSubjectStore()

            const newSubject = ref('')

            const handleSubmit = () => {
                if(newSubject.value.length > 0){
                    subjectStore.addSubject({
                        title: newSubject.value,
                        isFav: false,
                        id: Math.floor(Math.random() * 10000)
                    })
                    newSubject.value = ""
                }
            }

            return { handleSubmit , newSubject }
        }
    }


</script>
