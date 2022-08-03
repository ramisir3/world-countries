import Button from '@mui/material/Button';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { Box } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{
            position: 'fixed',
            backgroundColor: 'white',
            width: '100%',
            boxShadow: '0 1px 10px -7px #858585',
            zIndex: 2,
            fontSize: '20px',
            top: 0,
            height: '80px'
        }}>
            <Box class="header-container align-items-center container d-flex justify-content-between">
                <Box sx={{ fontWeight: 800, }}>Where in the world?</Box>
                <Box>
                    <Button startIcon={<NightlightRoundIcon />} color='inherit'> Dark Mode
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}