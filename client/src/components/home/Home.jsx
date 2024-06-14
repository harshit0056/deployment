
import { Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Posts from './post/Posts';

const Home = () => {

    return (
        <>
            <Banner />
            <Grid container>
                <Grid container item xs={12} sm={12} lg={12}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;