// src/components/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
    const styles = {
        container: {
            padding: '40px',
            maxWidth: '800px',
            margin: 'auto',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Arial', sans-serif",
        },
        header: {
            textAlign: 'center',
            color: '#333',
            marginBottom: '20px',
        },
        section: {
            margin: '20px 0',
        },
        subheader: {
            color: '#4A90E2',
            margin: '10px 0',
        },
        paragraph: {
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '15px',
        },
        footer: {
            textAlign: 'center',
            marginTop: '40px',
            color: '#777',
            fontSize: '0.9em',
        },
        effectiveDate: {
            fontStyle: 'italic',
            color: '#888',
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Privacy Policy</h1>

            <div style={styles.section}>
                <h2 style={styles.subheader}>Information We Collect</h2>
                <h3 style={styles.subheader}>Personal Information</h3>
                <p style={styles.paragraph}>
                    When you register or interact with our app, we may collect personal information such as your name, email address, username, and any other information you voluntarily provide, including data from Facebook ads and our Shopify store.
                </p>

                <h3 style={styles.subheader}>Usage Information</h3>
                <p style={styles.paragraph}>
                    We may collect information about how you use our app and device information such as IP address, device type, and operating system.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subheader}>How We Use Your Information</h2>
                <h3 style={styles.subheader}>To Provide Services</h3>
                <p style={styles.paragraph}>
                    We use your information to deliver the services you request, including data from Facebook ads and our Shopify store.
                </p>

                <h3 style={styles.subheader}>Communications</h3>
                <p style={styles.paragraph}>
                    We may send you emails or notifications related to Facebook ads and our Shopify store.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subheader}>Data Security</h2>
                <p style={styles.paragraph}>
                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your data.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subheader}>Data Retention</h2>
                <p style={styles.paragraph}>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subheader}>Your Rights</h2>
                <p style={styles.paragraph}>
                    You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subheader}>Children's Privacy</h2>
                <p style={styles.paragraph}>
                    Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected personal information from a child under 13, please contact us immediately.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subheader}>Changes to This Privacy Policy</h2>
                <p style={styles.paragraph}>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our app.
                </p>
            </div>

            <div style={styles.section}>
                <h2 style={styles.subheader}>Contact Us</h2>
                <p style={styles.paragraph}>
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:arqumdoger@gmail.com">arqumdoger@gmail.com</a>.
                </p>
            </div>

            <div style={styles.footer}>
                <p>
                    By using our app, you consent to the collection and use of your information as described in this Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
