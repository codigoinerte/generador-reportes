class Api {

    ruta = 'https://tkambio-api-production.up.railway.app/api/';

    constructor()
    {
        const ruta = '';
    }

    async getReportes()
    {
        const response = await fetch(`${this.ruta}list-reports`);
        const data = await response.json();

        return data;
    }

    async getReporte()
    {

    }

    async setReporte()
    {

    }

}

export default Api;