export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = useQuery(event)

    // // handle post data
    // const { age } = await useBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=6jE0gHIxFWhRCOLgOPmOe4Bbwysb3XAlxuwzbLS5')

    return data
    
})