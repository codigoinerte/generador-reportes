const formatDate = (number) => number.toString().length == 1 ? `0${number}` : number ;

const verifyDate = (fecha = '') => {
    if(fecha.length == 0 || typeof fecha == 'undefined'){
        return false;
    }

    const date = new Date(fecha);

    const anio = date.getFullYear();
    const mes = date.getMonth()+1;
    const day = date.getDate();

    return `${anio}/${formatDate(mes)}/${formatDate(day)}`;
}

export {
    verifyDate,
    formatDate
};