// import kota from 'alga-vue/kota';
// import { defineEventHandler, useQuery } from 'h3';

// export default defineEventHandler(async (event: any) => {
//     let newWilayah = kota.wilayah
//     const query = await useQuery(event)
//     if('id' in query) {
//         newWilayah = newWilayah.filter((i: any) => String(i.id).toLowerCase() === String(query.id).toLowerCase())
//     }
//     return newWilayah.sort((a: any, b: any) => a.wilayah.localCompare(b.wilayah))
// })