import emailjs from 'emailjs-com';

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  interests?: string[];
  message?: string;
}

// Initialize EmailJS (you'll need to get these from EmailJS dashboard)
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';

export const sendSubscriptionEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // For now, we'll simulate email sending since EmailJS requires setup
    console.log('Sending subscription email:', data);
    
    // In a real implementation, you would use:
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    //   to_email: 'oyetayoanjola433@gmail.com',
    //   from_name: data.name,
    //   from_email: data.email,
    //   phone: data.phone || 'Not provided',
    //   interests: data.interests?.join(', ') || 'General',
    //   message: data.message || 'New subscription request'
    // }, USER_ID);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendDealInquiry = async (carInfo: string, userEmail: string): Promise<boolean> => {
  try {
    console.log('Sending deal inquiry for:', carInfo, 'to:', userEmail);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Error sending deal inquiry:', error);
    return false;
  }
};