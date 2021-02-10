import styles from '../../styles/Form.module.css'
import PhoneInput from 'react-phone-input-2'
import { Form } from 'react-bootstrap'
import Link from 'next/link'
import NumberFormat from 'react-number-format'

export default function FormInput({ type, formData }) {
    const changePhone = (phone, countryCode) => {
        formData.setData(phone)
        formData.changeCountryCode(countryCode)
    }

    return (
        <div>
            {formData.type === 'checkbox' ?
                <Form.Group className={styles.checkboxGroup} controlId={formData.control}>
                    <Form.Check style={{paddingLeft: '0px'}}>
                        <label className={styles.containerCheck} >
                            <span>&nbsp;{formData.label1}&nbsp;</span>
                            <span onClick={formData.showModal} className={styles.checklink}>{formData.label2}</span>
                            {/* <span>&nbsp;{formData.label3}&nbsp;</span>
                            <Link href=''>
                                <span className={styles.checklink}>{formData.label4}</span>
                            </Link> */}
                            <input type={formData.type} checked={formData.data} onChange={formData.setData} />
                            <span className={styles.checkmark}></span>
                        </label>
                        {/* <Form.Check.Input type={formData.type} checked={formData.data} onChange={formData.setData} />
                        <Form.Check.Label>
                        </Form.Check.Label> */}
                        <Form.Text className={styles.invalid}>&nbsp;{formData.errorMessage}</Form.Text>
                    </Form.Check>
                </Form.Group>
            : formData.type === 'switch' ?
               <Form.Group>
                    <div style={{display: 'block'}}>
                        <p className={styles.label}>{formData.label}{formData.required === true ? '*': ''}</p>
                        <label className={styles.switch}>
                            <input type="checkbox" onChange={formData.setData} checked={formData.data} />
                            <span className={styles.slider+' '+styles.round}></span>
                        </label>
                    </div>
               </Form.Group> 
            :
                <Form.Group controlId={formData.control}>
                    <Form.Label className={type==='StepForm' ? styles.labelStep : styles.label}>{formData.label}{formData.required === true ? '*': ''}</Form.Label>
                    {formData.disabled === true ?
                    <Form.Control
                        disabled
                        className={type==='StepForm' ? styles.inputStep : styles.input}
                        type={formData.type}
                        placeholder={formData.placeholder}
                        value={formData.data}
                        onChange={formData.setData}
                        isInvalid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? false : true}
                    />
                    : formData.label === 'Description' ?
                        type === 'StepForm' ?
                        <Form.Control
                            className={styles.textArea}
                            type={formData.type}
                            placeholder={formData.placeholder}
                            value={formData.data}
                            onChange={formData.setData}
                            as='textarea'
                            isInvalid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? false : true}
                        />
                        :
                        <Form.Control
                            className={styles.textAreaNonStep}
                            type={formData.type}
                            placeholder={formData.placeholder}
                            value={formData.data}
                            onChange={formData.setData}
                            as='textarea'
                            isInvalid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? false : true}
                        />
                    : formData.type === 'tel' ?
                        type === 'StepForm' ?
                        <PhoneInput
                            prefix='+'
                            copyNumbersOnly={false}
                            preferredCountries={['id']}
                            inputClass={styles.phone}
                            buttonClass={styles.country}
                            placeholder={formData.placeholder}
                            searchPlaceholder='Search'
                            country={'id'}
                            value={formData.data}
                            enableSearch={true}
                            disableSearchIcon={true}
                            onChange={(data, country) => changePhone(data, country.dialCode)}
                            countryCodeEditable={false}
                            isValid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? true : false}
                        />
                        :
                        <PhoneInput
                            prefix='+'
                            copyNumbersOnly={false}
                            preferredCountries={['id']}
                            inputClass={styles.phoneNonStep}
                            buttonClass={styles.country}
                            placeholder={formData.placeholder}
                            searchPlaceholder='Search'
                            country={'id'}
                            value={formData.data}
                            enableSearch={true}
                            disableSearchIcon={true}
                            onChange={(data, country) => changePhone(data, country.dialCode)}
                            countryCodeEditable={false}
                            isValid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? true : false}
                        />
                    : formData.label === 'Price' ?
                    <NumberFormat className={formData.errorMessage === '' ? 'form-control '+styles.input : 'form-control is-invalid '+styles.input} placeholder={formData.placeholder} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp'} value={formData.data} onValueChange={(values) => formData.setData(values)} allowNegative={false} allowLeadingZeros={false} />
                    :
                    <Form.Control
                        className={type==='StepForm' ? styles.inputStep : styles.input}
                        type={formData.type}
                        placeholder={formData.placeholder}
                        value={formData.data}
                        onChange={formData.setData}
                        isInvalid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? false : true}
                    />
                    }
                    {formData.errorMessage !== '' && formData.errorMessage !== 'empty' ?
                    <Form.Text className={styles.invalid}>
                        {formData.errorMessage}
                    </Form.Text>
                    :
                    <Form.Text className="text-muted">
                        {formData.information}
                    </Form.Text>
                    }
                </Form.Group>
            }
        </div>
    )
}