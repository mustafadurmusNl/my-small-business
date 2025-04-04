//import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// Components
import Item from './Item/Item';
//import Cart from './Cart/Cart';
//import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import Badge from '@mui/material';
// Styles
import { Wrapper } from './App.styles';
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {


  const { data, isLoading, error } = useQuery<CartItemType[], Error>({
    queryKey: ['products'], // The query key as an array
    queryFn: getProducts,   // Your API function to fetch data
  });
  console.log(data);

//  const getTotalItems = () =>null;

  const handleAddToCart = () => null;

  //const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item } handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;