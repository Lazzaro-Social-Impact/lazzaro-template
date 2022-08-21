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

const { REACT_APP_ENV } = process.env

export default ENV_BASE_URL[REACT_APP_ENV as keyof IEnvironments]
