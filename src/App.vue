<script setup>
import { ref } from 'vue';

import Modal from './components/Modal.vue';
import Cabecera from './components/Cabecera.vue';
import Reportes from './components/Reportes.vue';
import { useConsultas } from './hooks/useConsultas';

const modal = ref(false);

const showModal = ()=>{
    modal.value = !modal.value;
}

const { getReportes, getReporte, saveReporte  } = useConsultas();

</script>

<template>

  <Cabecera />

  <div class="container">

    <h2 class="titlePage">Generador de reportes TK</h2>
  
    <Reportes :reportes="getReportes" :reporte="getReporte"/>
  
    <div class="text-center">
      <button class="btn-reporte" type="button" @click="showModal">Crear reporte</button>
    </div>

    
  </div>
  
  
  <Modal v-if="modal" :showModal="showModal" :save="saveReporte" />

</template>