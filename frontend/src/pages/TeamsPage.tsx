import { useEffect } from "react"
import CardContainer from "../components/team/CardContainer"


const TeamsPage = () => {
    useEffect(() => {
        console.log("TeamsPage");
    }, [])
    return (
        <>
            <CardContainer />
        </>
    )
}

export default TeamsPage