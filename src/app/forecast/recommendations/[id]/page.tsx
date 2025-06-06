export default async function RecommendationDetails({ params, } : { params: Promise <{ id: string }>; }) {
     
    const Id = (await params).id;
    return <h1>Recommendation for {Id}</h1>
}