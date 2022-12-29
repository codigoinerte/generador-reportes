import csvDownload from 'json-to-csv-export';
import { ref } from 'vue';
import data from '../data/usuarios.json';

export const useConsultas = () => {

    const reportes = ref(JSON.parse(localStorage.getItem('reportes'))  || []);

    const getReportes = () => {

        return reportes.value;
    }

    const getReporte = (key) => {
        const { title, created_at, inicio, fin, enlace } = reportes.value.find((e) => e.id == key);

        const usuarios = data.filter((usuario)=> usuario.birth_date >= inicio && usuario.birth_date <= fin)
                                .map(({ id ,name ,email ,created_at ,birth_date })=>({ id ,name ,email ,created_at ,birth_date }));
        
        
        const dataToConvert = {
            data: usuarios,
            filename: title,
            delimiter: ',',
            headers: ['Id', "Name", "Email", "created_at", "birth_date"]
        };

        csvDownload(dataToConvert);
        
    }

    const saveReporte = (titulo, inicio, fin) => {

        reportes.value.push({
            "id": Date.now(),
            "title" : titulo,
            "created_at": Date.now(),
            "inicio": inicio,
            "fin": fin,
            "enlace": ""
        });

        localStorage.setItem('reportes', JSON.stringify(reportes.value)) 

    }

    return {
        getReporte,
        getReportes,
        saveReporte
    }

}