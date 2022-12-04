interface IEnvironments {
  dev: string;
  pre: string;
  production: string;
  staging: string;
}

const ENV_BASE_URL: IEnvironments = {
  dev: 'https://elb.backend.lazzaro.io:8080',
  pre: 'https://elbpre.backend.lazzaro.io:8080',
  production: 'https://elb.backend.lazzaro.io:8080',
  staging: 'https://elbpre.backend.lazzaro.io:8080',
};

const ENV = import.meta.env.MODE as keyof IEnvironments;

export default ENV_BASE_URL[ENV];
