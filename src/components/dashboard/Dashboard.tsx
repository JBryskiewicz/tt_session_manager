import {DashboardActions} from "./DashboardActions";
import {DashboardSessionList} from "./DashboardSessionList";

export function Dashboard() {
    return (
        <>
            <DashboardActions/>
            <DashboardSessionList/>
        </>
    );
}