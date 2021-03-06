import React, { useEffect, useImperativeHandle, forwardRef } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserCards from '../../components/UserCards'
import UserMessages from '../../components/UserMessages'
import { getUsersMatches, getUsersLiked } from '../../api/user'
function a11yProps(index:number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props:any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>{children}</Box>
      )}
    </div>
  );
}

const tabStyle = {
  default_tab:{
      color: '#000',
      fontWeight: 900,
      backgroundColor: '#FFFFFF',
  },
  active_tab:{
      color: '#fd267a',
      fontWeight: 900,
      borderBottomColor: '#fd267a',
  }
};

function SideBar(props:any, ref:any) {
  const [value, setValue] = React.useState(0);
  const [userMatches, setUserMatches] = React.useState([]);
  const [userLiked, setUserLiked] = React.useState([]);
  const handleChange = (event:React.SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchDataLiked()
    fetchDataMatches()
  }, []);

  useImperativeHandle(ref, () => ({
    fetchData
  }))

  const fetchData =  async() => {
    fetchDataLiked()
    fetchDataMatches()
  }

  const getStyle = (isActive:any) => {
    return isActive ? tabStyle.active_tab : tabStyle.default_tab
  }

  const fetchDataLiked = async () => {
    const { data } : any = await getUsersLiked()
    setUserLiked(data || [])
  }

  const fetchDataMatches = async () => {
    const { data } : any = await getUsersMatches()
    setUserMatches(data || [])
  }

  // const users = [{"name":"Jeff Bezos","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"},{"name":"Elon musk","url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"}
  // ,{"name":"Jeff Bezos","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"},{"name":"Elon musk","url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"}
  // ,{"name":"Jeff Bezos","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"},{"name":"Elon musk","url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"}
  // ,{"name":"Jeff Bezos","url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"},{"name":"Elon musk","url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"}]
  
  const userMessages = [
    {"name": "Jeff Bezos", "url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg", "message": "Hello word"},
    {"name": "Jeff Bezos", "url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg", "message": "Hello word"},
    {"name": "Jeff Bezos", "url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg", "message": "Hello word"},
    {"name": "Jeff Bezos", "url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg", "message": "Hello word"},
    {"name": "Jeff Bezos", "url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg", "message": "Hello word"},
    {"name": "Jeff Bezos", "url":"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg", "message": "Hello word"},
  ]
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab style={ getStyle(value === 0) } label="Matches" {...a11yProps(0)} />
            <Tab style={ getStyle(value === 1) } label="Liked" {...a11yProps(1)} />
            <Tab style={ getStyle(value === 2) }label="Messages" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <UserCards users={userMatches}></UserCards>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserCards users={userLiked}></UserCards>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <UserMessages userMessages={userMessages} />
        </TabPanel>
      </Box>
    </>
  )
}

export default forwardRef(SideBar)
