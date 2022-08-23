interface IEnvironments {
  development: string;
  production: string;
  staging: string;
}

const ENV_BASE_URL: IEnvironments = {
  development: 'http://localhost:8080',
  production: 'https://elb.backend.lazzaro.io:8080',
  staging: 'https://elbpre.backend.lazzaro.io:8080',
}

const { VITE_ENV } = import.meta.env

export default ENV_BASE_URL[VITE_ENV as keyof IEnvironments]
