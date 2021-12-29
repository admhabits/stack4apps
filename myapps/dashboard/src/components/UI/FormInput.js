import React from 'react';

const FormInput = ({tag,type,name,placeholder,classes, value, onChange, onClick}) => {
    return (
        <div className="single-input-item">
            <label>
                {(()=>{
                    if(tag === 'input'){
                        return <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} className={classes} required/>
                    }else if(tag === 'textarea'){
                        return  <textarea value={value} onChange={onChange} name={name} cols="30" rows="7" placeholder={placeholder} className={classes} required/>
                    }else if(tag === 'button'){
                        return <button onClick={onClick} className={`btn-outline ${classes}`}>Kirim Pesan</button>
                    }
                })()}
            </label>
        </div>
    );
};

export default FormInput;