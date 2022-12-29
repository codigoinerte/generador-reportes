<script>
export default {
  inheritAttrs: false
}
</script>
<script setup>
import imgCalendario from '../assets/images/calendar.svg';
import Calendar from '../helpers/Calendar';

const { name } = defineProps({
    name:String
    
})

const emit = defineEmits(['update:modelValue']);


const { listaMeses, monthDays, displayCalendar, updateCalendar, setValueInput, select, modelValue } = Calendar(emit, name);


</script>

<template>

    <button class="calendario" type="button" @click="displayCalendar = !displayCalendar">
        <img :src="imgCalendario" alt="calendario" />
    </button>
    
    <input type="date" :name="name" :id="name" v-model="modelValue"/>

    <!-- @input="$emit('update:modelValue', $event.target.value)" -->

    <div v-if="displayCalendar" className='calendar-container'> 
        <div class="calendar-header">
        <div>
            <select name="listadoMesesAnio" id="listadoMesesAnio" ref="select" @change="updateCalendar('change', $event.target.value)">
            <template v-for="(e, index) of listaMeses">
                <option :value="index">{{ e.mesNombre }} {{ e.anio }}</option>
            </template>
            </select>
        </div>
        <div class="button-container"> 
            <button class="month preview" type="button" @click="updateCalendar('down')"></button> 
            <button class="month next" type="button" @click="updateCalendar('up')"></button>
        </div>
        </div>
        <div class="calendar-days">
            <div><span>S</span></div>
            <div><span>M</span></div>
            <div><span>T</span></div>
            <div><span>W</span></div>
            <div><span>T</span></div>
            <div><span>F</span></div>
            <div><span>S</span></div>
        </div>
        <div :class="`calendar-body ${name}`">
        
        <template v-for="a in monthDays">
            <template v-for="d in a">
                <div>
                    <button type="button" @click="setValueInput( $event, d.anio, d.mes, d.dia)">{{ d !== undefined ? d.dia : '' }}</button>
                </div>
            </template>
        </template>

        </div>
    </div>
</template>