import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const BasicButtonGroup = () => {
  return (
    <ButtonGroup variant="contained" size="large" color="success" aria-label="outlined primary button group">
      <Button><strong>+</strong></Button>
      <Button><strong>-</strong></Button>
    </ButtonGroup>
  );
}

export default BasicButtonGroup