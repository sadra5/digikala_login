const form = document.getElementById('form')
const form_input = document.getElementById('input-id')
const p_eror = document.getElementById('eror')
const mobile_regex = /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/
const email_regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

form.addEventListener('submit', (event)=> {
    event.preventDefault()

    const resultOfEmailregex = email_regex.test(form_input.value)
    const resultOfMobileregex = mobile_regex.test(form_input.value)

    if ( !(resultOfEmailregex || resultOfMobileregex)) {
        p_eror.innerHTML = 'لطفا این قسمت را خالی نگذارید'
        form_input.style.border = '1px solid red'
    } else {
        p_eror.innerHTML = ""
        form_input.style.border = '1px solid rgba(70, 166, 185, 0.667)'
    }
})