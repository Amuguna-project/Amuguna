import React from "react";
import GroupsNav from "components/GroupsNav/GroupsNav";
import GroupsTable from "components/GroupsTable/GroupsTable";

const GroupsApp = () => {

    return (
        <div className="Group-main">
            <GroupsNav />
            <GroupsTable />
        </div>
    )
}

export default GroupsApp;