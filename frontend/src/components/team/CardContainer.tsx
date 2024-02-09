import Card from "./Card";
import { teamsData } from '../../constant/teamData';
import Intro from "./Intro";
const CardContainer = () => {
    const { employees } = teamsData;
    console.log(employees);
    return (
        <>
            <div className="  w-screen h-screen root-card-container flex gap-4 flex-col  ">
                <div>
                    <Intro />
                </div>

                <div className="flex flex-wrap pt-20">
                    {employees.map((employee, index) => (
                        <Card key={index} employee={employee} />
                    ))}
                </div>


            </div>
        </>

    );
};

export default CardContainer;
