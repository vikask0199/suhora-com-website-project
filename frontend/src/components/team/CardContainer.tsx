import Card from "./Card";
import { teamsData } from '../../constant/teamData';
import Intro from "./Intro";
const CardContainer = () => {
    const { employees } = teamsData;

    return (
        <>
            <div className="w-screen flex gap-4 flex-col  root-container ">
                <div className="mb-10">
                    <Intro />
                </div>

                <div className="flex flex-wrap justify-center ">
                    {employees.map((employee, index) => (
                        <Card key={index} employee={employee} />
                    ))}
                </div>
            </div>
        </>

    );
};

export default CardContainer;
