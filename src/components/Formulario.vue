<script setup>
import { ref } from 'vue';
import Calendar from '../components/Calendar.vue';

const { save, showModal } = defineProps({
    save:Function,
    showModal:Function
})

const form = ref({
    descripcion:'',
    inicio:'',
    fin:''
});

const formValid = ref({
    descripcion:'',
    inicio:'',
    fin:''
});

const validForm = () => form.value.descripcion != '' && form.value.inicio != '' && form.value.fin != 0 ;

const handleSubmit  = (e) => {

    e.preventDefault();
    
    if(form.value.descripcion == ''){
        formValid.value.descripcion = 'La descripción es requerida';
        return false;
    }
    if(form.value.inicio == ''){
        formValid.value.inicio = 'La fecha de inicio es requerida';
        return false;
    }
    if(form.value.fin == ''){
        formValid.value.fin = 'La fecha final es requerida';
        return false;
    }

    save( form.value.descripcion, form.value.inicio, form.value.fin);
    showModal();
}

</script>
<template>
    
    <form @submit="handleSubmit">

        <div>
        
            <fieldset>
                <label for="descripcion">Descripci&oacute;n del reporte</label>
                <input type="text" name="descripcion" id="descripcion" v-model="form.descripcion">
                <span class="alert">{{ formValid.descripcion }}</span>

            </fieldset>

        </div>

        <span>Fecha de nacimiento</span>

        <div class="row">
            <div class="col">

                <fieldset>                
                    <label for="inicio">Inicio</label>                
                    <Calendar key="1" name="inicio" v-model="form.inicio"  modelValue=""/>
                    <span class="alert">{{ formValid.inicio }}</span>
                </fieldset>

            </div>
            <div class="col">

                <fieldset>
                    <label for="fin">Fin</label>
                    <Calendar key="2" name="fin" v-model="form.fin" modelValue=""/>
                    <span class="alert">{{ formValid.fin }}</span>
                </fieldset>

            </div>
        </div>

        <div class="text-center">
            <button type="submit" 
                    :class=" validForm() ? 'active-submit btn-submit' : 'btn-submit' " 
                    :disabled="!validForm()" >Generar reporte</button>
        </div>

    </form>

</template>