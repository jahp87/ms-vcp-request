export declare const config: () => {
    NODE_ENV: string;
    port: number;
    cors: boolean;
    logger: boolean;
    loggerLevels: any[];
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    };
};
