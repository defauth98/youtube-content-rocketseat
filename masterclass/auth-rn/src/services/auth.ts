interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'kflasdmflkmdlsakmkflmaslkmfkldasm',
        user: {
          name: 'Daniel Ribeiro',
          email: 'neto.daniribeiro@gmail.com',
        },
      });
    }, 2000);
  });
}
