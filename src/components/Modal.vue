<script setup>    
    import Formulario from './Formulario.vue';

    const { showModal, save } = defineProps({
        showModal: Function,
        save: Function
    });

</script>
<template>
     
        <div class="modal-container" @click.self="showModal">
        <div class="modal">
            <!-- contenido del modal -->
                <h2>Reporte por fecha de nacimiento</h2>
                <p>Ingresa los siguientes datos para generar tu reporte</p>

                <Formulario :save="save" :showModal="showModal" />
            <!-- contenido del modal -->
        </div>
        </div>

    
</template>