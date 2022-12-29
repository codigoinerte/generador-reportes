import { ref } from "vue";
import { formatDate } from "./Date";

const Calendar = (emit, name) => {
   
    const date = new Date();
    const mesDate = date.getMonth();
    const anioDate = date.getFullYear();

    const select = ref(null);
    const input = ref(null);

    const anio = ref(anioDate);
    const mes = ref(mesDate);

    const displayCalendar = ref(false);

   
    const modelValue = ref("");
    
    Date.prototype.getWeek = function() {
        var dt = new Date(this.getFullYear(),0,1);
        return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
    };

    const disableButton = () =>{

        // name

        
        const tag = `.${name } .selectedButton`
        document.querySelectorAll(tag).length > 0 ? document.querySelectorAll(tag)[0].removeAttribute('class') : null;
    }

    const listadoDeMeses = () => {

        const date = new Date();
        const mes = date.getMonth();
        const anio = date.getFullYear();
    
        let lista = [];
    
        const listaNombreMeses = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
    
        for(let a = anio; a >= 1990 ; a--){
    
        if (a === anio) {
            for (let m = mes; m >= 0; m--) {
            
            lista.push({
                "anio": a,
                "mes": m,
                "mesNombre": listaNombreMeses[m]
            });
            
            }
        } else {
            for (let m = 11; m >= 0; m--) {
            lista.push({
                "anio": a,
                "mes": m,
                "mesNombre": listaNombreMeses[m]
            });
            }
        }
    
        }
        return lista;
    }

    
    const diasPorMes = (anio, mes) => {

        const date = new Date();
        const FullprimerDia = new Date(date.getFullYear(), date.getMonth(), 1);
        const FullultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        const primerDia = FullprimerDia.getDate();
        const ultimoDia = FullultimoDia.getDate();

        let monthDays = {};

        for(let i = primerDia; i<=ultimoDia;i++)
        {
        const date = new Date(anio, mes, i);
        const diaSemana = date.getDay();    
        const semana = date.getWeek();      
        
        if (!monthDays[semana]) {
            monthDays[semana] = [];
        }
        
        monthDays[semana][diaSemana]={
            'anio':anio,
            'mes':mes,
            'dia':i
        };
        }

        return monthDays;
    }

    const updateCalendar = (caso, value=0) =>{

        switch (caso) {
            case 'up':
                if(mes.value >= mesDate && anio.value >= anioDate) return false;
    
                if(mes.value == 11)
                {
                mes.value = 0;
                anio.value++;
                }
                else
                {
                mes.value++;
                }
            
            break;
    
            case 'down':
                
                if(mes.value < 0 && anio.value < 1990) return false;
    
                if(mes.value == 0)
                {
                mes.value = 11;
                anio.value--;
                }
                else
                {
                mes.value--;
                }
                
            break;
    
            case 'change':
                    
            if(value == '') return false;
    
                const { anio:anioSelected, mes:mesSelected } = listaMeses[value];
                    
                mes.value = mesSelected;
                anio.value = anioSelected;
    
            break;
    
            default:
    
            break;
        }

        disableButton();

        const respuesta = listaMeses.findIndex((e)=> e.anio == anio.value && e.mes == mes.value);
    
        select.value.value = respuesta;
    
        monthDays.value = diasPorMes(anio.value, mes.value);
    
    }

    


    const setValueInput = ( e ,anio, mes, dia) => {
    
        disableButton();

        e.target.classList = 'selectedButton';
    
        const fecha = `${anio}-${formatDate(mes+1)}-${formatDate(dia)}`;
        
        modelValue.value = fecha;

        emit('update:modelValue', modelValue.value);        
        
    }

    const listaMeses = listadoDeMeses();

    const monthDays = ref(diasPorMes(anio.value, mes.value));

    return {                
        updateCalendar,
        setValueInput,

        listaMeses,
        monthDays,
        displayCalendar,
        modelValue,
        select
    }
}

export default Calendar;