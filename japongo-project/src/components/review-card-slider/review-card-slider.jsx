import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './review-card-slider.css';
import { useTranslation } from 'react-i18next';
import { serverUrl } from '../../global/global-variable.js'



function ReviewCardSlider(props) {
    const [t] = useTranslation('global');
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = props.data?.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const styleBackground = {
        backgroundImage: `url("${serverUrl}/review-avatar/${props.data?.[activeStep]?.img}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '140px',
        width: '140px',
        borderRadius: '50%'
    };


    return (
        <Box className='review-card-slider' justifyContent='space-between'
             alignContent='center' alignItems='center' 
             sx={{ maxWidth: 300, flexGrow: 1, height: 200 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                    paddingLeft: '0'
                }}
            >
                <Typography variant='h5'>{props.data?.[activeStep]?.name}</Typography>
            </Paper>
            <Box
                className='review-card-slider__info-conatiner'
                display='flex'
                flexDirection='column'
                alignItems='center'
            >
                {props.data && <div style={styleBackground} >
                </div>}
                {props.data?.[activeStep]?.body}
            </Box>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {t("Home.Reviews.Steps.Next")}
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        {t("Home.Reviews.Steps.Back")}
                    </Button>
                }
            />
        </Box>
    );
}

export default ReviewCardSlider;
