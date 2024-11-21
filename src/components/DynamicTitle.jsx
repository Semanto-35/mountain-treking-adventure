import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    let pageTitle = 'Mountain Trekking';

    if (pathName === '/') {
      pageTitle = 'Home - Mountain Trekking';
    } else if (pathName === '/login') {
      pageTitle = 'Login - Mountain Trekking';
    } else if (pathName === '/register') {
      pageTitle = 'Register - Mountain Trekking';
    } else if (pathName === '/profile') {
      pageTitle = 'Your Profile - Mountain Trekking';
    } else if (pathName === '/updateProfile') {
      pageTitle = 'Update Profile - Mountain Trekking';
    } else if (pathName.includes('/details')) {
      pageTitle = 'Adventure Details - Mountain Trekking';
    } else if (pathName === '/forgetPassword') {
      pageTitle = 'Forgot Password - Mountain Trekking';
    }

    document.title = pageTitle;
  }, [location]);

};

export default DynamicTitle;
