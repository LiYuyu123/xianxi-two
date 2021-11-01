import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    state: {
        option: {},
        dayOption:{},
        yearName:'2001年至2021年',
    },
    mutations: {
         setData(state,value){
             state.option=value
         },
        setDay(state,value){
             state.dayOption=value
        },
        setYearName(state,value){
             state.yearName=value
        }
    }
})

export default store