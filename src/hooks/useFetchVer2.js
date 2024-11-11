export const useFetchVer2 = () => {
    // Método GET
    const getData = async(url) => {
        const request = await fetch(url, {
            method: "get",
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            })
        });
        if (!request.ok)
            return {
                error: true,
                message: "Ocurrió un error"
            }
        else
            return {
                error: false,
                message: "Respuesta exitosa",
                data: await request.json(),
            }
    }
    // Método POST
    const setData = async(url, data) => {
        const request = await fetch(url, {
            method: "post",
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }),
            body: JSON.stringify( data )
        });
        if (!request.ok)
            return {
                error: true,
                message: "Ocurrió un error"
            }
        else
            return {
                error: false,
                message: "Respuesta exitosa",
                data: await request.json(),
            }
    }
    // Método PUT
    const updateData = async(url, data) => {
        const request = await fetch(url, {
            method: "put",
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }),
            body: JSON.stringify( data )
        });
        if (!request.ok)
            return {
                error: true,
                message: "Ocurrió un error"
            }
        else
            return {
                error: false,
                message: "Respuesta exitosa",
                data: await request.json(),
            }
    }
    // Método DELETE
    const deleteData = async(url) => {
        const request = await fetch(url, {
            method: "delete",
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }),
        });
        if (!request.ok)
            return {
                error: true,
                message: "Ocurrió un error"
            }
        else
            return {
                error: false,
                message: "Respuesta exitosa",
                data: await request.json(),
            }
    }

    return {
        getData,
        setData,
        updateData,
        deleteData,
    }
}