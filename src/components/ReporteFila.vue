<script setup>
import download from '../assets/images/download.svg';
import { verifyDate } from '../helpers/Date';

const { info, reporte } = defineProps({
    info: Object,
    reporte: Function
})



</script>
<template>
    <div class="row">
        <div class="col">
            <p>{{ info.title }}</p>
        </div>
        <div class="col">
            <p>{{ verifyDate(info.created_at) }}</p>
        </div>
        <div class="col">
            <button target="_blank" @click="reporte(info.id)">
                <b>Descargar</b><img loading="lazy" :src="download" alt="descargar" />
            </button>
        </div>
    </div>
</template>