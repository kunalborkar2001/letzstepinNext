import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tooltip from '@mui/material/Tooltip';
import { ImAidKit } from "react-icons/im";
import { GrBriefcase } from "react-icons/gr";
import { GrAccessibility } from "react-icons/gr";

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
        <Card variant="outlined" sx={{ maxWidth: 300 }} className='bg-gray-200 border rounded-[15px]'>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {name === "Amenities"? <GrBriefcase/> : <GrAccessibility />}
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
                                <ImAidKit />
                            </Typography>
                        </Tooltip>

                    </Breadcrumbs>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Tooltip title="titlename" placement="top" style={{ zIndex: 999 }}>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                <ImAidKit />
                            </Typography>
                        </Tooltip>

                    </Breadcrumbs>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Tooltip title="titlename" placement="top" style={{ zIndex: 999 }}>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                <ImAidKit />
                            </Typography>
                        </Tooltip>

                    </Breadcrumbs>
                </Stack>
            </Box>
        </Card>
    );
}
