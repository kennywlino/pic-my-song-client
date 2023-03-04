declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER: string;
    }
  }
}

export {}