import { defineStore } from 'pinia'

export const useSubjectStore = defineStore('subjectStore' , {
    state : () => ({
        subjects: [
            {id: 1, title:"รวช.000 วิชาอิสระ" , isFav: false},
            {id: 2, title:"รวช.100 วิชาเอก" , isFav: true}
           
        ],
       
    }),

        getters: {
            favs(){
                return this.subjects.filter(t => t.isFav)
            },

            favCount(){
                return this.subjects.reduce((p,c) => {
                    return c.isFav ? p + 1 : p
                }, 0)
            },
            totalCount: (state) => {
                return state.subjects.length
            }
        },


        actions:{
            addSubject(subject) {
                this.subjects.push(subject)
            },
        

            deleteSubject(id) {
                this.subjects = this.subjects.filter(t => {
                return t.id !== id
                })
            },

            toggleFav(id) {
                const subject = this.subjects.find(t => t.id === id)
                subject.isFav = !subject.isFav
            }
          
        }
})