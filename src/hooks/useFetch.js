import { ref, isRef, unref, watchEffect, onMounted } from 'vue'

export const useFetch = (endpoint, method ='get', props ={}) => {
    
    const ruta = '../data/usuarios.json';
    const reporte = ref([]);
        
    const listarReportes = async () => {
            
        const response = await fetch(`${ruta}${endpoint}`,
        {
            method,
            ...props
        });

        const info = await response.json();
        
        reporte.value = info.data;
    }

    onMounted(()=>{
        listarReportes(endpoint, method, props);
    })

    return {
        reporte,
        listarReportes
    }

}

