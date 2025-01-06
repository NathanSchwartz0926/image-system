import transporter from "../config/nodemailerConfig.js";

const sendEmail = async (req, res) => {
    const { clientEmail, adminEmail } = req.body;

    try {
        // Email to the client
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: clientEmail,
            subject: 'Order Placed Successfully',
            text: `Thank you for your order!`,
        });

        // Email to the admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: adminEmail,
            subject: 'New Order Placed',
            text: `A new order was placed.`,
        });

        res.status(200).json({ message: 'Emails sent successfully!' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ error: 'Failed to send emails' });
    }
};

export default sendEmail;
