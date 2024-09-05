import { useEffect, useState, useContext } from 'react';
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';

// components
import Post from './Post';

const UserPosts = () => {
    const [posts, setPosts] = useState([]);
    const { account } = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category: category || '' });
            if (response.isSuccess) {
                setPosts(response.data);
            }
        }
        fetchData();
    }, [category]);

    // Filter posts by account.name
    const filteredPosts = posts.filter(post => post.username === account.name);

    return (
        <>
            {
                filteredPosts.length ? filteredPosts.map(post => (
                    <Grid item lg={3} sm={4} xs={12} key={post._id}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default UserPosts;
