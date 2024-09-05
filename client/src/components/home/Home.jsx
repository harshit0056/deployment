
import { Grid } from '@mui/material';
import { useContext } from 'react';
//components
import Banner from '../banner/Banner';
import UserPosts from './post/Userpost';
import Posts from './post/Posts';
import {PersonalDataContext} from '../../context/PersonalDataProvider';
// import { DataContext } from '../../context/DataProvider';
const Home = () => {
    // const { account } = useContext(DataContext);
    const {personalpost}=useContext(PersonalDataContext);
    return (
        <>
            <Banner />
            <Grid container>
                <Grid container item xs={12} sm={12} lg={12}>
                    {
                        !personalpost?
                        <Posts />:
                        <UserPosts/>
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default Home;