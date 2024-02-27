import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tooltip from '@mui/material/Tooltip';

import { GrBriefcase } from "react-icons/gr";
import { GrAccessibility } from "react-icons/gr";

import { GrAchievement } from "react-icons/gr";
import { GrBasket } from "react-icons/gr";
import { GrCafeteria } from "react-icons/gr";

import { CgGym } from "react-icons/cg";
import { FaCar } from "react-icons/fa";

export default function AmenitiesBox({ name, icon, description, amenitiesIcon, facilitiesIcon }) {
    const [iconsData, setIconsData] = useState([]);

    // Move the conditional logic to useEffect hook
    useEffect(() => {
        if (name === "Amenities") {
            setIconsData(amenitiesIcon);
        }
        if (name === "Facilities") {
            setIconsData(facilitiesIcon);
        }
    }, [name, amenitiesIcon, facilitiesIcon]);
    return (
        <Card variant="outlined"  className='bg-gray-200 border rounded-[15px]  min-w-full'>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {name === "Amenities" ? <GrBriefcase /> : <GrAccessibility />}
                    </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                    {description}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body2">
                    Services
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Tooltip title="titlename" placement="top" style={{ zIndex: 999 }}>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                {name === "Amenities" ? <GrAchievement className='text-[2rem]'/> : <CgGym className='text-[2rem]'/>}
                            </Typography>
                        </Tooltip>

                    </Breadcrumbs>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Tooltip title="titlename" placement="top" style={{ zIndex: 999 }}>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                {name === "Amenities" ? <GrBasket className='text-[2rem]'/> : <FaCar className='text-[2rem]'/>}
                            </Typography>
                        </Tooltip>

                    </Breadcrumbs>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Tooltip title="titlename" placement="top" style={{ zIndex: 999 }}>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                <GrCafeteria className='text-[2rem]'/>
                            </Typography>
                        </Tooltip>

                    </Breadcrumbs>
                </Stack>
            </Box>
        </Card>
    );
}
