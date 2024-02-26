import { ButtonBase, Grid, Typography } from '@mui/material';
import SidebarItems from '../../molecules/SidebarItem';
import theme from '../../../theme';
import { useState } from 'react';
import { HeadingOfSidebar } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

type SidebarProps = {
  sidebarList1: any[];
  sidebarList2: any[];
};

const Sidebar = (props: SidebarProps) => {
  const value: any = sessionStorage.getItem('dashboardKey');
  const [active, setActive] = useState(value);
  let navigate = useNavigate();
  const handleClick = (id: any) => {
    setActive(id);
    sessionStorage.setItem('dashboardKey', id);
  };
  return (
    <>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        width="270px"
        height="900px"
        rowGap="20px"
        padding="30px 15px"
      >
        <Typography
          variant="h5"
          color={theme.palette.primary.main}
          textAlign="left"
        >
          {HeadingOfSidebar.SIDEBAR_HEADING}
        </Typography>
        {props.sidebarList1.map((item) => (
          <Grid item key={item.key}>
            <ButtonBase
              onClick={() => {
                handleClick(item.itemKey);
                navigate(item.path);
              }}
            >
              <SidebarItems
                iconName={item.icon}
                itemName={item.itemName}
                isSelected={active === item.itemKey ? true : false}
              />
            </ButtonBase>
          </Grid>
        ))}
        <hr
          style={{
            border: '1px solid #E3F3F6',
            width: '230px',
            height: '0px',
            margin: '20px 0px',
          }}
        ></hr>
        {props.sidebarList2.map((item) => (
          <Grid item key={item.key}>
            <ButtonBase
              onClick={() => {
                handleClick(item.itemKey);
                navigate(item.path);
              }}
            >
              <SidebarItems
                iconName={item.icon}
                itemName={item.itemName}
                isSelected={active === item.itemKey ? true : false}
              />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Sidebar;
