import { Grid } from '@mui/material';
import { EXTRA_COLORS } from '../../../theme';
import Header from '../../organisms/Header';
import Sidebar from '../../organisms/Sidebar';
import User from '../../../../public/assets/images/user1.svg';

type DashboardProps = {
  component: any;
  dashboardList: any;
};

const Dashboard = (props: DashboardProps) => {
  return (
    <>
      <Grid container>
        <Sidebar
          sidebarList1={props.dashboardList.list1}
          sidebarList2={props.dashboardList.list2}
        />
        <hr
          style={{
            border: '1px solid',
            borderColor: EXTRA_COLORS.border,
            height: 'auto',
            width: '0px',
            margin: '80px 0px 0px 0px',
          }}
        />
        <Grid container flexDirection="column" width="1170px">
          <Header
            userName="Sara Joseph"
            location="East Marredpally, Secunderabad"
            avatar={User}
          />
          <hr
            style={{
              border: '1px solid',
              borderColor: EXTRA_COLORS.border,
              width: '1170px',
              margin: '0px',
            }}
          />
          <>{props.component}</>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
