import { notification } from 'antd';

const toaster = (message) => {
  notification['success']({
    message: message,
    duration: 3,
  });
};

export { toaster };
