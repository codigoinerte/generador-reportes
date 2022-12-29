<script setup>
import { onMounted, ref } from 'vue';
import ReporteFila from '../components/ReporteFila.vue';
import { useConsultas } from '../hooks/useConsultas';
// import { useFetch } from '../hooks/useFetch';

// const { reporte } = useFetch('list-reports');

const cabecera = ["titulo", "Fecha de creación", "Acciones"];

const { reportes, reporte } = defineProps({
    reportes: Function,
    reporte: Function
})

const data = reportes();
</script>

<template>

    <div class="container-table">

        <div class="row header-table">

            <div v-for="t in cabecera" :key="t" class="col">
                <p>{{ t }}</p>
            </div>
           
        </div>
        
        <template v-if="data.length > 0">

            <template v-for="r in data" :key="r.id">            
                <ReporteFila :info="r" :reporte="reporte" />
            </template>

        </template>
        <template v-else>
            <p>No encontraron reportes</p>
        </template>
        

    </div>

</template>