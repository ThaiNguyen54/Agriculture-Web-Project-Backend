import sgMail from '@sendgrid/mail'

const transporter =  sgMail.setApiKey("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");

export default transporter;