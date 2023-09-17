import React from 'react';
import './styles/CustomButton.css'

const CustomButton = ({ label, onClick, variant, size, disabled }) => {
  let classNames = `customButton ${CustomButton}--variant ${CustomButton}--size ${disabled ? 'CustomButton--disabled' : ''}` ;

  return (
      <div>
        <button className={classNames} onClick={onClick} disabled={disabled}>
          {label}
        </button>
      </div>
    );
}

exoprt default CustomButton;
