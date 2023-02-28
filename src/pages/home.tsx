import React from 'react'
import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { PieChart } from 'components';
const home = () => {
  return (
    <Box>
        <Typography fontSize={25} fontWeight={700} color="#11142D">
            Dashboard
        </Typography>
        <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
            <PieChart 
                title="Properties for Sale"
                value={684}
                series={[75, 25]}
                colors={['#275be8', '#c4e8ef']}
            />
            <PieChart 
                title="Properties for Rent"
                value={500}
                series={[60, 40]}
                colors={['#275be8', '#c4e8ef']}
            />
            <PieChart 
                title="Properties for Total Customers"
                value={5085}
                series={[75, 25]}
                colors={['#275be8', '#c4e8ef']}
            />
            <PieChart 
                title="Properties for Cities"
                value={555}
                series={[75, 25]}
                colors={['#275be8', '#c4e8ef']}
            />
        </Box>
    </Box>

    
  )
}

export default home