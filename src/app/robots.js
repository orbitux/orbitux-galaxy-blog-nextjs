

const baseUrl = "https://orbitux.space"

const robots = ()=>{
    return{
        rules:{
            userAgent:"*",
            allow:"/"
        },
        sitemap:`${baseUrl}/sitemap.xml`
    }
}
export default robots