import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

interface ButtonGroupInterface {
  btnFunction: (X: number) => void;
  matrixSize: number
  setMatrixSize: React.Dispatch<React.SetStateAction<number>>
}


const BasicButtonGroup = ({btnFunction, matrixSize, setMatrixSize}: ButtonGroupInterface ) => {
  async function handleChange(a: number){
    const newValue = matrixSize + a
    if(newValue >= 2 && newValue <= 8){
      await setMatrixSize(newValue)
      btnFunction(newValue)
    }
  }

  return (
    <div className='m-6'>
      <ButtonGroup variant="contained" size="large" color="success" aria-label="outlined primary button group">
        <Button onClick={() => handleChange(-1)}><strong>-</strong></Button>
        <Button onClick={() => handleChange(1)}><strong>+</strong></Button>
      </ButtonGroup>
    </div>
  );
}

export default BasicButtonGroup