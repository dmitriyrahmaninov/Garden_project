import React, {forwardRef} from 'react';
import s from './style.module.sass'

export default forwardRef(function FormInputAuthentification(props, ref) {
    return (
        <input ref={ref} {...props} className={s.form_input} />
    )
});
