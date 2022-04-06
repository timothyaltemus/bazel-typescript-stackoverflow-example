export interface HelloMessage {
  message: string;
}

export interface HelloService {
  sayHello(name: string): HelloMessage;
}

export class HelloServiceImpl implements HelloService {
  sayHello(name: string): HelloMessage {
    return { message: `Hello, ${name}!` };
  }
}
