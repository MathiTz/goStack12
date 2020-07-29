interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      emal: 'diego@rocketseat.com.br',
      name: 'Diego',
    },
  },
} as IMailConfig;
